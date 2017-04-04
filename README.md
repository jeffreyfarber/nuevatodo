# Nueva Todo: My First App!

## Adding the &lt;TodoInput&gt; component
###### Purpose
- Encapsulate all input-related functions (textbox, submit button) in a separate components
- Practice sending information from child component -> parent component
- Simplify index.ios.js / index.android.js in the process!

###### Recap of Changes
1. Moved &lt;TextInput&gt;, &lt;Button&gt;, this.state.todo state variable, styles into new 'todoInput.js' file
2. Child -> Parent communication:
  - Parent component (index.ios.js/index.android.js) only handles only concatenating the new to-do into list of all todos.
  - All user interaction, rendering, styling, etc. related to adding a new to-do is handled in new &lt;TodoInput&gt; component
  - When rendering new &lt;TodoInput&gt;, the __only__ property is the function to concatenate the new to-do.
3. propTypes
  - TodoInput.propTypes defines all of the properties the component is expecting (for example this.props.propertyName)
  - It helps to quickly see how to use the component, and provides you with a yellow warning if something looks wrong
  - Read more and see other examples: https://facebook.github.io/react/docs/typechecking-with-proptypes.html

## Recap of in-class lesson

### Setting up the input textbox and state

###### Setup project
```
cd ~
react-native init NuevaTodo
```
This creates a new folder in your home directory (~/NuevaTodo which is /Users/yourusername/NuevaTodo).

`cd NuevaTodo` will move you into that new directory in your Terminal.

Open up Atom (or your favorite text editor).  In Atom, you can click _File | Add Project Folder..._ and navigate to your newly created directory, then click Open.  That will display all of the files in the left directory navigation panel.

###### Add `<TextInput />` tag
We used the file (https://github.com/jeffreyfarber/nuevaweatherforecast/blob/master/weatherLocationForm.js) as an example.  Copy and paste the `<TextInput ... />` tag into your new 'index.ios.js' file in Atom, specifically into the render() function.  Instead of dealing with 'city', let's rename those variables 'todo' to represent the text that the user types into the textinput box.  Our final version:
```
    <TextInput
      style={styles.todo}
      placeholder="New Todo"
      onChangeText={(text) => this.setState({todo: text})}
    />
```
Make sure you add 'TextInput' to the top of the file where we import components from 'react-native':
```
import {
  ...
  View,
  TextInput,
} from 'react-native';
```
Finally, add some styles to the stylesheet on the bottom of the file:
```
const styles = StyleSheet.create({
  ...
  todo: {
    height: 40,
  },
  ...
});
```

###### Add `constructor()` and `this.state` variables
Using the same weatherLocationForm.js file/URL from above, copy and paste the entire constructor() method into your 'index.ios.js' file.  Rename variables and declare a default this.state.todo:
```
  constructor(props) {
    super(props);
    this.state = {
      todo: 'this is the default todo string',
    };
  }
```
When the text changes in the `<TextInput />`, the event handler (onChangeText) will run, and the value in `this.state.todo` will update.

### Adding the new `<ListView />` component
###### Copy component and datasource variables
Using the same Weather project as before, let's use the file that contains the `<ListView />` as an example (https://github.com/jeffreyfarber/nuevaweatherforecast/blob/master/weatherForecast.js).  First, let's copy the component itself and modify the renderRow property:
```
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
```
Make sure you import 'ListView' from 'react-native' on the top of the file, too.  Next, let's copy the datasource variable into the 'render()' function, but before the 'return' statement (like in the weatherForecast.js file):
```
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(['todo 1', 'todo 2', 'todo 3', 'todo 4']);
```

At this point, you should be able to see the `<TextInput />` and `<ListView />` components rendering in your simulator!

###### Refer the datasource to a state variable
Since `this.state.*` are the variables that we want to change in response to user input, let's move the list of todos to a `this.state.todos` variable.  Add the state.todos declaration into the constructor:
```
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: ['todo 1', 'todo 2', 'todo 3', 'todo 4'],
    };
  }
```
.. and now point the dataSource to this variable:
```
    var dataSource = ds.cloneWithRows(this.state.todos);
```

###### Add a button
We can't add anything to the list without an event handler!  So, let's add a button into our render() function that handles the onPress event.  Remember to import the 'Button' module on top of the file, too:
```
      <Button
        onPress={() => this.setState({todos: this.state.todos.concat('new todo')})}
        title="Go!"
      />
```
The onPress property says that when the Button is pressed, add a string 'new todo' into the `this.state.todos` list.  You should be able to add lots of 'new todo' todos into your simulator now!


###### Add the actual todo!
Remember - which variable holds the current text that the user typed into the `<TextInput />`.. `this.state.todo`!  So, when the button is pressed, let's add _that_ into the list of todos instead of that boring string!
```
      <Button
        onPress={() => this.setState({todos: this.state.todos.concat(this.state.todo)})}
        title="Go!"
      />
```
