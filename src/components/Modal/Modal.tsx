interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Modal box */}
      <div className="
        relative z-10 w-full max-w-md
        bg-white text-black
        dark:bg-zinc-900 dark:text-white
        rounded-2xl p-6
        shadow-xl
        animate-scale-in
      ">
        {children}
      </div>
    </div>
  );
}
