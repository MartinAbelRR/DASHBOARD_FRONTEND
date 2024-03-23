import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                color: 'rgb(0, 0, 0)'
            }
        }
    }
}

const data = {
    labels: [],
    datasets: [
        {
            label: '',
            data: [],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
            ],
            borderColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1     
        },
    ]
}


export const PieGraph = ({data}) => {
    
  return (
    <div className="self-center">
        <Doughnut data={data} options={options} height={430} />
    </div>
  )
}
