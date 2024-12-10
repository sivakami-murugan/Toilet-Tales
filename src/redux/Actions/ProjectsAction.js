import {
  CHAPTER_PROJECT,
  CHAPTER_PROJECT_ERROR,
  CREATE_CHAPTER_4_STATUS,
  CREATE_CHAPTER_FIVE,
  CREATE_CHAPTER_TWO,
  CREATE_CHAPTER_TYPE,
  CREATE_CHAPTER_TYPE_ERROR,
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  CREATE_QUESTIONS,
  CREATE_QUESTIONS_ERROR,
  GET_CHAPTER_3_DATA,
  GET_CHAPTER_3_DATA_ERROR,
  GET_CHAPTER_DATA,
  GET_CHAPTER_DATA_ERROR,
  GET_CHAPTER_FIVE_QUESTION,
  GET_CHAPTER_FIVE_REPORT_DATA,
  GET_CHAPTER_TWO_DATA,
  GET_CHAPTER_TWO_DATA_ANSWER,
  GET_COMMON_REPORT_DATA,
  GET_PREVOIUS_DATA,
  GET_PREVOIUS_DATA_ERROR,
  GET_PROJECT_STATUS,
  GET_REPORT_DATA,
  GET_REPORT_DATA_ERROR,
  GET_USERS_PROJECT,
  TYPE_PROJECT,
  TYPE_PROJECT_ERROR,
  UPDATE_CHAPTER_TYPE,
  UPDATE_CHAPTER_TYPE_ERROR,
  USERS_PROJECT_ERROR,
} from "../ActionType";

// import request from "../Api";
//   USERS_PROJECT_ERROR,
// } from "../ActionType";

import request from "../api";

export const getProjectUsers = () => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("accessToken");
  try {
    let res = await request.get(`/projects`);
    dispatch({
      type: GET_USERS_PROJECT,
      payload: res.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: USERS_PROJECT_ERROR,
      payload: console.log(e),
    });
    return e;
  }
};

// Delete project Card

export const deleteProjectCard = (projectId) => async (dispatch) => {
  try {
    let response = await request.delete(`/projects/${projectId}`);
    return response;
  } catch (error) {
    console.error("Error in deleting corporate location", error);
    return error;
  }
};

export const createProject = (projectData) => async (dispatch) => {
  try {
    let res = await request.post(`/projects`, projectData);
    dispatch({
      type: CREATE_PROJECT,
      payload: res.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: CREATE_PROJECT_ERROR,
      payload: e,
    });
    return e;
  }
};

export const geChapterUsers = (projectId) => async (dispatch) => {
  try {
    let res = await request.get(`/chapters/${projectId}`);
    dispatch({
      type: CHAPTER_PROJECT,
      payload: res.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: CHAPTER_PROJECT_ERROR,
      payload: console.log(e),
    });
    return e;
  }
};

export const geChapterType = (chapterId) => async (dispatch) => {
  try {
    let res = await request.get(`/chapters/types-category/${chapterId}`);
    dispatch({
      type: TYPE_PROJECT,
      payload: res.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: TYPE_PROJECT_ERROR,
      payload: console.log(e),
    });
    return e;
  }
};

export const CreateChapterTypes = (ChapterData) => async (dispatch) => {
  try {
    let res = await request.post(`/chapter-flows`, ChapterData);
    dispatch({
      type: CREATE_CHAPTER_TYPE,
      payload: res.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: CREATE_CHAPTER_TYPE_ERROR,
      payload: e,
    });
    return e;
  }
};

export const UpdateChapterTypes =
  ({ chapterData, projectId, chapterId }) =>
  async (dispatch) => {
    try {
      let res = await request.put(
        `/chapter-flows/${projectId}/${chapterId}`,
        chapterData
      );
      dispatch({
        type: UPDATE_CHAPTER_TYPE,
        payload: res.data,
      });
      return res;
    } catch (e) {
      dispatch({
        type: UPDATE_CHAPTER_TYPE_ERROR,
        payload: e,
      });
      return e;
    }
  };

export const getChapterLevelData =
  ({ projectId, chapterId }) =>
  async (dispatch) => {
    try {
      let res = await request.get(`/chapter-flows/${projectId}/${chapterId}`);
      dispatch({
        type: GET_CHAPTER_DATA,
        payload: res.data,
      });
      return res;
    } catch (e) {
      dispatch({
        type: GET_CHAPTER_DATA_ERROR,
        payload: console.log(e),
      });
      return e;
    }
  };

export const getChapterTwoData =
  ({ chapterId }) =>
  async (dispatch) => {
    try {
      let res = await request.get(`/questions/${chapterId}`);
      dispatch({
        type: GET_CHAPTER_TWO_DATA,
        payload: res,
      });
      return res;
    } catch (e) {
      dispatch({
        type: GET_CHAPTER_DATA_ERROR,
        payload: e.response,
      });
      return e?.response;
    }
  };

export const CreateChapterTwo =
  (projectId, chapterId, projectData) => async (dispatch) => {
    try {
      let res = await request.post(
        `/chapterFlow2/${projectId}/${chapterId}`,
        projectData
      );
      dispatch({
        type: CREATE_CHAPTER_TWO,
        payload: res.data,
      });
      return res;
    } catch (e) {
      console.error("Error in CreateChapterTwo:", e);
      return e;
    }
  };
export const getAnswerTwoData =
  ({ projectId }) =>
  async (dispatch) => {
    try {
      let res = await request.get(`/chapterFlow2/${projectId}`);
      dispatch({
        type: GET_CHAPTER_TWO_DATA_ANSWER,
        payload: res,
      });
      return res;
    } catch (e) {
      dispatch({
        type: GET_CHAPTER_DATA_ERROR,
        payload: e.response,
      });
      return e?.response;
    }
  };
export const getChapterFiveReportData =
  ({ projectId }) =>
  async (dispatch) => {
    try {
      let res = await request.get(`/chapterFlow5/${projectId}`);
      dispatch({
        type: GET_CHAPTER_FIVE_REPORT_DATA,
        payload: res,
      });
      return res;
    } catch (e) {
      dispatch({
        type: GET_CHAPTER_DATA_ERROR,
        payload: e.response,
      });
      return e?.response;
    }
  };
export const getCommonReportData =
  ({ projectId }) =>
  async (dispatch) => {
    try {
      let res = await request.get(`/report/${projectId}`);
      dispatch({
        type: GET_COMMON_REPORT_DATA,
        payload: res,
      });
      return res;
    } catch (e) {
      dispatch({
        type: GET_CHAPTER_DATA_ERROR,
        payload: e.response,
      });
      return e?.response;
    }
  };
export const getChapterFiveQuestion =
  ({ chapterId }) =>
  async (dispatch) => {
    console.log(chapterId, "chapterId");
    try {
      let res = await request.get(`/chapterFlow5/questions/${chapterId}`);
      dispatch({
        type: GET_CHAPTER_FIVE_QUESTION,
        payload: res,
      });
      return res;
    } catch (e) {
      dispatch({
        type: GET_CHAPTER_DATA_ERROR,
        payload: e.response,
      });
      return e?.response;
    }
  };

export const CreateChapterFive =
  (projectId, chapterId, projectData) => async (dispatch) => {
    try {
      let res = await request.post(
        `/chapterFlow5/${projectId}/${chapterId}`,
        projectData
      );
      dispatch({
        type: CREATE_CHAPTER_FIVE,
        payload: res.data,
      });
      return res;
    } catch (e) {
      console.error("Error in CreateChapterTwo:", e);
      return e;
    }
  };
export const CreateChapterFour =
  (projectId, chapterId, projectData) => async (dispatch) => {
    try {
      let res = await request.post(
        `/chapterFlow4/${projectId}/${chapterId}`,
        projectData
      );
      dispatch({
        type: CREATE_CHAPTER_4_STATUS,
        payload: res.data,
      });
      return res;
    } catch (e) {
      console.error("Error in CreateChapterTwo:", e);
      return e;
    }
  };
export const getProjectStatus = (projectId) => async (dispatch) => {
  try {
    let res = await request.get(`/chapter-flows/${projectId}`);
    dispatch({
      type: GET_PROJECT_STATUS,
      payload: res.data.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: GET_CHAPTER_DATA_ERROR,
      payload: e.response ? e.response.data : e.message,
    });
    return e.response;
  }
};

// Chapter flows 3
export const getChapterThreeData = (chapterId) => async (dispatch) => {
  try {
    let res = await request.get(`/questions/${chapterId}`);
    dispatch({
      type: GET_CHAPTER_3_DATA,
      payload: res.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: GET_CHAPTER_3_DATA_ERROR,
      payload: console.log(e),
    });
    return e;
  }
};

export const createQuestions =
  ({ projectId, chapterId, questionsData }) =>
  async (dispatch) => {
    try {
      let res = await request.post(
        `/chapterFlow3/${projectId}/${chapterId}`,
        questionsData
      );

      dispatch({
        type: CREATE_QUESTIONS,
        payload: res.data,
      });
      return res;
    } catch (e) {
      dispatch({
        type: CREATE_QUESTIONS_ERROR,
        payload: e,
      });
      return e;
    }
  };

export const getChapterThreePreviousData =
  ({ projectId, chapterId }) =>
  async (dispatch) => {
    try {
      let res = await request.get(`/chapterFlow3/${projectId}`);

      dispatch({
        type: GET_PREVOIUS_DATA,
        payload: res.data,
      });
      return res;
    } catch (e) {
      dispatch({
        type: GET_PREVOIUS_DATA_ERROR,
        payload: console.log(e),
      });
      return e;
    }
  };

export const getReportData = (projectId) => async (dispatch) => {
  try {
    let res = await request.get(`/report/${projectId}`);

    dispatch({
      type: GET_REPORT_DATA,
      payload: res.data,
    });
    return res;
  } catch (e) {
    dispatch({
      type: GET_REPORT_DATA_ERROR,
      payload: console.log(e),
    });
    return e;
  }
};
