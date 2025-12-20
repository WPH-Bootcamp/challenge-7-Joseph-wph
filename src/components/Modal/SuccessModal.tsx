import Modal from "./Modal";

export default function SuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-center space-y-4">
        <img
          src="/assets/Success.png"
          alt="success"
          className="mx-auto w-50 h-50"
        />

        <h3 className="text-xl font-semibold">Message Received!</h3>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Thanks for reaching out — we’ll get back to you as soon as possible.
        </p>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 rounded-full
                     bg-orange-500 text-white
                     hover:bg-orange-600 transition"
        >
          Back to Home
        </button>
      </div>
    </Modal>
  );
}
