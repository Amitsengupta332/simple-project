const App = () => {
  const handleClick = () => {
    alert("Hello World!");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={handleClick}
        className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 transition duration-300 "
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
