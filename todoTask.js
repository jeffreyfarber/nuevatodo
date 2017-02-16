import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

export default class TodoTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
        done: false,
    };
  }

  markDone(){
      this.setState({done: true});
  }

  render() {
      var style = styles.rowNotDone;
      if (this.state.done) {
          style = styles.rowDone;
      }
    return (
    <TouchableHighlight onPress = { () => this.markDone() }>
      <View style={{width: 300, flexDirection: 'row'}}>
        <Text style={style}>{this.props.rowData}</Text>
        <Text style={{flex: 1}}>Do this!</Text>
      </View>
      </TouchableHighlight>
    );
  }


}

const styles = StyleSheet.create({
 rowNotDone: {
     backgroundColor: 'lavender',
     flex: 2
 },
  rowDone: {
      backgroundColor: 'purple',
      flex:2
  }
});
