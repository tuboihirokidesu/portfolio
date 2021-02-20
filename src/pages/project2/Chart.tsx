import { useEffect, useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import styled from "styled-components";
import { fetchDailyData } from "../../components/project2/api";
import {
  CoronaData,
  DailyData,
} from "../../components/project2/types/dataType";

type Props = {
  data: CoronaData;
  country: String;
};

const Chart: React.FC<Props> = ({
  data: { deaths, lastUpdate, recovered, confirmed },
  country,
}) => {
  const [dailyData, setDailyData] = useState([] as DailyData);

  useEffect(() => {
    let cleanUp = false;
    const fetchDailyAPI = async () => {
      const initialDailyData = await fetchDailyData();
      if (!cleanUp) {
        setDailyData(initialDailyData);
      }
    };
    fetchDailyAPI();
    return () => {
      cleanUp = true;
    };
  }, []);
  console.log(dailyData);

  const doughnutChart = confirmed ? (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: ["Infected", "Recovered", "Deaths"],
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) =>
          new Date(reportDate).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered.total),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <Container>{country ? doughnutChart : lineChart}</Container>;
};

export default Chart;

const Container = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;
