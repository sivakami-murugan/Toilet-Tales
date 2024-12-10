import {
  CHAPTER_PROJECT,
  CREATE_PROJECT,
  CREATE_QUESTIONS,
  GET_CHAPTER_3_DATA,
  GET_CHAPTER_DATA,
  GET_CHAPTER_FIVE_QUESTION,
  GET_PREVOIUS_DATA,
  GET_USERS,
  GET_USERS_PROJECT,
  TYPE_PROJECT,
  GET_REPORT_DATA,
} from "../ActionType";

const initialState = {
  users: [],
  projectUser: [],
  createProject: [],
  chapterProject: [],
  chapterData: [],
  chapterThreeData: [],
  chapterFiveData: [],
  createQuestion: [],
  previousQuestion: [],
  reportAnswer: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USERS_PROJECT:
      return {
        projectUser: action.payload,
        loading: false,
      };
    case CREATE_PROJECT:
      return {
        createProject: action.payload,
        loading: false,
      };
    case CHAPTER_PROJECT:
      return {
        chapterProject: action.payload,
        loading: false,
      };
    case TYPE_PROJECT:
      return {
        typeProject: action.payload,
        loading: false,
      };
    case GET_CHAPTER_DATA:
      return {
        chapterData: action.payload,
        loading: false,
      };
    case GET_CHAPTER_3_DATA:
      return {
        chapterThreeData: action.payload,
        loading: false,
      };
    case GET_CHAPTER_FIVE_QUESTION:
      return {
        chapterFiveData: action.payload,
        loading: false,
      };
    case CREATE_QUESTIONS:
      return {
        createQuestion: action.payload,
        loading: false,
      };
    case GET_PREVOIUS_DATA:
      return {
        previousQuestion: action.payload,
        loading: false,
      };
    case GET_REPORT_DATA:
      return {
        reportAnswer: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
