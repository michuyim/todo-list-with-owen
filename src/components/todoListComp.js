import React, { Component } from "react";
import ToDoList from "./todoList";
import { connect } from "react-redux";
import { getTasks } from "../api/routes";

class ToDoLists extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        const { tasks } = this.props;
        return (
            <React.Fragment>

                {/* Owen Style This */}
                <div className="container-md">
                    {tasks.map(task => (
                        <div className="col-md-12">
                            <ToDoList key={task._id} task={task} />
                        </div>
                    ))}
                </div>
                {/* Stop Here */}

                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.data.tasks
    }
}

export default connect(mapStateToProps, {getTasks})(ToDoLists);