import React from "react";
import Task from "./Task.js";


class Tasks extends React.Component {

    render() {

        return (

            <div>{

                this.props.tasks.map((e) =>

                    <Task task = {e}/>

                )

            }</div>

        );

    }

}

export default Tasks;