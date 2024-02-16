"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Task from "@/components/parts/Task";
import CustomModal from "@/components/elements/Modal";
import CardForm from "@/components/parts/Forms/CardForm";
import TaskForm from "@/components/parts/Forms/TaskForm";
import { deleteCard } from "@/fetcher/cards";

const Card = ({ cardId, title, task, teamId }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [card, setCard] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openCard = () => setCard(true);
  const closeCard = () => setCard(false);

  const handleDelete = async () => {
    try {
      const card = await deleteCard(cardId);
      Swal.fire({
        title: "Success!",
        text: card.message,
        icon: "success",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      router.refresh();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  };
  return (
    <>
      <article className="z-10 flex flex-col gap-5 bg-white bg-opacity-50 rounded-xl p-5 backdrop-filter backdrop-blur-lg">
        <h1 className="text-2xl">{title}</h1>
        {task.map((task) => (
          <Task
            key={task?.id}
            cardId={cardId}
            taskId={task?.id}
            title={task?.title}
            category={task?.category}
            deadline={task?.deadline}
          />
        ))}
        <button
          className="bg-white bg-opacity-30 p-2 rounded-lg hover:bg-opacity-50"
          onClick={openModal}
        >
          + Add Task
        </button>

        <button
          className="flex justify-center hover:bg-white hover:bg-opacity-30 rounded-xl"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
        {show && (
          <div className="flex justify-around gap-2">
            <button
              className="w-1/4 bg-blue-500 bg-opacity-50 p-2 rounded-lg hover:bg-opacity-80"
              onClick={openCard}
            >
              Edit
            </button>
            <button
              className="w-1/4 bg-red-500 bg-opacity-50 p-2 rounded-lg hover:bg-opacity-80"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </article>
      {isOpen && (
        <CustomModal
          change={closeModal}
          type="create"
          element="task"
          children={<TaskForm cardId={cardId} close={closeModal} />}
        />
      )}
      {card && (
        <CustomModal
          change={closeCard}
          type="edit"
          element="card"
          children={
            <CardForm
              cardId={cardId}
              teamId={teamId}
              title={title}
              close={closeCard}
            />
          }
        />
      )}
    </>
  );
};

export default Card;
