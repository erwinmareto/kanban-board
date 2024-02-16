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

export { addMembers };
