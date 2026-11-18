import { Search, X } from 'lucide-react';

export default function SearchBar({
  id = 'search-input',
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
  label = 'Search',
}) {
  return (
    <div className="search-bar-component">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" aria-hidden="true" />
        <input
          id={id}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="search-input-field"
        />
        {value && onClear && (
          <button
            type="button"
            className="clear-search-btn"
            aria-label="Clear search query"
            onClick={onClear}
          >
            <X size={15} />
          </button>
        )}
      </div>
    </div>
  );
}
