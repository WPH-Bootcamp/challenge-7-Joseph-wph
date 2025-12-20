type ButtonProps = {
  label: string
  className?: string
}

export default function Button({ label, className = "" }: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-orange-500 hover:bg-orange-600 w-[197px] h-[40px] transition text-white font-semibold ${className}`}
    >
      {label}
    </button>
  )
}
