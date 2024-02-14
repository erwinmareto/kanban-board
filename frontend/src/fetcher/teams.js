const getTeamsByUserId = async (userId) => {
  try {
    const teams = await fetch(`http://localhost:8000/teams/user/${userId}`, {
      method: "GET",
      cache: 'no-store',
    });
    return await teams.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getTeamsByTeamName = async (teamName) => {
  try {
    const team = await fetch(`http://localhost:8000/teams/team/${teamName}`, {
      method: "GET",
      cache: 'no-store',
    });
    return await team.json();
  } catch (error) {
    throw new Error(error);
  }
};

const addTeam = async (data) => {
  try {
    const team = await fetch(`http://localhost:8000/teams`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await team.json();
  } catch (error) {
    throw new Error(error);
  }
};

export { getTeamsByUserId, getTeamsByTeamName, addTeam };
