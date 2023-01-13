import { React } from "react";
import { useSelector } from "react-redux";




export const TestData = () => {
    const campaignData = useSelector((state) => state.campaign)
    const gangData = useSelector((state) => state.gangs)
    return (
    <div>
       <div>
        <h1>Campaign Data</h1>
           {campaignData.toString()}
       </div> 
       <div>
        <h1>Gang Data</h1>
           {gangData.toString()}
       </div> 
    </div>
    );
}