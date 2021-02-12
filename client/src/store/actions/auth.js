import * as authActions from "../constants/auth.js";
import axios from "../../http/api";

export const authStart = () => {
  return {
    type: authActions.AUTH_START,
  };
};

export const authSuccess = (data) => {
  return {
    type: authActions.AUTH_SUCCESS,
    payload: data,
  };
};

export const authFail = (data) => {
  return {
    type: authActions.AUTH_FAIL,
    payload: data,
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiry");
  localStorage.removeItem("username");
  return {
    type: authActions.AUTH_LOGOUT,
  };
};

export const getProfileRequest = () => {
  return {
    type: authActions.GET_PROFILE_REQUEST,
  };
};

export const getProfileSuccess = (data) => {
  return {
    type: authActions.GET_PROFILE_SUCCESS,
    payload: data,
  };
};

export const updateProfileRequest = () => {
  return {
    type: authActions.PROFILE_UPDATE_REQUEST,
  };
};

export const updateProfileSuccess = (data) => {
  return {
    type: authActions.PROFILE_UPDATE_SUCCESS,
    payload: data,
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    await dispatch(authStart());
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      axios.defaults.headers["Authorization"] = `Token ${token}`;
      const response = await axios.get(`/accounts/logout`);
      await dispatch(authLogout());
    } catch (err) {
      console.log(err);
      await dispatch(authFail(err));
    }
  };
};

let wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const checkauthtimeout = (expiry) => {
  return async (dispatch, getState) => {
    await wait(expiry);
    console.log(expiry, "here");
    try {
      const res = await axios.get("/accounts/refresh");
      localStorage.setItem("token", res.data.token);
      const expiryT = new Date(
        new Date().getTime() + (res.data.expiry - 60) * 1000
      );
      localStorage.setItem("expiry", expiryT);
      await dispatch(checkauthtimeout(res.data.expiry));
    } catch (err) {
      await dispatch(authLogout());
    }
  };
};

export const getProfile = () => {
  return (dispatch) => {
    dispatch(getProfileRequest());
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios.defaults.headers["Authorization"] = `Token ${token}`;
    axios
      .get(`/accounts/profile`)
      .then((response) => {
        console.log(response);
        dispatch(getProfileSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export const updateProfile = (data) => {
  console.log("entering here");
  return (dispatch) => {
    dispatch(updateProfileRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios.defaults.headers["Authorization"] = `Token ${token}`;
    axios
      .post(`/accounts/profile`, data)
      .then((response) => {
        console.log(response);
        dispatch(getProfileSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export const authLogin = ({ password, email }) => {
  return async (dispatch, getState) => {
    await dispatch(authStart());
    try {
      const response = await axios.post(`/accounts/login`, { email, password });
      let token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("expiry", response.data.expiry);
      const expiry = new Date(
        new Date().getTime() + (response.data.expiry - 60) * 1000
      );
      await dispatch(authSuccess(response.data));
      await dispatch(checkauthtimeout((response.data.expiry - 60) * 1000));
    } catch (err) {
      console.log(err);
      await dispatch(authFail(err));
    }
  };
};

export const authRegister = ({ username, email, password }) => {
  return async (dispatch, getState) => {
    await dispatch(authStart());
    try {
      const response = await axios.post(`/accounts/signup`, {
        username,
        email,
        password,
      });
      let token = response.data.token;
      console.log("sennding post req....", response.data);
      localStorage.setItem("token", token);
      localStorage.setItem("username", response.data.username);

      const data = {
        username,
        email,
        token,
      };
      const expiry = new Date(
        new Date().getTime() + (response.data.expiry - 60) * 1000
      );
      localStorage.setItem("expiry", expiry);
      await dispatch(authSuccess(data));
      await dispatch(checkauthtimeout((response.data.expiry - 60) * 1000));
    } catch (err) {
      console.log(err);
      await dispatch(authFail(err));
    }
  };
};

export const socialAuth = (data, provider) => {
  return async (dispatch, getState) => {
    await dispatch(authStart());
    try {
      const response = await axios.post(`/auth/social/${provider}`, data);
      console.log("sennding post req....", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);

      const expiry = new Date(
        new Date().getTime() + (response.data.expiry - 60) * 1000
      );
      localStorage.setItem("expiry", expiry);
      await dispatch(authSuccess(response.data));
      await dispatch(checkauthtimeout((response.data.expiry - 60) * 1000));
    } catch (err) {
      console.log(err);
      await dispatch(authFail(err));
    }
  };
};
