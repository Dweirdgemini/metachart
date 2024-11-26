import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: "Metrics",
        data: data.map((d) => d.value),
        borderColor: "rgba(59, 130, 246, 0.8)", // Blue
        backgroundColor: "rgba(59, 130, 246, 0.4)",
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
