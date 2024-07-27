import React, { useState } from "react";
import PropTypes from 'prop-types';
import ModalEdit from "./layout/modalEdit";

const ModalComponent = ({ state, onSubmit, onChange, Switch }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
        Switch();
    }

    return (
        <div>
            <button className="btn float-right btn-warning" onClick={toggleModal}>
                Edit
            </button>

            <ModalEdit
                state={state}
                submit={onSubmit}
                onChange={onChange}
                onHide={() => setShowModal(false)}
                show={showModal}
            />
        </div>
    );
}

ModalComponent.propTypes = {
    state: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    Switch: PropTypes.func.isRequired
};

export default ModalComponent;