import { HiSearch } from "react-icons/hi";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <HiSearch className={css.icon} />
    </div>
  );
};
