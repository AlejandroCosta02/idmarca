import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ options, selected, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const menuHeight = 320; // px, matches max-h-72
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const isMobile = window.innerWidth < 768;
      
      const style: React.CSSProperties = {
        position: "absolute",
        width: rect.width,
        zIndex: 9999
      };
      
      if (isMobile) {
        // Mobile: full width, positioned from top
        style.left = 0;
        style.right = 0;
        style.top = rect.bottom + window.scrollY + 4;
        style.maxHeight = Math.min(menuHeight, window.innerHeight - rect.bottom - 20);
        style.width = "100vw";
        style.marginLeft = "-1rem";
        style.marginRight = "-1rem";
      } else {
        // Desktop: positioned relative to button
        style.left = rect.left + window.scrollX;
        if (spaceBelow >= menuHeight || spaceBelow >= spaceAbove) {
          // Open down
          style.top = rect.bottom + window.scrollY;
          style.maxHeight = menuHeight;
        } else {
          // Open up
          style.bottom = window.innerHeight - rect.top + window.scrollY;
          style.maxHeight = Math.min(menuHeight, spaceAbove - 8);
        }
      }
      setMenuStyle(style);
    }
  }, [open]);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="relative" ref={buttonRef}>
      <button
        type="button"
        className="w-full border rounded px-3 py-2 text-sm text-left bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setOpen((o) => !o)}
      >
        {selected.length === 0 ? (
          <span className="text-muted-foreground">{placeholder || "Selecciona"}</span>
        ) : (
          <span className="flex flex-wrap gap-1">
            {selected.map((s) => (
              <span key={s} className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">
                {s}
              </span>
            ))}
          </span>
        )}
      </button>
      {open && typeof window !== "undefined" && createPortal(
        <div ref={menuRef} style={menuStyle} className="bg-background border border-border rounded shadow-lg max-h-72 overflow-y-auto z-50">
          {options.map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary/5 transition ${selected.includes(option) ? 'font-semibold bg-primary/10' : ''}`}
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="form-checkbox h-4 w-4 text-primary border-primary focus:ring-primary"
              />
              <span className="text-foreground">{option}</span>
            </label>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}; 