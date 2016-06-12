/* @flow */
/*global setTimeout*/

export const OPEN_ACTIONS_MENU = "OPEN_ACTIONS_MENU";
export const CLOSE_ACTION_MENU = "CLOSE_ACTION_MENU";

export const openActionsMenu = (): Object => {
  return {
    type: OPEN_ACTIONS_MENU
  };
};

export const closeActionsMenu = (data: Object): Object => {
  return {
    type: CLOSE_ACTION_MENU
  };
};
