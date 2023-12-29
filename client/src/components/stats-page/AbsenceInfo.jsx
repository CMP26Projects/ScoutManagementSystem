import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AbsenceInfo() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "تغير نسبة الغياب",
        data: [90, 89, 88, 87, 100, 85, 84, 60, 82, 81, 66, 70, 77, 40],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="absence-info">
      <h4>الغياب</h4>
      <Line data={data} />
    </div>
  );
}
