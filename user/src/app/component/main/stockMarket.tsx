
import { Suspense } from "react";
import MarketBarChart from "../chart/marketChart";
import { useKixSection } from "@/app/hooks/kis.hook";

export default function StockMarket({ props }: { props: number }) {

    const { data: kisSection } = useKixSection(props);

    return (
        <div className="w-full h-full flex justify-center content-center">
            <Suspense>
                {kisSection ? <MarketBarChart props={kisSection} /> :''}
            </Suspense>
        </div >
    )

}