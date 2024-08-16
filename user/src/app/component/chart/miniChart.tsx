'use client'
import { Bar, Line} from 'react-chartjs-2'
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
import { useQuery } from '@tanstack/react-query';
import { fetchItemsDetail } from '@/app/service/items/items.api';
import { useGlobalStock } from '@/app/store/globalStock.store';
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

function MiniChart({ title }: { title: IOwnStock[] }){

    const globalStock = useGlobalStock();
    const handleItemsDetail = async (): Promise<IItems> => {
        const response = await fetchItemsDetail(globalStock.data.name+'')
        if (typeof response === 'object' && 'status' in response) {
            throw new Error(`Error: ${response.status}`);
          }
        return response;
    }

    const { data:itemsList } = useQuery<IItems>(
        {
            queryKey: ["itemDetail"],
            queryFn: handleItemsDetail,
        }
    );

    const labels = itemsList&&itemsList.date;
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                pointStyle: false,
                label: '',
                type:'line',
                data: itemsList&&itemsList.open,
                borderColor : "red",
                borderWidth : 1,
            },
        ],
    };
    const oprions: any = {
        scales: {
            x: {
                display : false,
            },
            y: {
                display : false,
            },
        },
        plugins: {
            legend: {
                display:false,
              },
              datalabels :{
                display : false,
            },
            }
    }


    return (
        <Bar data={data} options={oprions} className='w-full'></Bar>
    );
}
export default MiniChart;
