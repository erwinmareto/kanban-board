"use client";
import { useEffect, useState } from "react";
import CustomModal from "@/components/elements/Modal";
import Card from "@/components/parts/Card";
import EmptyCard from "@/components/parts/EmptyCard";
import MemberCard from "@/components/parts/MemberCard";
import { getMembersByTeamId } from "@/fetcher/members";

const CardPage = ({ cards, teamId, teamName }) => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const cardAmount = cards.length;
  const columns = [[], [], [], []];

  cards.forEach((card, i) => {
    columns[i % 4].push(card);
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const fetchUsers = async () => {
    try {
      const users = await getMembersByTeamId(teamId);
      setUsers(users.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="flex items-center gap-2">
        <h1 className="text-3xl py-3 text-white">{teamName}</h1>
        <button
          className="bg-white text-white bg-opacity-30 p-2 rounded-lg -translate-x-16 transition-all opacity-0 delay-50 duration-200 hover:bg-opacity-50 hover:translate-x-0 hover:opacity-100"
          onClick={openModal}
        >
          Members
        </button>
      </div>
      <section className="z-10 grid grid-cols-4 gap-5 w-full items-start text-sm">
        {columns.map((column, i) => {
          return (
            <div className="flex flex-col gap-5" key={i}>
              {column.map((card) => (
                <Card
                  key={card?.id}
                  cardId={card?.id}
                  title={card?.title}
                  task={card?.Task}
                  teamId={teamId}
                />
              ))}
              {cardAmount % 4 === i && <EmptyCard teamId={teamId} />}
            </div>
          );
        })}
        {isOpen && (
          <CustomModal
            change={closeModal}
            type="list"
            element="teams"
            children={
              <MemberCard members={users} teamId={teamId} close={closeModal} />
            }
          />
        )}
      </section>
    </>
  );
};

export default CardPage;
