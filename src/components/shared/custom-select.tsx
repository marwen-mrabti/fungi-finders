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
    <div className="bg-background-accent-dark flex grow-0 flex-nowrap items-center gap-0.5 rounded-md py-2 px-1 text-sm font-semibold">
      <label htmlFor={label}>{label}: </label>
      <select
        name={label}
        id={label}
        value={value ?? ""}
        onChange={(event) => handler(event)}
        className="text-high-contrast w-fit shrink-1 focus-visible:outline-none"
      >
        <option value="" className="text-main bg-background-accent-main">
          All
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="text-main bg-background-accent-main"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
