import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";

import AccountModal from "./AccountModal";

const Modal = (props) => {
    const { modal } = props;

    if (!modal) return null;

    let component;
    switch (modal) {
        case "account":
            component = <AccountModal type={"account"} />;
            break;
        default:
            return null;
    }

    const handleBackgroundClick = (event) => {
        props.closeModal();
    };

    return (
        <div onClick={handleBackgroundClick} className="modal__background">
            {component}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(
    Modal
);
