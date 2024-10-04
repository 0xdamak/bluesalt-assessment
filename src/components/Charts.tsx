import {
  type ChartData,
  type ChartOptions,
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Title,
} from "chart.js/auto";
import { Bar, Line, Doughnut } from "react-chartjs-2";

export interface LineProps {
  datasetIdKey: string;
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

export interface BarProps {
  datasetIdKey: string;
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
}

export interface DoughnutProps {
  datasetIdKey: string;
  options: ChartOptions<"doughnut">;
  data: ChartData<"doughnut">;
}

export function LineChart(props: LineProps): JSX.Element {
  Chart.register(
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Title,
    Legend,
    Filler,
  );
  return <Line {...props} />;
}

export function BarChart(props: BarProps): JSX.Element {
  Chart.register(
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Title,
    Legend,
    Filler,
  );
  return <Bar {...props} />;
}

export function DoughnutChart(props: DoughnutProps): JSX.Element {
  Chart.register(
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Title,
    Legend,
    Filler,
  );
  return <Doughnut {...props} />;
}
