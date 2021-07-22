import axios from 'axios';
import * as actionTypes from './actionType';

export const authStart = () =>{
    return{
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = token =>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        token:token
    }
}

export const authFail = error =>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const logout =()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout =  expirationTime =>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime * 1000)
    }
}

export const authLogin = (username,password)=>{
    return dispatch=>{
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api-auth/login/',{
            username:username,
            password:password
        })
        .then(resp=>{
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime()+3600 * 1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err =>{
            dispatch(authFail(err))
        })
    }
}


export const authSignup = (username,email,password1,password2)=>{
    return dispatch=>{
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api-auth/registration/',{
            username:username,
            email:email,
            password1:password1,
            password2:password2
        })
        .then(resp=>{
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime()+3600 * 1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err =>{
            dispatch(authFail(err))
        })
    }
}