"use client";
import CustomModal from "@/components/elements/Modal";
import TeamForm from "@/components/parts/Forms/TeamForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = ({ teams }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [team, setTeam] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleTeamChange = (event) => {
    setTeam(event.target.value);
  };



  useEffect(() => {
    setTeam(teams[0]?.name);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 bg-white bg-opacity-25 backdrop-blur-md p-10 rounded-xl w-1/4 shadow-lg">
        <h1 className="text-2xl text-white">Please pick a team</h1>
        {team && (
          <select
            className="bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-lg"
            onChange={handleTeamChange}
          >
            {teams.map((team) => (
              <option key={team?.id}>{team?.name}</option>
            ))}
          </select>
        )}
        <button
          className="bg-white bg-opacity-30 p-2 rounded-lg hover:bg-opacity-50 text-white"
          onClick={openModal}
        >
          + Add Team
        </button>
        {team && (
          <button
            className="bg-blue-700 bg-opacity-70 p-2 rounded-lg hover:bg-opacity-90 text-white"
            onClick={() => router.push(`/cards/${team}`)}
          >
            Go
          </button>
        )}
      </div>
      <>
        {isOpen && (
          <CustomModal
            change={closeModal}
            type="create"
            element="team"
            children={<TeamForm close={closeModal} />}
          />
        )}
      </>
    </>
  );
};

export default HomePage;
