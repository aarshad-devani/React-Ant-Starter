export function UpdateRoles(roles = []) {
    return (dispatch, getState) => {
      dispatch({
        type: "UPDATE_USER_ROLES",
        data: roles
      });
    };
  }
  