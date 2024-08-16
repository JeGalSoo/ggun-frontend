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
import { ChartColor, GgunColors } from '@/app/common/enums/ggunColor';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

export default function ColorByDateChart ({ data }: any) {

    const labels = data.map((i: any) => i.date);

    const chartData: any =
    {
        labels: labels,
        datasets: [
            {
                label: "red",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "red");
                    return dataEntry ?  [dataEntry.value] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: ChartColor[0].color,
            },
            {
                label: "green",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "green");
                    return dataEntry ?  [dataEntry.value] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: ChartColor[1].color,
            },
            {
                label: "blue",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "blue");
                    return dataEntry ?  [dataEntry.value] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: ChartColor[2].color,
            },
            {
                label: "yellow",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "yellow");
                    return dataEntry ?  [dataEntry.value] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: ChartColor[3].color,
            },
            {
                label: "purple",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "purple");
                    return dataEntry ?  [dataEntry.value] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: ChartColor[4].color,
            },
        ],
    };


    const options: any = {
        scales: {
            x: {
                display: false,
                stacked: true,
            },
            y: {
                display: false,
                stacked: true,
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

