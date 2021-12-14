import {
  SEND_BOT_MESSAGE,
  SEND_BOT_MESSAGE_FAILED,
  SEND_BOT_MESSAGE_SUCCESS,
} from "../action-types/actionTypes";
import API from "../shared/API_EXPLICIT";

export const Get_Bot_Message = (query, messagesList) => (dispatch) => {
  dispatch({
    type: SEND_BOT_MESSAGE,
  });
  let newMessgesList;
  API.get("/message")
    .then((res) => {
      console.log(query);
      newMessgesList = [...messagesList, query, ...res.data];
      dispatch({
        type: SEND_BOT_MESSAGE_SUCCESS,
        payload: newMessgesList,
      });
    })
    .catch((error) => {
      dispatch({
        type: SEND_BOT_MESSAGE_FAILED,
        payload: error.message,
      });
    });
};
