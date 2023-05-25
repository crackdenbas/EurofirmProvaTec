
// This function is used to validate the user login
// It returns a promise with a success boolean and an error string
// If the login is successful, it returns a token string

import { IJsonResponse, IUser } from "./Interfaces"

// If the login is unsuccessful, it returns an error string
export const UserLogin = (user : IUser) => {
    if (user.name === '') {
        return {success: false, error: 'Username is required'}
    }
    if (!user.password) {
        return {success: false, error: 'Password is required'}
    }
    if(user.password.length < 8) {
        return {success: false, error: 'Password must be at least 8 characters'} 
    }

    // Add more validation here
    // Dummy API call
    return ({success: true , data:{ name : user.name ,token:'123456789' } })
}