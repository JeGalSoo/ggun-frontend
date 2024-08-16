interface IChart {
    date?: string,
    AI?: number,
}

interface IColorChart {
    color: string,
    value: number,
}

interface IColorChartProps {
    data: IColorChart[];
}



interface IVisitArray {
    // [key: string]: number,
    month: string;
    count: number;
}

interface BarChartProps {
    data: IVisitArray[];
}

interface IVisit {
    date: string,
}