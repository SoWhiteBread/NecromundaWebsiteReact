import { React } from "react";
import { useSelector } from "react-redux";
import { fetchGangInfo } from "../App/actions1";



export const TestData = () => {
    const campaignData = useSelector((state) => state.campaign)
    const gangFetcher = (array) => {
        array.forEach((item) => {fetchGangInfo(item.gang_id)});
    }
    const gangData = useSelector((state) => state.gangs)
    console.log(campaignData);
    return (
    <div>
       <div>
        <h1>Campaign Data</h1>
           { campaignData.isLoading ? "Loading..." : campaignData.campaign_id}
       </div> 
       <div>
        <h1>Gang Data</h1>
           { campaignData.isLoading ? "Loading..." : <button onClick={() => gangFetcher(campaignData.gangs)}>Load Gangs</button>}
           <button onClick={() => console.log(gangData)}>Test Gang Data</button>
       </div> 
    </div>
    );
}