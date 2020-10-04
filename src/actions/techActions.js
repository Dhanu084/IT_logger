import {
  ADD_TECH,
  SET_LOADING,
  LOGS_ERROR,
  GET_TECHS,
  DELETE_TECH,
} from "./types";

export const getTechs = () => async (dispatch) => {
  try {
    let res = await fetch("/techs");
    let data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

export const deleteTech = (techId) => async (dispatch) => {
  console.log("deleting");
  try {
    setLoading();
    let res = await fetch(`/techs/${techId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    dispatch({
      type: DELETE_TECH,
      payload: techId,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};
export const addTech = (tech) => async (dispatch) => {
  console.log(tech);
  try {
    setLoading();
    let res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    dispatch({
      type: ADD_TECH,
      payload: tech,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err,
    // });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
