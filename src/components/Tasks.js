import React from "react";
import Task from "./Task.js";
import PropTypes from 'prop-types';


class Tasks extends React.Component {

    render() {

        return (

            <div>{

                this.props.tasks.map((e) =>

                    <Task
                        task={e}
                        key={e.id}
                        deleteTask={this.props.deleteTask}
                        checkDone={this.props.checkDone}
                    />

                )

            }</div>

        );

    }

}

Tasks.propTypes = {

    tasks: PropTypes.array.isRequired
}

export default Tasks;