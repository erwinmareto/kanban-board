const getMembersByTeamId = async (teamId) => {
  try {
    const members = await fetch(
      `http://localhost:8000/members/teams/${teamId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    return await members.json();
  } catch (error) {
    throw new Error(error);
  }
};

const addMembers = async (data) => {
  try {
    const members = await fetch(`http://localhost:8000/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await members.json();
  } catch (error) {
    throw new Error(error);
  }
};

const deleteMember = async (id) => {
  try {
    const members = await fetch(`http://localhost:8000/members/${id}`, {
      method: "DELETE",
    });
    return await members.json();
  } catch (error) {
    throw new Error(error);
  }
}

export { getMembersByTeamId, addMembers, deleteMember };
