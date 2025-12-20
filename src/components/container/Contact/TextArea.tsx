interface Props {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>

      <textarea
        rows={5}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          px-4 py-3
          text-sm
          bg-white text-gray-900
          border border-gray-300
          placeholder:text-gray-400

          dark:bg-black dark:text-white
          dark:border-white/20
          dark:placeholder:text-gray-500

          focus:outline-none
          focus:border-orange-500
          resize-none
          transition-colors
        "
      />
    </div>
  );
}

