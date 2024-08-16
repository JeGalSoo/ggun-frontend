
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Margarine } from 'next/font/google';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels);

export default function QuoteChart({ props }: {props: {data:string, max:string, color:string}}) {

    const labels = [props.data];
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: '',
                type: 'bar',
                data:[props.data],
                backgroundColor: props.color,
            },
        ],
    };

    const oprions: any = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                reverse: true,
                min: 0,
                max: [props.max],
            },
            y: {
                display: false,
                position: 'left',
            },
        },
        layout: {
            padding: {
                top: 0,
                bottom: 0,
            },
            
        },
        plugins: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                color: 'black',
                display: true,
                anchor: 'end',
                align: 'start',
                offset: 5,
                formatter: function (value: number) {
                    return value;
                }
            },
        },
    };

    return (
        <Bar data={data} options={oprions} className='w-full' ></Bar>
    );
}