"use client";

import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { addMembers, deleteMember } from "@/fetcher/members";
import { getAllUsers } from "@/fetcher/user";
import { useRouter } from "next/navigation";

const MemberCard = ({ members, teamId, close }) => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [newMembers, setNewMembers] = useState([]);
  const [showAddMember, setShowAddMember] = useState(false);
  const userOptions = users.map((user) => ({
    label: user.username,
    value: user.id,
  }));

  const submitMembers = async (e) => {
    try {
      e.preventDefault();
      const memberPayload = {
        users: newMembers.map((user) => {
          return {
            teamId,
            userId: user.value,
          };
        }),
      };
      const memberData = await addMembers(memberPayload);
      close();
      router.refresh();
      window.alert(memberData.message);
    } catch (error) {
      window.alert(error);
    }
  };

  const removeMember = async (id) => {
      try {
        const member = await deleteMember(id)
        close()
        router.refresh();
        window.alert(member.message);
      } catch (error) {
        window.alert(error);
      }
  }

  const fetchUsers = async () => {
    const users = await getAllUsers();
    setUsers(users.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col gap-2 p-8 overflow-auto">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-2"
        >
          <p>{member?.user?.username}</p>
          <button className="bg-red-500 bg-opacity-50 p-2 rounded-lg hover:bg-opacity-80" onClick={() => removeMember(member.id)}>
            remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="bg-white text-white bg-opacity-30 p-2 rounded-lg hover:bg-opacity-50"
        onClick={() => setShowAddMember(!showAddMember)}
      >
        + Add Members
      </button>

      {showAddMember && (
        <form className="flex flex-col gap-2" onSubmit={submitMembers}>
          <MultiSelect
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
            id="members"
            name="members"
            options={userOptions}
            value={newMembers}
            onChange={setNewMembers}
            labelledBy="Add Members"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white bg-opacity-50 p-2 rounded-lg hover:bg-opacity-80"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default MemberCard;
