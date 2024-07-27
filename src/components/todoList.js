import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask, markComplete, updateTask } from "../api/routes";
import ModalComponent from "./modal";
import Noty from "noty";
import "noty/lib/noty.css";

class TaskList extends Component {

    state = {
        _id: '',
        localTitle: '',
        localDescription: '',
        errors: {},
        switch: false
    };

    vide_errors = () => {
        this.setState({
            errors: {}
        })
    };

    changeSwitch = (_id, title, description) => {
        this.setState({
            _id,
            localTitle: title,
            localDescription: description
        })
    };

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        const {_id, localTitle, localDescription} = this.state;

        if (!localTitle) {
            this.setState({
                errors: {title: "Title required!"}
            })
            return
        };

        if (!localDescription) {
            this.setState({
                errors: {description: "Description required!"}
            })
            return
        };

        const newTask = {
            _id,
            title: localTitle,
            description: localDescription
        };

        this.props.updateTask(newTask);
        this.notify("List updated!", "Warning");
        this.vide_errors();
    };
    
    notify = (text, type) => {
        new Noty({
            text,
            animation: {
                open: 'noty_effects_open',
                close: 'noty_effects_close'
            },
            timeout: 400,
            layout: 'topRight',
            type
        }).show();
    };

    onTaskDelete = (id) => {
        this.props.deleteTask(id);
        this.notify("Task Deleted!", "Success");
    };

    render() {
        const {_id, title, description, done} = this.props.task;

        return (
            <div className="container-md">
                <div className="card mb-3">
                    <h5 className="card-header">
                        {title}
                    </h5>
                    <div className="card-body">
                        <p className="card-text">
                            {description}
                        </p>
                        <div className="d-flex mb-3">
                            <input type="checkbox" className="float-left ml-2" style={{cursor:'pointer'}} defaultChecked={done} onChange={this.props.markComplete.bind(this, _id)} name="Done" id=""
                            />
                        </div>
                        <button className="btn btn-danger float-left" onClick={this.markComplete.bind(this, _id)}>
                            delete task
                        </button>

                        <ModalComponent 
                            switch={this.changeSwitch.bind(this, _id, title, description)}
                            state={this.state}
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                            />
                    </div>
                </div>
            </div>
        )
    };
}

export default connect(null, {markComplete, deleteTask, updateTask})
(TaskList);