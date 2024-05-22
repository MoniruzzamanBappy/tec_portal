import HttpKit from "./HttpKit";

export const uploadSettings = {
  headers: {
    Accept: "*/*",
    "content-type": "multipart/form-data",
  },
};

const ApiKit = {
  auth: {
    login: (payload) => HttpKit.post("auth/login", payload),
    refreshToken: (payload) => HttpKit.post("auth/refresh", payload),
  },
  userJob: {
    getJobs: (params) => HttpKit.get("jobs", { params }),
    getJobSheets: (params) => HttpKit.get("user/job-sheets", { params }),
    getUserJob: (params) => HttpKit.get("user/job", { params }),
  },
};

export default ApiKit;
