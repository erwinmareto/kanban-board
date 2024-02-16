"use client";
import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
import { addTeam } from "@/fetcher/teams";
import { getAllUsers } from "@/fetcher/user";
import { addMembers } from "@/fetcher/members";
const TeamForm = ({ close }) => {
  const router = useRouter();
  const [newMembers, setNewMembers] = useState([]);
  const [users, setUsers] = useState([]);
  const [showAddMember, setShowAddMember] = useState(false);
  const userId = getCookie("id");
  const userOptions = users.map((user) => ({
    label: user.username,
    value: user.id,
  }));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const payload = { ...data, userId };
      const teamData = await addTeam(payload);
      if (newMembers) {
        const memberPayload = {
          users: newMembers.map((user) => {
            return {
              teamId: teamData.data.id,
              userId: user.value,
            };
          }),
        };
        await addMembers(memberPayload);
      }
      close();
      router.refresh();
      window.alert(teamData.message);
    } catch (error) {
      window.alert(error);
    }
  };

  const fetchMembers = async () => {
    const users = await getAllUsers();
    setUsers(users.data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);
  return (
    <form
      className="flex flex-col gap-2 p-8 overflow-auto"
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

      <button
      type="button"
        className="bg-white text-white bg-opacity-30 p-2 rounded-lg hover:bg-opacity-50"
        onClick={() => setShowAddMember(!showAddMember)}
      >
        + Add Members
      </button>

      {showAddMember && (
        <MultiSelect
          className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
          id="members"
          name="members"
          options={userOptions}
          value={newMembers}
          onChange={setNewMembers}
          labelledBy="Add Members"
        />
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
