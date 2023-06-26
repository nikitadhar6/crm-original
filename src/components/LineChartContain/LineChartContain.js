import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip  } from "recharts";
import LineChartData from "../LineChartDataTable";
import "./LineChartContain.css"
const LineChartContain =()=>{
    return(<>
     <div id="LineContain" >
            <h2>Revenue Summary</h2>
            <div id="line-chart">
            <ResponsiveContainer   aspect={4}>
                  <LineChart data={LineChartData}
                  //  height={"30%"}
                     height={100}
                     width={100}
                     // margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                     
                     >
                     <CartesianGrid stroke="pink" />
                     <XAxis dataKey="name" interval={"preserveStartEnd"} />
                     <YAxis />
                     <Tooltip contentStyle={{ backgroundColor: "#daf0f2" }} />
                     <Line dataKey="votes" type="monotone" stroke="#d92550" activeDot={{ r: 5 }} />
                  </LineChart>
               </ResponsiveContainer>
            </div>
         </div>
    </>)
}
export default LineChartContain;