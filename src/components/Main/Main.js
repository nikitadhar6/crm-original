import React, { useState } from "react";
import AsideBar from "../AsideBar/AsideBar";
import FirstContain from "../FirstContain/FirstContain";
import Header from "../Header/Header";
import Detail from "../DetailTable";
import SecondContain from "../SecondContain/SecondContain";
import "./Main.css"
import ForthContain from "../ForthContain/ForthContain";
import ForthContainDetail from "../ForthContainerDetailTable"
import Footer from "../Footer/Footer";
import LineChartContain from "../LineChartContain/LineChartContain";
import BarChartContain from "../BarChartContain/BarChartContain"
import PieChartContain from "../PieChartContain/PieChartContain"
import ThirdContain from "../ThirdContain/ThirdContain";
import { Grid} from '@material-ui/core';

const Main = () => {
    // eslint-disable-next-line
    const [detailData, setDetailData] = useState(Detail);
    // eslint-disable-next-line
    const [forthContainData, setthirdContainData] = useState(ForthContainDetail)
    return (
        <>
        {/* <div id="grid-container">
            <div className="header"> <Header /></div>
            <div className="asiderBar"><AsideBar /></div>
            <div className="section1"><FirstContain detailData={detailData} /></div>
            <div className="section2"> <SecondContain /></div>
            <div className="section3"> <LineChartContain /></div>
            <div className="section4"> <ThirdContain /></div>
            <div className="section5"><BarChartContain /></div>
            <div className="section6"><PieChartContain /></div>
            <div className="section7"> <ForthContain forthContainData={forthContainData} /></div>
            <div className="footer"> <Footer /></div>
            </div> */}



            <Grid container spacing={0}  >
    <Grid lg={12}><Header  /></Grid>
    <Grid lg={2}><AsideBar  /></Grid>
    <Grid lg={10}><FirstContain detailData={detailData} /></Grid>
    <Grid lg={7}><SecondContain /></Grid>
    <Grid lg={5}  ><LineChartContain /></Grid>
    <Grid lg={3}><ThirdContain /></Grid>
    <Grid lg={3}><BarChartContain /></Grid>
    <Grid lg={2}><PieChartContain /></Grid>
    <Grid lg={12}><ForthContain forthContainData={forthContainData} /></Grid>
    <Grid lg={12} ><Footer /></Grid>

            </Grid>
            </>
    )
}
export default Main;