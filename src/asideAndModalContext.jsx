import { useContext, useState } from "react";
import React from 'react'


const ModalAndAsideContext = React.createContext()

export function useModalAndAside(){
    return useContext(ModalAndAsideContext)
}


export function ContextProvider({children}){
    const [isAsideOpen, setIsAsideOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleAside = () =>{
        setIsAsideOpen(!isAsideOpen)
    }

    const toggleModal = () =>{
        setIsModalOpen(!isModalOpen)
    }

    return <ModalAndAsideContext.Provider value={{isAsideOpen, isModalOpen, toggleAside, toggleModal}}>
        {children}
    </ModalAndAsideContext.Provider>
            

        
        

    

}