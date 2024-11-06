"use client"

import {useState, createContext, useContext} from 'react'

//Create a context
const PriceSortingContext = createContext(undefined)

//provider
export const PriceSortingProvider = ({children}) => {
    const [priceValue, setPriceValue] = useState([0, 1000])
    return <PriceSortingContext.Provider value={{priceValue, setPriceValue}}>
        {children}
    </PriceSortingContext.Provider>
}

//Hook to use context
export const usePriceSorting = () => {
    const context = useContext(PriceSortingContext)
    if (!context) {
        throw new Error("useSoring muse be use within PriceSortingProvider")
    }
    return context
}
