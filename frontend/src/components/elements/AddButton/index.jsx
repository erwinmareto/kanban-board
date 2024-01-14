const AddButton = ({ children }) => {
  return (
    <button className="bg-white bg-opacity-30 p-2 rounded-lg hover:bg-opacity-50">
      {children}
    </button>
  );
};

export default AddButton;
