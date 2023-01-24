const fetchCampaignSuccess = (campaign) => ({
  type: "FETCH_CAMPAIGN_SUCCESS",
  payload: { campaign }
});

const fetchGangSuccess = (gang) => ({
    type: "FETCH_GANG_SUCCESS",
    payload: { gang }
})

let url = "https://corsproxy.io/?https://yaktribe.games/underhive/json/"

export const fetchCampaignInfo = () => {
  return async (dispatch) =>
    fetch(url + "campaign/7842.json")
      .then((response) => response.json())
      .then((response) => dispatch(fetchCampaignSuccess(response.campaign)))
};

export const fetchGangInfo = (gangID) => {
  return async (dispatch) => 
  fetch(url + `gang/${gangID}.json`)
    .then((response) => response.json())
    .then((gangData) => dispatch(fetchGangSuccess(gangData)))
}