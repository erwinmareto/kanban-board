"use client"
import { addTeam } from "@/fetcher/teams";
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
const TeamForm = () => {
  const userId = getCookie("id");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const payload = { ...data, userId };
      const teamData = await addTeam(payload);
      window.alert(teamData.message);
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <form
      className="flex flex-col gap-2 p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name" className="text-white">
        Team Name:
      </label>
      <input
        {...register("name", {
          required: true,
          maxLength: { value: 20, message: "error message" },
        })}
        type="text"
        id="name"
        name="name"
        className="bg-white bg-opacity-20 rounded p-2 backdrop-filter backdrop-blur-lg"
      />
      {errors.name?.type === "required" && (
        <p role="alert" className="text-red-500 text-xs italic">
          Team name is required
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

export default TeamForm;
