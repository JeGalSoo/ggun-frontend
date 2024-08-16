
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
import { KisAskPriceDummy } from '@/app/common/dummy/kis.dummy';
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);


function AskPriceChart({ props }: { props: IKisAskPrice[] }) {

    const ppppp: IAskPriceOutput1[] = [KisAskPriceDummy.output1];
    
    const askp: string[] = Array.from({ length: 10 }, (_, index) =>
        KisAskPriceDummy.output1[`askp${index + 1}` as keyof IAskPriceOutput1]
    ) as string[];


    const data: any =
    {
        labels : askp.map((i:string)=>i),
        datasets: Array.from({ length: 10 }, (_, index) => ({
            label: `매호호가${index + 1}`,
            type: 'bar',
            pointStyle: false,
            // data: [ppppp[0][`askp${index + 1}` as keyof IAskPriceOutput1]],
            data: askp.map((i:string)=>i),
            backgroundColor: '#872642',
            borderColor: 'white',
            radius: 5,
        })),
    };

    const oprions: any = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                reverse: true,
                min: 0,
                // max: 75000,
            },
            y: {
                display: false,
                position: 'right',
            },
        },
        layout: {
            padding: {
                top: 0,
                bottom: 0,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                color: '#94a3b8',
                display: true,
                anchor: 'end',
                align: 'start',
                offset: 50,
                formatter: function (value: number) {
                    return value;
                }
            },
        },
    };
    
    return (
        <Bar data={data} options={oprions} className='w-full h-full'></Bar>
    );
}
export default AskPriceChart;
