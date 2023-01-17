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
      .then((response) => {
        response.campaign.gangs.forEach((gang) => {
          let gangUrl = `https://corsproxy.io/?https://yaktribe.games/underhive/json/gang/${gang.id}.json`;
          fetch(gangUrl)
          .then((response) => response.json())
          .then((gangData) => dispatch(fetchGangSuccess(gangData)))
        })
      })
};

/*(response) => {
  dispatch(fetchCampaignSuccess(response.campaign)
  response.campaign.gangs.forEach(gang) => {
    let gangUrl = "https://corsproxy.io/?https://yaktribe.games/underhive/json/gang/" + gang.id + ".json";
    fetch(gangUrl)
    .then((response) => response.json())
    .then((gangData) => dispatch(fetchGangSuccess(gangData)))
  })
}*/