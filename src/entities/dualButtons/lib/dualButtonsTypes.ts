export interface DualButtonsProps {
  nameFirstButton: string;
  handleOnClickFirst?: () => void;
  nameSecondButton: string;
  handleOnClickSecond?: () => void;
  isLoading: boolean;
}
