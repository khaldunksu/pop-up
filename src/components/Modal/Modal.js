import React from 'react';
import './Modal.scss';
import '../Popup/media.scss';
const Modal = ({ contact, showInf }) => {
    return (
        <section className="modal">
            <div>
                <button onClick={showInf} className="modal_button-dots">
                    <img src={require("../Popup/img/3 dots.png")} alt='More button' />
                </button>
            </div>
            {contact ?
                <div className="modal_inform">
                    <a className="modal_link contact "href="!#">Contact owner</a>
                    <hr className="border"/>
                    <a className="modal_link report" href="!#">Report this event</a>
                </div>
                : null
            }
        </section>
    )
}
export default Modal