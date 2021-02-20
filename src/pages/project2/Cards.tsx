import { Grid, LinearProgress, Typography } from "@material-ui/core";
import styled from "styled-components";
import { CoronaData } from "../../components/project2/types/dataType";
import CardContent from "./CardContent";

type Props = {
  data: CoronaData;
};

const Cards: React.FC<Props> = ({
  data: { recovered, lastUpdate, deaths, confirmed },
}) => {
  if (!confirmed) return <LinearProgress />;
  return (
    <Container>
      <Grid
        container
        xs={12}
        item
        spacing={1}
        direction='column'
        alignItems='center'
      >
        <Typography gutterBottom variant='h4' component='h2'>
          Corona Virus
        </Typography>
        <Wrap>
          <CardContent
            cardTitle='Infected'
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle='Number of active cases from COVID-19.'
            className='infected'
          />
          <CardContent
            cardTitle='Recovered'
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle='Number of recoveries from COVID-19.'
            className='recovered'
          />
          <CardContent
            cardTitle='Deaths'
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle='Number of deaths caused by COVID-19.'
            className='deaths'
          />
        </Wrap>
      </Grid>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  align-items: center;
  margin: 50px 0˚;
`;
const Wrap = styled.div`
  @media only screen and (max-width: 1300px) {
    display: flex;
    align-items: center;
    margin: 50px 0;
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
