import React, { useState } from 'react';
  import { PlusCircleIcon } from 'lucide-react';

  function App() {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
      if (newTodo.trim()) {
        setTodos([...todos, newTodo]);
        setNewTodo('');
      }
    };

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">Modern Dashboardb 2.0</h1>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
            <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <PlusCircleIcon size={18} />
            </button>
          </div>
          <ul className="space-y-4">
            {todos.map((todo, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded shadow-md flex items-center justify-between">
                <span>{todo}</span>
                <button onClick={() => setTodos(todos.filter((_, i) => i !== index))} className="text-red-500 hover:text-red-600">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default App;
