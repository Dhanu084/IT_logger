import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from "./types";

// method 1
// export const getLogs = () => {
//     return async((dispatch)=>{
//         setLoading();
//         const res = await fetch("/logs");
//         const data = await res.json();

//         dispatch({
//             type:GET_LOGS,
//             payload:data
//         })
//     })
// };

//method 2
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteLog = (logId) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${logId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: DELETE_LOG,
      payload: logId,
    });
  } catch (err) {
    console.log("error", err);
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};
export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
