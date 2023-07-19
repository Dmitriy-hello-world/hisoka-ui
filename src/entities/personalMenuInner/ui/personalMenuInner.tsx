import { Logout, Settings } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useLogOut } from 'entities/personalMenuInner/lib/useLogOut';
import { PersonalMenuInnerProps } from 'entities/personalMenuInner/lib/personalMenuInnerTypes';
import { PersonalMenuListItem } from 'shared/personalMenuListItem';

export const PersonalMenuInner = ({
  isAuthorized,
  firstName,
  secondName,
  handleClickOpen,
}: PersonalMenuInnerProps) => {
  const userName =
    firstName && secondName && isAuthorized
      ? `${firstName} ${secondName}`
      : 'profile';

  return (
    <>
      {isAuthorized
        ? [
            <PersonalMenuListItem
              text={userName}
              isAvatar={true}
              Icon={null}
              handleClick={() => undefined}
              key="1"
            />,
            <Divider key="2" />,
            <PersonalMenuListItem
              text={'Settings'}
              isAvatar={false}
              Icon={Settings}
              handleClick={() => undefined}
              key="3"
            />,
            <PersonalMenuListItem
              text={'Logout'}
              isAvatar={false}
              Icon={Logout}
              handleClick={useLogOut}
              key="4"
            />,
          ]
        : [
            <PersonalMenuListItem
              text={'Log in'}
              isAvatar={false}
              Icon={null}
              handleClick={() => handleClickOpen('log')}
              key="5"
            />,
            <PersonalMenuListItem
              text={'Registration'}
              isAvatar={false}
              Icon={null}
              handleClick={() => handleClickOpen('reg')}
              key="6"
            />,
          ]}
    </>
  );
};
