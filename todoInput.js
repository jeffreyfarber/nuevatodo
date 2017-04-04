import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  submitNewTask() {
    this.props.onSubmit(this.state.todo);
    this.setState({todo: ''});
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.todo}
          placeholder="New Todo"
          value={this.state.todo}
          onChangeText={(text) => this.setState({todo: text})}
          onSubmitEditing={this.submitNewTask.bind(this)}
        />
        <Button
          style={styles.searchButton}
          onPress={this.submitNewTask.bind(this)}
          title="Go!"
        />
      </View>
    );
  }
}

TodoInput.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  todo: {
    height: 40,
    flex: 3,
  },
  searchButton: {
    flex: 1,
    height: 40,
  },
});
