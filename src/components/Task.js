import React from "react";
import PropTypes from 'prop-types';

class Task extends React.Component {


    styleCompleted = () =>{

        return{

            fontSize: '20px',
            color: this.props.task.done ? 'gray':'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none',

        }


    }

    render() {

        return (

            <div key={this.props.task.id} style={this.styleCompleted()}>
                {this.props.task.title}-
                {this.props.task.description}-
                {this.props.task.done}-
                {this.props.task.id}
                <input type="checkbox" />
                <button style={btnDelete}> X </button>

            </div>




        );

    }



}

Task.propTypes = {

    task: PropTypes.object.isRequired
}

const btnDelete = {

    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
    
}

export default Task;