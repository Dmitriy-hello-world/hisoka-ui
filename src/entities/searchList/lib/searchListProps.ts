export interface SearchListProps {
  display: string;
  onSetDisplay: (val: string) => void;
  referWrapp: React.MutableRefObject<HTMLDivElement | null>;
  searchValue: string;
}
