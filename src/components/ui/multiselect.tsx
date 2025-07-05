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
    
    function handleResize() {
      if (open && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 768;
        
        // Calculate available space
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const menuHeight = isMobile ? 250 : 300;
        
        // Determine if we should open up or down
        const shouldOpenUp = spaceBelow < menuHeight && spaceAbove > spaceBelow;
        
        const style: React.CSSProperties = {
          position: "absolute",
          zIndex: 9999,
          width: "100%",
          maxHeight: `${Math.min(menuHeight, shouldOpenUp ? spaceAbove - 20 : spaceBelow - 20)}px`,
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        };
        
        if (shouldOpenUp) {
          style.bottom = "100%";
          style.marginBottom = "4px";
        } else {
          style.top = "100%";
          style.marginTop = "4px";
        }
        
        setMenuStyle(style);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  useEffect(() => {
    if (open && searchRef.current && window.innerWidth >= 768) {
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
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSelected(s);
                      }}
                      className="hover:bg-primary/20 rounded-full p-0.5 cursor-pointer"
                    >
                      <X className="h-3 w-3" />
                    </span>
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
      
      {open && (
        <div 
          ref={menuRef} 
          className="absolute bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden"
          style={menuStyle}
        >
          {/* Search Input - Desktop Only */}
          {window.innerWidth >= 768 && (
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
          )}

          {/* Options List */}
          <div className="overflow-y-auto" style={{ maxHeight: window.innerWidth < 768 ? '200px' : '240px' }}>
            {(window.innerWidth >= 768 ? filteredOptions : options).length === 0 ? (
              <div className="p-4 text-center text-muted-foreground text-sm">
                No se encontraron opciones
              </div>
            ) : (
              (window.innerWidth >= 768 ? filteredOptions : options).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleOption(option)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-primary/5 transition-colors duration-150 text-sm border-b border-border/50 last:border-b-0 ${
                    selected.includes(option) 
                      ? 'bg-primary/10 font-medium text-primary' 
                      : 'text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-center w-4 h-4 border-2 rounded border-primary/30 transition-colors duration-150">
                    {selected.includes(option) && (
                      <Check className="h-2.5 w-2.5 text-primary" />
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                </button>
              ))
            )}
          </div>

          {/* Selected Items Summary (Mobile) */}
          {selected.length > 0 && window.innerWidth < 768 && (
            <div className="sticky bottom-0 bg-background border-t border-border p-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {selected.length} seleccionado{selected.length !== 1 ? 's' : ''}
                </span>
                <button
                  type="button"
                  onClick={() => onChange([])}
                  className="text-xs text-primary hover:text-primary/80 font-medium"
                >
                  Limpiar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 