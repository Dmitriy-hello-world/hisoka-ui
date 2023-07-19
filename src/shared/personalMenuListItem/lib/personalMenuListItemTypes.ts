import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface PersonalMenuListItemProps {
  text: string;
  handleClick: () => void;
  Icon:
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
      })
    | null;
  isAvatar: boolean;
}
