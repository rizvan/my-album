/* @flow */
/*global setTimeout*/

var {CameraRoll} = require('react-native');

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const requestData = (): Object => {
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = (data: Object): Object => {
  return {
    type: RECEIVE_DATA,
    data
  };
};


    // var fetchParams: Object = {
    //   first: this.props.batchSize,
    //   groupTypes: this.props.groupTypes,
    //   assetType: this.props.assetType,
    // };
    // if (Platform.OS === "android") {
    //   // not supported in android
    //   delete fetchParams.groupTypes;
    // }
    // if (this.state.lastCursor) {
    //   fetchParams.after = this.state.lastCursor;
    // }


  // },

export const fetchData = (): Function => {
  return (dispatch) => {
    dispatch(requestData());
    CameraRoll.getPhotos({first:20, groupTypes: 'SavedPhotos', assetType: 'Photos'})
      .then((data) => dispatch(receiveData(data.edges)), (e) => logError(e));
  };
};
