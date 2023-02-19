import React from "react";
import "./Modal.css";

const Modal = props => {
    if(!props.show) {
        return null;
    }
    return (
    <div className="modal-box" onClick={()=>props.closeModal()}>
        <div>
        <img style={{width:"70%", height:"70%"}}src={props.data.img}/>
        <div className="modal-header">
            <h4 className="modal-title">{props.data.title}</h4>
        </div>
        <div className="modal-body">
            {props.data.body}
        </div>
        </div>
    </div>
    )
}

export default Modal;