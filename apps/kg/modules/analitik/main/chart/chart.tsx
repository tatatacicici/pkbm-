import { LineChart } from "@kampus-gratis/components/atoms";
import { FC, ReactElement } from "react";

export const AnalyticChart: FC = (): ReactElement => {
  const labels = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];
  const dataLine = {
    labels: labels,
    datasets: [
      {
        label: "IPK",
        data: [0.0, 3.3, 3.0, 1.0, 1.0, 1.0],
        borderColor: "#053d3812",
        tension: 0.1,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(50, 200, 300, 0);
          gradient.addColorStop(0, "#106FA4A1");
          gradient.addColorStop(1, "#106FA400");
          return gradient;
        },
        hoverBackgroundColor: "#A3CCAB4D",
        hoverBorderColor: "#A3CCAB4D",
        pointRadius: 6,
        pointHoverRadius: 20,
        pointStyle: "circle",
        pointBackgroundColor: "#737373",
        borderWidth: 2,
      },
    ],
  };

  const optionsLine = {
    scales: {
      y: {
        max: 4.5,
        min: 0,
        ticks: {
          color: "#333333",
          stepSize: 1,
          max: 4,
          callback: function (value: any) {
            if (value === 4.5) {
              return "";
            } else {
              return value + ".00";
            }
          },
        },
        border: {
          dash: [2, 4],
        },
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
      x: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          display: true,
          color: "#106FA4",
          padding: 16,
        },
        border: {
          dash: [4, 4],
        },
        reverse: false,
      },
    },
    element: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47, 97, 68, 1)",
        fill: true,
        backgroundColor: "rgba(47, 97, 68, 0.3)",
      },
      point: {
        radius: 0,
        hintRadius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="col-span-3 lg:col-span-2 relative bg-
    neutral-100 h-[350px] md:px-4">
      <LineChart data={dataLine} option={optionsLine} />
    </div>
  );
};
