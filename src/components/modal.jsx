import React from 'react'

import { useModalAndAside } from '../asideAndModalContext'

import {GrFormClose} from 'react-icons/gr' 

export default function Modal() {
    const {isModalOpen, toggleModal} = useModalAndAside()
    console.log(isModalOpen)
    return (
        <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
            <div className="modal-content">
                <button onClick={() => toggleModal()} className="close-modal-btn">
                    <GrFormClose/>
                </button>
                <p>modal content</p>
            </div>
            
        </div>
    )
}
