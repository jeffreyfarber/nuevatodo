import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class MyNewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderRow(rowData) {
    return (
      <View style={{width: 300, flexDirection: 'row'}}>
        <Text style={{backgroundColor: 'lavender', flex: 2}}>{rowData}</Text>
        <Text style={{flex: 1}}>Do this!</Text>
      </View>
    );
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.props.todos);

    return (
      <View style={styles.container}>
        <Text>this is above the listview</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
