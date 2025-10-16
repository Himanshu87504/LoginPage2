import { createContext } from "react"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const loginUser = async (form) => {
        const response = await axios.post("http://localhost:5001/api/login", form)
        console.log(response);
    }


    return (
        <UserContext.Provider value={{ loginUser }}>
            {children}
        </UserContext.Provider>
    )
}