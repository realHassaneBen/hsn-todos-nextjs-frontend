import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.js";
import users from "./users.js";

import login from "./login.js";
import register from "./register.js";

import tasks, { fetchTasks, fetchTasksByUserId } from "./tasks.js";

import taskCreate from "./taskCreate.js";
import taskEdit from "./taskEdit.js";

import comments, { fetchComments, fetchCommentsByUserId } from "./comments.js";

import commentCreate from "./commentCreate.js";
import commentEdit from "./commentEdit.js";

const reducers = combineReducers({
    users,
    auth,

    login,
    register,

    tasks,
    taskEdit,
    taskCreate,

    comments,
    commentEdit,
    commentCreate,
});

export default reducers;
export { fetchTasks, fetchTasksByUserId, fetchComments, fetchCommentsByUserId };
