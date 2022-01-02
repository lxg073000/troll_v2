const filters = ["all", "mine", "development", "design", "marketing", "sales"];

export default function ProjectFilter({ changeFilter, currentFilter }) {
  const handleClick = (filter) => {
    changeFilter(filter);
  };
  const isActive = (filter) => {
    return filter === currentFilter ? "active" : "";
  };
  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filters.map((filter, idx) => (
          <button
            className={isActive(filter)}
            key={idx}
            onClick={() => handleClick(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}

//all
//current users
//category
