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

export default function TotalBydDateChart({ data }: any) {

    const labels = data.map((i: any) => i.date);

    const chartData: any =
    {
        labels: labels,
        datasets: [
            {
                label: "삼성전자",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "삼성전자");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "SK하이닉스",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "SK하이닉스");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "DB하이텍",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "DB하이텍");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "네페스",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "네페스");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "후성",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "후성");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "LG전자",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "LG전자");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "LS일렉트릭",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "LS일렉트릭");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "모트렉스",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "모트렉스");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "원익피앤이",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "원익피앤이");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "신세계I&C",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "신세계I&C");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
            },
            {
                label: "프로텍",
                data: data.map((entry: any) => {
                    const dataEntry = entry.data.find((item: any) => item.name === "프로텍");
                    return dataEntry ?  [dataEntry.totalAmount] : null;
                }).filter((entry: any) => entry !== 0),
                backgroundColor: GgunColors[Math.floor(Math.random() * 20)].hex,
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

