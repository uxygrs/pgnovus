import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ open, onClose, title, description, children, className }: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <button
        aria-label="Close modal"
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-fade-in-slow"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className={cn(
          "relative bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-elevated animate-fade-in max-h-[92vh] overflow-y-auto",
          className,
        )}
      >
        <div className="sticky top-0 bg-white border-b border-border-subtle px-6 py-5 flex items-start justify-between gap-4 rounded-t-2xl">
          <div>
            <h3 id="modal-title" className="text-xl font-semibold text-navy">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-slate mt-1">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate hover:text-navy transition-colors p-1 -m-1"
          >
            <X size={22} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
