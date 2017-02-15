/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Button
} from 'react-native';
import TodoList from './todoList.js';

export default class NuevaTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: ['row 1', 'row 2', 'row 3', 'todo 1', 'todo 2'],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.todo}
          placeholder="New Todo"
          onChangeText={(text) => this.setState({todo: text})}
        />
        <Button
          style={styles.searchButton}
          onPress={() => this.setState({todos: this.state.todos.concat(this.state.todo)})}
          title="Go!"
        />

        <TodoList todos={this.state.todos} />

        <Text style={styles.instructions}>
          {this.state.todo}
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  todo: {
    height: 40,
  }
});

AppRegistry.registerComponent('NuevaTodo', () => NuevaTodo);
