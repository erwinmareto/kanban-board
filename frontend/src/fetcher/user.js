const getAllUsers = async () => {
  try {
    const users = await fetch(`http://localhost:8000/users`, {
      method: "GET",
      cache: "no-store",
    });
    return await users.json();
  } catch (error) {
    throw new Error(error);
  }
};

export { getAllUsers };
