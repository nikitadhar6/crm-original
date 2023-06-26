import React from "react";
import PieChartData from "../PieChartDataTable";
import "./PieChartContain.css"
import {Chart as ChartJs,Tooltip, ArcElement,Legend } from "chart.js";
import {ResponsiveContainer}  from "recharts"
import {Pie} from "react-chartjs-2"
ChartJs.register(
  Tooltip, ArcElement,Legend
)
 
const PieChartContain=()=>{
return(<>
 <div id="pie-chart"  >
    <h2>Traffic Source</h2>
    <ResponsiveContainer   aspect={2}
    height={290}>
    <Pie data={PieChartData} />
    </ResponsiveContainer >
</div>

</>)
}
export default PieChartContain;