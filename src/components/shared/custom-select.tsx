type T_CustomSelectProps = {
  label: string;
  value: string | null;
  options: readonly string[];
  handler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export default function CustomSelect({
  label,
  value,
  options,
  handler,
}: T_CustomSelectProps) {
  return (
    <div className="bg-background-accent-dark flex items-center gap-1 rounded-2xl px-4 py-2">
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        value={value ?? ""}
        onChange={(event) => handler(event)}
        className="text-high-contrast focus-visible:outline-none"
      >
        <option
          value=""
          className="text-main bg-background-accent-main font-semibold"
        >
          All
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="text-main bg-background-accent-main font-semibold"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
