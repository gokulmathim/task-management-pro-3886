import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import FilterButtons from './FilterButtons';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [newTask, setNewTask] = useState('');
  // State for filter selection
  const [filter, setFilter] = useState('all');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  // Handler for filter change, stub for future task filtering logic
  const handleFilterChange = (value) => {
    setFilter(value);
    // Placeholder: add filtering logic here in real app
    // e.g., filter tasks by status
  };

  // --- Demo task list state ---
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish React project", completed: true },
    { id: 3, title: "Read book", completed: false },
    { id: 4, title: "Update resume", completed: true }
  ]);

  // Demo rendering of (all) tasks; in future, a filter would determine which ones to show
  function renderTasks() {
    return (
      <ul style={{ maxWidth: 400, margin: "2rem auto", padding: 0, listStyle: "none" }}>
        {tasks.map(task => (
          <li
            key={task.id}
            className={task.completed ? "tz-task-completed" : ""}
            style={{
              textAlign: "left",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              marginBottom: "0.65rem",
              padding: "0.82rem 1.2rem",
              fontWeight: 500,
              fontSize: "1rem",
              letterSpacing: "0.01em"
            }}
            aria-label={task.completed ? "Completed task" : "Active task"}
          >
            {task.title}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: "2rem" }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        {/* Task input field */}
        <div style={{ margin: "2rem auto 1rem", maxWidth: 400 }}>
          <input
            className="task-input"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Add a new task…"
            aria-label="Add a new task"
            autoComplete="off"
            type="text"
          />
        </div>

        {/* Filter buttons */}
        <FilterButtons current={filter} onChange={handleFilterChange} />

        {/* Demo list of tasks */}
        {renderTasks()}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
