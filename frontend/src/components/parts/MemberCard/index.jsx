const MemberCard = ({ members }) => {
  return (
    <div className="flex flex-col gap-2 p-8">
      {members.map((member) => (
        <div key={member.id} className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-2">
          <p>{member?.user?.username}</p>
          <button className="bg-red-500 bg-opacity-50 p-2 rounded-lg hover:bg-opacity-80">
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
