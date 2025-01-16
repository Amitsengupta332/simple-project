import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <div className="text-5xl mb-6">{count}</div>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
