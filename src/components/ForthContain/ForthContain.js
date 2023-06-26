import React from "react";
import "./ForthContain.css"
const ForthContain=({forthContainData})=>{
    return(<>

<div id="main-forthContain">
    <h2>Quick Statistics Review</h2>
    <table>
        <tr>
    <th>Quick stats</th>
    </tr>
        <tr>
  
  <td> <select >
  <option  >January</option>
  <option  >February</option>
  <option  >March</option>
  <option  >April</option>
  <option  > May</option>
  <option  >June</option>
  <option  >July</option>
  <option  >August</option>
  <option  >September</option>
  <option  >October</option>
  <option  >November</option>
  <option  >December</option>


  </select></td>
  <td>
  <select >
  <option  >Year</option>
  <option  >2022</option>
  <option  >2021</option>
  <option  >2020</option>
  <option  >2019</option>
  <option  >2018</option>
  <option  >2017</option>
  <option  >2016</option>
  <option  >2015</option>
  <option  >2014</option>
  <option  >2013</option>
  <option  >2012</option>
</select>
  </td>
  <td>
    <select>
        <option>quarter</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
  </td>
  <td>
  <select >
  <option  >Year</option>
  <option  >2022</option>
  <option  >2021</option>
  <option  >2020</option>
  <option  >2019</option>
  <option  >2018</option>
  <option  >2017</option>
  <option  >2016</option>
  <option  >2015</option>
  <option  >2014</option>
  <option  >2013</option>
  <option  >2012</option>
</select>
  </td>
  </tr>
    </table>
<div id="parent-forthContain-card">
    {

forthContainData.map((elem, index) => {
    return (
        <>
            <div key={index} id="forthContain-card">
               <h2>{elem.title}</h2>
               <p>{elem.description}</p>
               <span>{elem.fund}</span>
                
                 
 
             
            </div>
        </>
    )
})

}
 
</div></div>

    </>)
}
export default ForthContain;