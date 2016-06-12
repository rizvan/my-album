/* @flow */
/*eslint-disable prefer-const */

import React from "react";
import { connect } from "react-redux";
import { Text, ListView, View , StyleSheet, TouchableOpacity, Image} from "react-native";
import { fetchData } from './actions';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(fetchData());
    }, 5500);
  }
  render() {
    return (
      <ListView
      dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows( this.props.dataSource )}
      renderRow={this.renderImage}
    />
    );
  }

  renderRow(rowData) {
    return (
      <View style={{layout:'flex', borderWidth:2, borderColor:'red',justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign: 'center', borderWidth:2}}>{rowData}</Text>
        <Text style={{textAlign: 'center', borderWidth:2}}>{rowData}</Text>
      </View>
    );
  }

  renderImage(asset) {
    const imageSize = 150;
    const imageStyle = [styles.image, {width: imageSize, height: imageSize}];
    // const location = asset.node.location.longitude ?
    //   JSON.stringify(asset.node.location) : 'Unknown location';
    return (
      <TouchableOpacity key={asset}>
        <View style={styles.row}>
          <Image
            source={asset.node.image}
            style={imageStyle}
          />
          <View style={styles.info}>
            <Text style={styles.url}>{asset.node.image.uri}</Text>
            <Text>{asset.node.group_name}</Text>
            <Text>{new Date(asset.node.timestamp).toString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  url: {
    fontSize: 9,
    marginBottom: 14,
  },
  image: {
    margin: 4,
  },
  info: {
    flex: 1,
  },
});


FeedContainer.propTypes = {
  dispatch: React.PropTypes.func,
  dataSource: React.PropTypes.array,
  isFetching: React.PropTypes.bool
};

FeedContainer.defaultProps = {
  dispatch: () => {},
  isFetching: false,
  dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
};

export default connect((state) => ({
  dataSource: state.feed.dataSource,
  isFetching: state.feed.isFetching
}))(FeedContainer);
