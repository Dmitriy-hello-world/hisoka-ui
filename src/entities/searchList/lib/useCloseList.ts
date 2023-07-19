export const UseCloseList = (
  onSetDisplay: (type: 'block' | 'none') => void,
  referWrapp: React.MutableRefObject<HTMLDivElement | null>
) => {
  return (e: Event) => {
    if (referWrapp && e.target) {
      if (!(referWrapp.current as HTMLDivElement).contains(e.target as Node)) {
        onSetDisplay('none');
      }
    }
  };
};
