'use client'
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
import { GgunColors } from '@/app/common/enums/ggunColor';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

export default function TransactionsChart({data}:any) {

    // const { data: netProfitByDate} = useNetProfitByDate();

    const labels = data.map((i:any) => i.date);
    const chartData: any =
    {
        labels: labels,
        datasets: [
            {
                data: data.map((i:any) => i.AI),
                backgroundColor: GgunColors[Math.floor(Math.random() * 8)].hex,
            },
        ],
    };


    const options: any = {
        scales: {
            x : {
                display : false,
            },
            y : {
                display : false,
            },

        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }

    return (
        <Bar data={chartData} options={options}></Bar>
    );
}

