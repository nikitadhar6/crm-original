import React from "react";
import BarChartData from "../BarChartDataTable";
import "./BarChartContain.css"
import {Bar, ResponsiveContainer,BarChart,XAxis,YAxis,Tooltip,CartesianGrid } from "recharts"
const BarChartContain=()=>{
return(<>
 <div id="bar-chart"  >
               <ResponsiveContainer   aspect={2}>
                  <BarChart data={BarChartData} 
                  // width={400}
                  //    height={400}
                  //    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                     >
                     <CartesianGrid stroke="pink" />
                     <XAxis dataKey="name" interval={"preserveStartEnd"} />
                     <YAxis />
                     <Tooltip contentStyle={{ backgroundColor: "#daf0f2" }} />
                     <Bar dataKey="votes"  stroke="#d92550"   />
                  </BarChart>
               </ResponsiveContainer>
</div>

</>)
}
export default BarChartContain;