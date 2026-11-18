import { useState } from 'react';
import { ChevronDown, Check, FolderCheck } from 'lucide-react';

export default function ChecklistAccordion({ sections = [], defaultOpenIndex = 0 }) {
  const [openIndices, setOpenIndices] = useState(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  function toggleSection(index) {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  return (
    <div className="checklist-accordion-group">
      {sections.map(([title, items], index) => {
        const isOpen = openIndices.includes(index);
        const sectionId = `accordion-section-${index}`;
        const headerId = `accordion-header-${index}`;

        return (
          <div key={title} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={sectionId}
                className="accordion-trigger"
                onClick={() => toggleSection(index)}
              >
                <span className="trigger-title">
                  <FolderCheck size={18} className="folder-icon" />
                  <span>{title}</span>
                </span>
                <span className="trigger-indicator">
                  <span className="item-count">{items.length} items</span>
                  <ChevronDown size={18} className={`chevron-icon ${isOpen ? 'rotated' : ''}`} />
                </span>
              </button>
            </h3>

            <div
              id={sectionId}
              role="region"
              aria-labelledby={headerId}
              className={`accordion-content ${isOpen ? 'expanded' : 'collapsed'}`}
            >
              <ul className="checklist-items">
                {items.map((item) => (
                  <li key={item} className="checklist-item">
                    <span className="check-box" aria-hidden="true">
                      <Check size={14} />
                    </span>
                    <span className="item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
