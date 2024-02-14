"use client";
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
import { addTask, editTask } from "@/fetcher/task";
import { useRouter } from "next/navigation";

const TaskForm = ({ cardId, taskId, title, category, deadline, close }) => {
  const router = useRouter();
  const userId = getCookie("id");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      category: category,
      deadline: deadline ? new Date(deadline).toISOString().slice(0, 16) : "",
    },
  });
  const onSubmit = async (data) => {
    try {
      const payload = { ...data, cardId, userId };
      if (title) {
        const taskData = await editTask(taskId, payload);
        close();
        router.refresh();
        window.alert(taskData.message);
        return;
      }
      const taskData = await addTask(payload);
      close();
      // console.log(typeof close)
      router.refresh();
      window.alert(taskData.message);
      return;
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <form className="flex flex-col p-8" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title" className="text-white">
        Title:
      </label>
      <input
        {...register("title", { required: "Title is Required" })}
        aria-invalid={errors.title ? "true" : "false"}
        type="text"
        id="title"
        name="title"
        className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
      />
      {errors.title?.type === "required" && (
        <p role="alert" className="text-red-500 text-xs italic">
          Title is required
        </p>
      )}

      <label htmlFor="category" className="text-white">
        Category:
      </label>
      <select
        {...register("category", { required: "Choose a Category" })}
        id="category"
        name="category"
        className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
      >
        <option value="">Select a Category</option>
        <option value="URGENT">Urgent</option>
        <option value="MODERATE">Moderate</option>
        <option value="MINOR">Minor</option>
        <option value="DESIGN">Design</option>
        <option value="FINANCE">Finance</option>
        <option value="MARKETING">Marketing</option>
        <option value="MANAGEMENT">Management</option>
        <option value="LOGISTICS">Logistics</option>
        <option value="IT">IT</option>
      </select>
      {errors.category?.type === "required" && (
        <p role="alert" className="text-red-500 text-xs italic">
          Please choose a category
        </p>
      )}

      <label htmlFor="deadline" className="text-white">
        Deadline:
      </label>
      <input
        {...register("deadline", { required: "Deadline is Required" })}
        type="datetime-local"
        id="deadline"
        name="deadline"
        className="bg-white bg-opacity-20 rounded p-2 mb-4 backdrop-filter backdrop-blur-lg"
      />
      {errors.deadline?.type === "required" && (
        <p role="alert" className="text-red-500 text-xs italic">
          Deadline is required
        </p>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/2 rounded-md px-4 py-2 bg-blue-600 bg-opacity-50 text-white hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
