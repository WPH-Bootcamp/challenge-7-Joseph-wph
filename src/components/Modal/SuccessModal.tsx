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
          alt="Success"
          className="mx-auto w-40 h-40"
        />

        <h3 className="text-xl font-semibold">Message Received!</h3>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Thanks for reaching out — we’ll get back to you as soon as possible.
        </p>

        <button
          onClick={onClose}
          className="
            mt-4 w-full py-2 rounded-full
            bg-orange-500 text-white
            hover:bg-orange-600
            transition-colors
          "
        >
          Back to Home
        </button>
      </div>
    </Modal>
  );
}
