import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TaskInput = ({ label, name, value, onChange, placeholder, error, type }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input 
                type={type}
                name={name}
                className={classNames('form-control form-control-lg', {'is-invalid': error})}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TaskInput.defaultProps = {
    type: 'text'
}

TaskInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string
};

export default TaskInput;