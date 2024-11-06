"use client"

import { createContext, useState, useContext } from "react"

//Creating a context
const ColorsSortingContext = createContext(undefined)

//Provider
export const ColorsSortingProvider = ({children}) => {
    const [selectedColors, setSelectedColors] = useState([])
    return <ColorsSortingContext.Provider value={{selectedColors, setSelectedColors}}>
    {children}
    </ColorsSortingContext.Provider>
}

//Hook to use context
export const useColorsSorting = () => {
    const context = useContext(ColorsSortingContext)
    if (!context) {
        throw new Error("useColorsSorting must be used within ColorsSortingProvider")
    }
    return context
}