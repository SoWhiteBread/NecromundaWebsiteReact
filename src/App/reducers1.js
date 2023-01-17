const initialState = { campaign: { isLoading: true }, gangs: { gangsArray: [], isLoading: true} };

const campaignInfo = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CAMPAIGN_SUCCESS":
      return { ...state, campaign: { ...action.payload.campaign, isLoading: false } };
    case "FETCH_GANG_SUCCESS":
    return {...state, gangs: [...state.gangs.gangsArray, action.payload.gang], isLoading: false };
    default:
      return state;
  }
};

export default campaignInfo;