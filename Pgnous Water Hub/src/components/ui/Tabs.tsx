import { createContext, useContext, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  value: string;
  setValue: (v: string) => void;
}
const TabsContext = createContext<TabsContextValue | null>(null);

export const Tabs = ({ defaultValue, children, className }: { defaultValue: string; children: ReactNode; className?: string }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    role="tablist"
    className={cn(
      "inline-flex flex-wrap gap-2 p-1.5 bg-mist rounded-xl border border-border-subtle",
      className,
    )}
  >
    {children}
  </div>
);

export const TabsTrigger = ({ value, children }: { value: string; children: ReactNode }) => {
  const ctx = useContext(TabsContext)!;
  const active = ctx.value === value;
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-4 py-2 text-sm font-semibold rounded-lg transition-all",
        active
          ? "bg-white text-navy shadow-card"
          : "text-slate hover:text-navy",
      )}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className }: { value: string; children: ReactNode; className?: string }) => {
  const ctx = useContext(TabsContext)!;
  if (ctx.value !== value) return null;
  return <div className={cn("animate-fade-in", className)}>{children}</div>;
};
