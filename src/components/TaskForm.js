import React from 'react';

class TaskForm extends React.Component {

    state = {

        title: '',
        description: ''


    }



    onSubmit = (e) => {
        
        this.props.addTask(this.state.title, this.state.description);

        // console.log(this.state);s
        e.preventDefault();

    }


    onChange = (e) => {


        this.setState({
            [e.target.name] : e.target.value
        })
            
            console.log(e.target.name + " -> " + e.target.value);
       


    }


    render() {
        
        return (

            <form onSubmit={this.onSubmit}>

                <input type="text"
                    placeholder="write a Task"
                    style={formStyle}
                    onChange={this.onChange}
                    name="title"
                    value={this.state.title}
                ></input>
                <textarea placeholder="write details task"
                    style={formStyle}
                    onChange={this.onChange}
                    name="description"
                    value={this.state.description}
                ></textarea>
                <input type="submit" style={formStyle}></input>

            </form>

        )

    }
}

const formStyle = {

    display: 'block'


}

export default TaskForm;