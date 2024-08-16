
import { Bar, Scatter} from 'react-chartjs-2'
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
    Legend);

function ScatterChart() {

    const color =[
        {name:"red", color:"#433E49", value: "300"},
        {name:"green", color:"#928490",value: "200"},
        {name:"blue", color:"#DBC1AD", value: "500"},
        {name:"yellow", color:"#F3E8EB", value: "200"},
        {name:"purple", color:"#872642", value: "100"},
    ]

    const color2 = [
        { name: "red", color: "#433E49", value: "220" },
        { name: "green", color: "#928490", value: "330" },
        { name: "blue", color: "#DBC1AD", value: "240" },
        { name: "yellow", color: "#F3E8EB", value: "320" },
        { name: "purple", color: "#872642", value: "420" },
    ]


    const labels = color.map((i) => i.name)
    const data: any =
    {
            datasets: [{
              label: 'Scatter Dataset',
              data: [{
                x: -10,
                y: 0
              }, {
                x: 0,
                y: 10
              }, {
                x: 10,
                y: 5
              }, {
                x: 0.5,
                y: 5.5
              }],
              backgroundColor: 'rgb(255, 99, 132)'
            }],
    };


    const oprions: any = {
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            }
          }
        }
    }


    // useEffect(() => {
    //     dispatch(fetchTop10Nps())
    //         .then((res: any) => {
    //             console.log("res : " + JSON.stringify(res))
    //         })
    // }, []);

    return (
        <Scatter data={data} options={oprions} className='w-full'></Scatter>
    );
}
export default ScatterChart;
