import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Search, X, Check, ChevronDown } from "lucide-react";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ options, selected, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Hooks must always be called
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (open && searchRef.current && !isMobile) {
      searchRef.current.focus();
    }
  }, [open, isMobile]);

  useEffect(() => {
    if (open && !isMobile && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuStyle({
        position: "fixed",
        left: rect.left,
        top: rect.bottom + 4,
        width: rect.width,
        maxHeight: 380,
        zIndex: 9999,
        borderRadius: 8,
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        background: "var(--background)",
        border: "1px solid var(--border)",
        overflowY: "auto"
      });
    }
  }, [open, isMobile]);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Native select for mobile
  if (isMobile) {
    return (
      <div className="relative">
        <select
          multiple
          className="w-full border rounded-lg px-4 py-3 text-base text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none min-h-[48px] text-lg"
          value={selected}
          onChange={e => {
            const values = Array.from(e.target.selectedOptions).map(opt => opt.value);
            onChange(values);
          }}
        >
          {selected.length === 0 && (
            <option value="" disabled hidden>{placeholder || "Selecciona"}</option>
          )}
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const removeSelected = (option: string) => {
    onChange(selected.filter((o) => o !== option));
  };

  // Desktop version: portal dropdown
  return (
    <div className="relative" ref={buttonRef}>
      <button
        type="button"
        className="w-full border rounded-lg px-4 py-3 text-base md:text-sm text-left bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            {selected.length === 0 ? (
              <span className="text-muted-foreground">{placeholder || "Selecciona"}</span>
            ) : (
              <span className="flex flex-wrap gap-1">
                {selected.map((s) => (
                  <span key={s} className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                    {s}
                  </span>
                ))}
              </span>
            )}
          </div>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {open && typeof window !== "undefined" && createPortal(
        <div
          ref={menuRef}
          style={menuStyle}
          className="bg-background border border-border rounded-lg shadow-lg z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent"
        >
          {options.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground text-sm">
              No se encontraron opciones
            </div>
          ) : (
            options.map((option) => (
              <label
                key={option}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-primary/5 transition-colors duration-150 text-base border-b border-border/50 last:border-b-0 ${selected.includes(option) ? 'font-semibold bg-primary/10' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="form-checkbox h-5 w-5 md:h-4 md:w-4 text-primary border-primary focus:ring-primary"
                />
                <span className="text-foreground">{option}</span>
              </label>
            ))
          )}
        </div>,
        document.body
      )}
    </div>
  );
}; 