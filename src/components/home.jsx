import React from 'react'

import { useModalAndAside } from '../asideAndModalContext'

import {RiMenuUnfoldFill} from 'react-icons/ri'


export default function Home() {
    const {toggleAside, toggleModal} = useModalAndAside()
    return (
        <>
            <button onClick={toggleAside} className="side-bar-open-btn">
                <RiMenuUnfoldFill/>
            </button>
            <button onClick={toggleModal} className="modal-open-btn">
                show modal
            </button>
        </>
    )
}
