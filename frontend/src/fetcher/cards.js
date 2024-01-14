const getCardsWithTasksByTeamId = async (teamId) => {
  try {
    const allCards = await fetch(
      `http://localhost:8000/cards/all/tasks/id/${teamId}`,
      {
        method: "GET",
        next: { revalidate: 10 },
      }
    );
    return await allCards.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getCardsWithTasksByTeamName = async (teamName) => {
  try {
    const allCards = await fetch(
      `http://localhost:8000/cards/all/tasks/name/${teamName}`,
      {
        method: "GET",
        next: { revalidate: 10 },
      }
    );
    return await allCards.json();
  } catch (error) {
    throw new Error(error);
  }
};

const addCard = async (data) => {
  try {
    const newCard = await fetch("http://localhost:8000/cards/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await newCard.json();
  } catch (error) {
    throw new Error(error);
  }
}

const editCard = async (id, data) => {
  try {
    const newCard = await fetch(`http://localhost:8000/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await newCard.json();
  } catch (error) {
    throw new Error(error);
  }
}

const deleteCard = async (id) => {
  try {
    const newCard = await fetch(`http://localhost:8000/cards/${id}`, {
      method: "DELETE",
    });
    return await newCard.json();
  } catch (error) {
    throw new Error(error);
  }
}

export { getCardsWithTasksByTeamId, getCardsWithTasksByTeamName, addCard, editCard, deleteCard };
