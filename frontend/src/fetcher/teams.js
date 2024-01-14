const getTeamsByUserId = async (userId) => {
    try {
        const teams = await fetch(`http://localhost:8000/teams/user/${userId}`, {
            method: "GET",
            next: { revalidate: 1 },
          });
        return await teams.json();
    } catch (error) {
        throw new Error(error)
    }
}

const addTeam = async (data) => {
    try {
        const team = await fetch(`http://localhost:8000/teams`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
        return await team.json();
    } catch (error) {
        throw new Error(error)
    }
}

export {
    getTeamsByUserId,
    addTeam
}