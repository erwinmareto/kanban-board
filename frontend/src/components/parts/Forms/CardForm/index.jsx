"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { addCard, editCard } from "@/fetcher/cards";

const CardForm = ({ cardId, teamId, title, close }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
    },
  });
  const onSubmit = async (data) => {
    try {
      const payload = { teamId, ...data };
      if (title) {
        const cardData = await editCard(cardId, payload);
        close();
        router.refresh();
        Swal.fire({
          title: 'Success!',
          text: cardData.message,
          icon: 'success',
          timer: 2000,
          showCloseButton: false,
          showConfirmButton: false,
          timerProgressBar: true
        })
        return;
      }
      const cardData = await addCard(payload);
      close();
      router.refresh();
      Swal.fire({
        title: 'Success!',
        text: error,
        icon: 'success',
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true
      })
      return;
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
        timerProgressBar: true
      })
    }
  };
  return (
    <form className="flex flex-col gap-2 p-8" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input
        className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
        {...register("title", { required: "Title is Required" })}
        id="title"
        name="title"
      />
      {errors.title?.type === "required" && (
        <p role="alert" className="text-red-500 text-xs italic">
          Title is required
        </p>
      )}
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/4 rounded-md px-4 py-2 bg-blue-600 bg-opacity-50 text-white hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CardForm;
