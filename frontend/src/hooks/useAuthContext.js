const {AuthContext} = require('../context/AuthContext');
const {useContext} = require('react');

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) { 
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
}
