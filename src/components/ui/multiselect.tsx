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

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const menuHeight = 400; // Increased height for search
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const isMobile = window.innerWidth < 768;
      
      const style: React.CSSProperties = {
        position: "absolute",
        width: rect.width,
        zIndex: 9999
      };
      
      if (isMobile) {
        // Mobile: full width, positioned from top with better spacing
        style.left = 0;
        style.right = 0;
        style.top = rect.bottom + window.scrollY + 8;
        style.maxHeight = Math.min(menuHeight, window.innerHeight - rect.bottom - 40);
        style.width = "100vw";
        style.marginLeft = "-1rem";
        style.marginRight = "-1rem";
        style.borderRadius = "12px";
        style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
      } else {
        // Desktop: positioned relative to button
        style.left = rect.left + window.scrollX;
        if (spaceBelow >= menuHeight || spaceBelow >= spaceAbove) {
          // Open down
          style.top = rect.bottom + window.scrollY + 4;
          style.maxHeight = menuHeight;
        } else {
          // Open up
          style.bottom = window.innerHeight - rect.top + window.scrollY + 4;
          style.maxHeight = Math.min(menuHeight, spaceAbove - 16);
        }
      }
      setMenuStyle(style);
    }
  }, [open]);

  useEffect(() => {
    if (open && searchRef.current) {
      searchRef.current.focus();
    }
  }, [open]);

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
              <div className="flex flex-wrap gap-1 max-w-full">
                {selected.slice(0, 2).map((s) => (
                  <span 
                    key={s} 
                    className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium"
                  >
                    <span className="truncate max-w-20">{s}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSelected(s);
                      }}
                      className="hover:bg-primary/20 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                {selected.length > 2 && (
                  <span className="inline-flex items-center bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm">
                    +{selected.length - 2} más
                  </span>
                )}
              </div>
            )}
          </div>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>
      
      {open && typeof window !== "undefined" && createPortal(
        <div 
          ref={menuRef} 
          style={menuStyle} 
          className="bg-background border border-border rounded-lg shadow-xl max-h-96 overflow-hidden z-50"
        >
          {/* Search Input */}
          <div className="sticky top-0 bg-background border-b border-border p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                ref={searchRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar opciones..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-80 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground text-sm">
                No se encontraron opciones
              </div>
            ) : (
              filteredOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-primary/5 transition-colors duration-150 text-base border-b border-border/50 last:border-b-0 ${
                    selected.includes(option) 
                      ? 'bg-primary/10 font-medium text-primary' 
                      : 'text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-center w-5 h-5 border-2 rounded border-primary/30 transition-colors duration-150">
                    {selected.includes(option) && (
                      <Check className="h-3 w-3 text-primary" />
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                </label>
              ))
            )}
          </div>

          {/* Selected Items Summary (Mobile) */}
          {selected.length > 0 && window.innerWidth < 768 && (
            <div className="sticky bottom-0 bg-background border-t border-border p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {selected.length} seleccionado{selected.length !== 1 ? 's' : ''}
                </span>
                <button
                  type="button"
                  onClick={() => onChange([])}
                  className="text-sm text-primary hover:text-primary/80 font-medium"
                >
                  Limpiar
                </button>
              </div>
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}; 