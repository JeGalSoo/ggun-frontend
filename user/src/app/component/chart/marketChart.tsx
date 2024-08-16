
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
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

function MarketBarChart({ props }: { props: IKisSection }) {

    const labels = props?.output2.map((i: IKisSection) => i.stck_bsop_date)
    const current: number = Number(props.output1.bstp_nmix_prpr);
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: 'one',
                type: 'line',
                pointStyle: false,
                data: props?.output2.map((i: IKisSection) => i.bstp_nmix_prpr),
                backgroundColor:
                    ({ chart }: { chart: { ctx: CanvasRenderingContext2D } }) => {
                        const { ctx } = chart;
                        const bg = ctx.createLinearGradient(0, 0, 0, 300);
                        bg.addColorStop(0, 'rgba(125,211,252,1)');
                        bg.addColorStop(1, 'rgba(125,211,252,0)');
                        // bg.addColorStop(1, Utils.CHART_COLORS.blue);
                        return bg
                    },
                borderColor: 'rgb(56 189 248)',
                borderWidth: 2,
                pointColor: "#fff",
                pointStrokeColor: "#ff6c23",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ff6c23",
                fill: true,
            },
        ],
    };


    const totalDuration = 600;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx: any) =>
        ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(10)
            : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const animation = {
        x: {
            display: true,
        },
        y: {
            display: true,
        }
    };

    const oprions: any = {
        animation,
        interaction: {
            intersect: false
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
                max: 31,
            },
            y: {
                min : current-300,
                max : current+500, 
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {   
                color: 'black',
                display: false,
                anchor: 'end',
                align: 'start',
                offset: 0,
                formatter: function (value: number) {
                    return value;
                }
            },
        },
    }

    return (
        <Bar data={data} options={oprions} className='w-full h-full'></Bar>
    );
}
export default MarketBarChart;
