import React, {useState} from 'react'
import { useModalAndAside } from '../asideAndModalContext'
import {GrFormClose} from 'react-icons/gr'

import logo from "./../logo.svg"

export default function SideBar() {
    const {isAsideOpen, toggleAside} = useModalAndAside()
    return (
        <aside className={`aside ${isAsideOpen && "show-aside"}`} >
            <img className="aside-logo" src={logo} alt="logo" />

            <button onClick={toggleAside} className="close-side-bar">
                <GrFormClose/>
            </button>

            <nav className="aside-nav" >
                <ul className="nav-list" >
                    <li>
                        <a href="">home</a>
                    </li>
                    <li>
                        <a href="">projects</a>
                    </li>
                    <li>
                        <a href="">team</a>
                    </li>
                    <li>
                        <a href="">documents</a>
                    </li>

                    <li>
                        <a href="">about</a>
                    </li>
                </ul>
            </nav>

        </aside>
    )
}
