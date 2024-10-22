import { useEffect, useState } from "react";

const useAuth = () => {
    const [token, setToken] = useState("")

    useEffect(() => {
        const savedToken = JSON.parse(localStorage.getItem("jwt-token"));
        if (savedToken) {
            setToken(savedToken);
        }
    }, [])

    const updateToken = (newToken) => {
        setToken(newToken)
        localStorage.setItem("jwt-token", JSON.stringify(newToken))
        console.log("Updated jwt token");
    }

    const cleareToken = () => {
        setToken("")
        localStorage.removeItem("jwt-token")
    }

    return {token, updateToken, cleareToken}
}

export default useAuth;