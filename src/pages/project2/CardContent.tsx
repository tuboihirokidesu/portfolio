import {
  Card,
  CardContent as CardContents,
  Typography,
  Grid,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styled from "styled-components";

type Props = {
  cardTitle: string;
  value: number;
  lastUpdate: string;
  cardSubtitle: string;
  className: string;
};

const CardContent: React.FC<Props> = ({
  cardSubtitle,
  lastUpdate,
  cardTitle,
  className,
  value,
}) => {
  return (
    <CardGrid item xs={12} md={3} className={cx("card", className)}>
      <CardContents>
        <Typography color='textSecondary' gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant='h5' component='h2'>
          <CountUp start={0} end={value} duration={1} separator=',' />
        </Typography>
        <Typography color='textSecondary'>
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant='body2' component='p'>
          {cardSubtitle}
        </Typography>
      </CardContents>
    </CardGrid>
  );
};

export default CardContent;

const CardGrid = styled(Grid)`
  &.infected {
    border-bottom: 10px solid rgba(0, 0, 255, 0.5);
  }

  &.recovered {
    border-bottom: 10px solid rgba(0, 255, 0, 0.5);
  }

  &.deaths {
    border-bottom: 10px solid rgba(255, 0, 0, 0.5);
  }
  &.card {
    margin: 0 2% !important;
  }
  @media only screen and (max-width: 770px) {
    &.card {
      margin: 2% 0 !important;
    }
  }
`;
