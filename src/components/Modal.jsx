import React from 'react'
import ReactDOM from 'react-dom'

import '../components/styles/Modal.css'

export default function Modal (props){
    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>, 
        document.getElementById('modal')
    )
}