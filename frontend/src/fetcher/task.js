const addTask = async (data) => {
  try {
    const newTask = await fetch("http://localhost:8000/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await newTask.json();
  } catch (error) {
    throw new Error(error);
  }
};

const editTask = async (id, data) => {
  try {
    const newTask = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await newTask.json();
  } catch (error) {
    throw new Error(error);
  }
}

const deleteTask = async (id) => {
  try {
    const newTask = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    return await newTask.json();
  } catch (error) {
    throw new Error(error);
  }
}

export { addTask, editTask, deleteTask };
