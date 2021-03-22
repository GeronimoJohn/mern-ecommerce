import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQEUST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";
import Axios from "axios";

export const signin = ((email, passwordd) = async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQEUST, payload: { email, password } });
  try {
    const data = await Axios.post("/api/users/sign", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
});
