import Modal from "./Modal";

export default function ErrorModal({
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
          src="/assets/Error.png"
          alt="Error"
          className="mx-auto w-40 h-40"
        />

        <h3 className="text-xl font-semibold">
          Oops! Something went wrong.
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          We couldn't send your message. Please try again or check your
          connection.
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
          Try Again
        </button>
      </div>
    </Modal>
  );
}

