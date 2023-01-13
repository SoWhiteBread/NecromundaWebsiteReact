const fetchCampaignSuccess = (campaign) => ({
  type: "FETCH_CAMPAIGN_SUCCESS",
  payload: { campaign }
});

const fetchGangSuccess = (gang) => ({
    type: "FETCH_GANG_SUCCESS",
    payload: { gang }
})

let url = "https://yaktribe.games/underhive/json/"

export const fetchCampaignInfo = () => {
  return async (dispatch) =>
    fetch(url + "campaign/7842", {
      mode: "no-cors"
    })
      .then((response) => response.json())
      .then((response) => dispatch(fetchCampaignSuccess(response)))
      .then((campaign) => {
        campaign.gangs.forEach((gang) => {
          fetch(url + "gang/" + gang.gang_id)
            .then((response) => response.json())
            .then((gangData) => dispatch(fetchGangSuccess(gangData)));
        });
      });
};
