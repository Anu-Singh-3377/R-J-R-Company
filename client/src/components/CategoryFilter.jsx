export default function CategoryFilter({ categories = [], selected = 'All', onSelect }) {
  return (
    <div className="category-filter-bar" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-pill ${selected === cat ? 'active' : ''}`}
          aria-pressed={selected === cat}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
