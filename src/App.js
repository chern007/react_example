import React from 'react';
import './App.css';
import tasks from "./sample/tasks.json"

import Tasks from "./components/Tasks.js"
import TaskForm from './components/TaskForm';

class App extends React.Component {

  state = {

    tasks: tasks

  }

  render() {
    return (

      <div>
        <TaskForm/>
        <Tasks tasks={this.state.tasks}/>
      </div>


    );
  }




}

export default App;
