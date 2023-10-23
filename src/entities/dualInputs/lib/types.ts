import { Dispatch, SetStateAction } from 'react';

export interface DualInputsProps {
  firstName: string;
  secondName: string;
  firstHandleOnChange: Dispatch<SetStateAction<string>>;
  secondHandleOnChange: Dispatch<SetStateAction<string>>;
  firstValue: string;
  secondValue: string;
}
