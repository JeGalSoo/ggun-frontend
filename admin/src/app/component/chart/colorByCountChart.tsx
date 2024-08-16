import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    elements,
    ArcElement,
    ChartOptions,
} from 'chart.js';
import Chart from 'chart.js/auto';import { ChartColor } from '@/app/common/enums/ggunColor';
;

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement);

export default function ColorByCountChart({data}:IColorChartProps) {

    const labels = data.map((i:IColorChart) => i.color);
    const chartData: any = {
        labels: labels,
        datasets: [{
            data: data.map((i:IColorChart) => i.value),
            backgroundColor: ChartColor.map((i) => i.color),
            hoverOffset: 4
        }]
    };

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }

    return (
        <Doughnut data={chartData} options={options}></Doughnut>
    );
}
