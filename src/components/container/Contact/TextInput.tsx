interface Props {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
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
          transition-colors
        "
      />
    </div>
  );
}


