/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import TodoInput from './todoInput.js';
import TodoList from './todoList.js';

export default class NuevaTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['row 1', 'row 2', 'row 3', 'todo 1', 'todo 2'],
    };
  }

  addTodo(newTodo) {
    this.setState({todos: this.state.todos.concat(newTodo)});
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoInput
          onSubmit={this.addTodo.bind(this)}
        />

        <TodoList todos={this.state.todos} />
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
    marginTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('NuevaTodo', () => NuevaTodo);
