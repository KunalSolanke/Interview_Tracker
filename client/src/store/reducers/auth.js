import * as actionTypes from '../constants/auth' ;
import { UpdatedObj } from '../UpdateObj' ;


const initialState = {
    error : null ,
    loading : false ,
    token : null,
    username : null
}

const authStart = (state ,action) => {
    return UpdatedObj(state,{
        error : null,
        loading : true 
    })
}

const authSucces = (state,action) => {
    return UpdatedObj (state,{
        token: action.payload.token,
        loading : false ,
        error : null ,
        username : action.username
    })
}

const authFail = (state,action) => {
    return UpdatedObj(state,{
        error : action.error,
        loading: false
    })
}


const authLogout = (state,action) => {
    
    return UpdatedObj(state,{
        token : null ,

    })
}




const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state,action)
        case actionTypes.AUTH_SUCCESS : return authSucces(state,action)
        case actionTypes.AUTH_FAIL: return authFail(state,action)
        case actionTypes.AUTH_LOGOUT : return authLogout(state,action)
        default  : return state
    }
}

export default reducer ;