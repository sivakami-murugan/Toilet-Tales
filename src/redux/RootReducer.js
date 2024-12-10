import { combineReducers } from "redux";
import userReducer from "../redux/Reducers/ProjectsReducer";
import projectUserReducer from "../redux/Reducers/ProjectsReducer";

export default combineReducers({
  users: userReducer,
  projectUser: projectUserReducer,
});
