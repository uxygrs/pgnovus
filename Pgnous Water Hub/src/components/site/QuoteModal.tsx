import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().min(2, "Please enter your company").max(120),
  email: z.string().trim().email("Please enter a valid email").max(160),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(25),
  service: z.union([
    z.literal("ETP"),
    z.literal("STP"),
    z.literal("RO"),
    z.literal("DM"),
    z.literal("Cooling Tower"),
    z.literal("Other"),
  ], { message: "Please select a service" }),
  message: z.string().trim().min(10, "Please share a few more details").max(1000),
});

type FormValues = z.infer<typeof schema>;

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

const inputBase =
  "w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-navy placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition";

export const QuoteModal = ({ open, onClose }: QuoteModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Quote request received", {
      description: `Thank you, ${values.name}. Our team will contact you within 24 hours.`,
    });
    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Request a Quote"
      description="Tell us about your project — we'll respond within 24 hours."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full name" error={errors.name?.message}>
            <input {...register("name")} className={cn(inputBase, errors.name && "border-destructive")} placeholder="Your name" />
          </Field>
          <Field label="Company" error={errors.company?.message}>
            <input {...register("company")} className={cn(inputBase, errors.company && "border-destructive")} placeholder="Company name" />
          </Field>
          <Field label="Work email" error={errors.email?.message}>
            <input type="email" {...register("email")} className={cn(inputBase, errors.email && "border-destructive")} placeholder="you@company.com" />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input type="tel" {...register("phone")} className={cn(inputBase, errors.phone && "border-destructive")} placeholder="+91 ..." />
          </Field>
        </div>

        <Field label="Service of interest" error={errors.service?.message}>
          <select {...register("service")} className={cn(inputBase, "appearance-none", errors.service && "border-destructive")} defaultValue="">
            <option value="" disabled>Select a service…</option>
            <option value="ETP">Effluent Treatment Plant (ETP)</option>
            <option value="STP">Sewage Treatment Plant (STP)</option>
            <option value="RO">Membrane RO System</option>
            <option value="DM">De-mineralization Unit</option>
            <option value="Cooling Tower">Cooling Tower</option>
            <option value="Other">Other / Combined</option>
          </select>
        </Field>

        <Field label="Project details" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={4}
            className={cn(inputBase, "resize-y min-h-[100px]", errors.message && "border-destructive")}
            placeholder="Capacity needs, location, timeline…"
          />
        </Field>

        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end pt-2">
          <Button type="button" variant="ghost" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : (<>Send Request <Send size={16} /></>)}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-sm font-semibold text-navy mb-1.5">{label}</span>
    {children}
    {error && <span className="block text-xs text-destructive mt-1">{error}</span>}
  </label>
);
