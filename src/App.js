import React from 'react';
import './App.css';
import tasks from "./sample/tasks.json"

import Tasks from "./components/Tasks.js"
import TaskForm from './components/TaskForm';

class App extends React.Component {

  state = {

    tasks: tasks

  }

  addTask = (title, description) => {

    const newTask = {

      title: title,
      description: description,
      id: this.state.tasks.length

    }

    // this.state.tasks = [...this.state.tasks, newTask];//lo añade al array pero no lo refresca en la interfaz

    this.setState({

      tasks: [...this.state.tasks, newTask]

    })

    console.log(this.state.tasks);

  }

  deleteTask = (id)=>{

    const refreshTasks = this.state.tasks.filter(task => task.id !== id );

    this.setState({

      tasks: refreshTasks

    });

  }

  checkDone = (id)=>{

    const refreshTasks = this.state.tasks.map(task => {

      if (task.id === id) {
        
        task.done = !task.done;

      }

      return task;//OJO!!!

    });

    this.setState({

      tasks: refreshTasks

    });

  }

  render() {
    return (

      <div>
        <TaskForm addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
      </div>


    );
  }




}

export default App;
