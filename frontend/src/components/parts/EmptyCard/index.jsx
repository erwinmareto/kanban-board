"use client";

import CustomModal from "@/components/elements/Modal";
import { useState } from "react";
import CardForm from "../Forms/CardForm";

const EmptyCard = ({ teamId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <article
        role="button"
        className="flex flex-col gap-5 bg-white bg-opacity-30 rounded-xl p-5 backdrop-filter backdrop-blur-lg hover:bg-white hover:bg-opacity-50"
        onClick={openModal}
      >
        <h1 className="text-2xl text-white">+ Add Card</h1>
      </article>
      {isOpen && <CustomModal change={closeModal} type="create" element="card" children={<CardForm teamId={teamId} />} />}
    </>
  );
};

export default EmptyCard;
