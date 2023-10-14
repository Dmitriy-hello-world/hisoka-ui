import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from '@mui/material';
import { WorkersListItemProps } from 'shared/workersListItem/lib/types';

import style from './workersListItem.module.scss';

export const WorkersListItem = ({
  name,
  position,
  git,
  telegram,
  img,
}: WorkersListItemProps) => {
  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={style.media}
          image={img}
          alt="frontend"
        />
        <CardContent>
          <Typography
            className={style.text}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            className={style.text}
            variant="body2"
            color="text.secondary"
          >
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {git ? (
          <Link className={style.link} target="_blank" href={git}>
            <Button size="small" color="primary">
              GitHub
            </Button>
          </Link>
        ) : null}
        {telegram ? (
          <Link className={style.link} target="_blank" href={telegram}>
            <Button size="small" color="primary">
              Telegram
            </Button>
          </Link>
        ) : null}
      </CardActions>
    </Card>
  );
};
