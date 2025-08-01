import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
/**
 * FilterButtons - modern, minimal task filter buttons for "All", "Active", "Completed"
 * @param {Object} props
 * @param {string} props.current - Current filter ("all", "active", "completed")
 * @param {function} props.onChange - Handler to update selected filter
 * @returns {JSX.Element}
 */
function FilterButtons({ current, onChange }) {
  // Labels to display and their keys
  const FILTERS = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" }
  ];

  return (
    <div className="tz-filter-btn-group" role="group" aria-label="Task filters">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`tz-filter-btn${current === key ? " selected" : ""}`}
          onClick={() => onChange(key)}
          aria-pressed={current === key}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
