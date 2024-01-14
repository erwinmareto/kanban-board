"use client";
import CustomModal from "@/components/elements/Modal";
import moment from "moment";
import { useState } from "react";
import TaskForm from "../Forms/TaskForm";
import TaskHeader from "@/components/elements/TaskCard/Header";
import { deleteTask } from "@/fetcher/task";

const Task = ({ cardId, taskId, title, category, deadline }) => {
  const [isEdit, setIsEdit] = useState(false);

  const openEdit = () => setIsEdit(true);
  const closeEdit = () => setIsEdit(false);

  const handleDelete = async () => {
    const task = await deleteTask(taskId);
    window.alert(task.message);
  };
  return (
    <>
      <article className="flex flex-col gap-2 bg-fuchsia-200 bg-opacity-50 rounded-lg p-2">
        <TaskHeader
          category={category}
          editor={openEdit}
          deleter={handleDelete}
        />
        <div>
          <p className="text-sm">{title} </p>
          {/* <p className="text-xs">name: John doe </p> */}
        </div>
        <div className="flex justify-end">
          <p className="text-sm">{moment().to(deadline)}</p>
        </div>
      </article>
      {isEdit && (
        <CustomModal
          change={closeEdit}
          type="edit"
          element="task"
          children={
            <TaskForm
              cardId={cardId}
              taskId={taskId}
              title={title}
              category={category}
              deadline={deadline}
            />
          }
        />
      )}
    </>
  );
};

export default Task;
