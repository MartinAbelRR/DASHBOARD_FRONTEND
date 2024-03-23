import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    Filler
);

var options = {
    scales: {
        y: {
            min: 0,
            max: 3000, 
            ticks: {
                stepSize: 500
            }
        },
        x: {
            ticks: {valor: 'blue'}
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

export const LineGraph = ({data}) => {
  return (
    <div className="xl:h-[460px]">
        <Line className="bg-slate-100 px-3 py-2 rounded-md" data={data} options={options} />
    </div>    
  )
}
