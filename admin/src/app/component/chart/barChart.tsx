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
import { useNetProfitByDate } from '@/app/hooks/chart.hook';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);


    export default function BarChart({data}:BarChartProps) {

        // const labels = Object.keys(data).sort((a, b) => a.localeCompare(b));
        const labels = data.map((item:any) => item.month).sort();
        const chartData : any =
        {
            labels: labels.map((month:any) => `${month}월`), 
        datasets: [
            {
                label: '방문자 수',
                // data: labels.map((month) => data[month]),
                data: data.map((item:any) => item.count),
                backgroundColor: 'red',
            },
        ],
        };
    
    
        const options: any = {
            scales: {
      
            },
            plugins: {
                legend: {
                    display:false,
                  },
    
                }
        }
    
        return (
            <Bar data={chartData} options={options}></Bar>
        );
}

