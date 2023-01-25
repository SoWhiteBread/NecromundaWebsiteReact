const fetchCampaignSuccess = (campaign) => ({
  type: "FETCH_CAMPAIGN_SUCCESS",
  payload: { campaign }
});

const fetchGangSuccess = (gang) => ({
    type: "FETCH_GANG_SUCCESS",
    payload: { gang }
})

export const fetchCampaignInfo = () => {
  return async (dispatch) => {
    try {
        const response = await fetch(`https://corsproxy.io/?https://yaktribe.games/underhive/json/campaign/7842.json`);
        const campaignData = await response.json();
        dispatch(fetchCampaignSuccess(campaignData.campaign));
        campaignData.campaign.gangs.forEach((item) => {
          fetch(`https://corsproxy.io/?https://yaktribe.games/underhive/json/gang/${item.gang_id}.json`)
          .then((response) => response.json())
          .then((gangData) => dispatch(fetchGangSuccess(gangData)))
          .catch((error) => console.error(error))
        } 
        )
    } catch (error) {
        console.error(error);
    }
  }
}
