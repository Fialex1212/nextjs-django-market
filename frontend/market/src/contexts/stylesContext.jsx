"use client"

import { createContext, useState, useContext } from "react"

//Creating a context
const StylesSortingContext = createContext(undefined)

//Provider
export const StylesSortingProvider = ({children}) => {
    const [selectedStyles, setSelectedStyles] = useState([])
    return <StylesSortingContext.Provider value={{selectedStyles, setSelectedStyles}}>
    {children}
    </StylesSortingContext.Provider>
}

//Hook to use context
export const useStylesSorting = () => {
    const context = useContext(StylesSortingContext)
    if (!context) {
        throw new Error("useStylesSorting must be used within StylesSortingProvider")
    }
    return context
}