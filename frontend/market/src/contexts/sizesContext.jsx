"use client"

import { createContext, useState, useContext } from "react"

//Creating a context
const SizesSortingContext = createContext(undefined)

//Provider
export const SizesSortingProvider = ({children}) => {
    const [selectedSizes, setSelectedSizes] = useState([])
    return <SizesSortingContext.Provider value={{selectedSizes, setSelectedSizes}}>
    {children}
    </SizesSortingContext.Provider>
}

//Hook to use context
export const useSizesSorting = () => {
    const context = useContext(SizesSortingContext)
    if (!context) {
        throw new Error("useSizesSorting must be used within SizesSortingProvider")
    }
    return context
}