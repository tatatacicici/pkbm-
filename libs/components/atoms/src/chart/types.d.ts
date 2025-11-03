export type TChartProps = {
  data: {
    labels: string[];
    datasets: (number | Point | null)[];
  };
  option?: object;
  className?: string;
};
