import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useLogout = () => {
    const { dispatch } = useContext(AuthContext);
    const logout = () => {
        // remove token from local storage
        localStorage.removeItem("user");
        // dispatch logout action
        dispatch({ type: "LOGOUT" });
    }
    return { logout };
}