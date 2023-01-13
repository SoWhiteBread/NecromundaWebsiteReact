const initialState = { campaign: {}, gangs: [] };

const campaignInfo = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CAMPAIGN_SUCCESS":
      return { ...state, campaign: [...state.campaign, action.payload.campaign] };
    case "FETCH_GANG_SUCCESS":
    return {...state, gangs: [...state.gangs, action.payload.gang] };
    default:
      return state;
  }
};

export default campaignInfo;