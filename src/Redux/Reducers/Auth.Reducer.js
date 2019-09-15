import initialState from "../initialState";
export default (state = initialState.auth, action) => {
  switch (action.type) {
    default:
      return state;
    case "UPDATE_USER_ROLES":
      return { ...state, roles: action.data };
  }
};
