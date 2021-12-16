import { combineReducers } from "redux";
import botmessage from "./botmessage.reducer";
import auth from "./auth.reducer";

const reducers = combineReducers({
  botmessage,
  auth,
});

export default reducers;
