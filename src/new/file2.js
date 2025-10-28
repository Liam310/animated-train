import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

/**
 * Makes a POST request to the SDDS API to initiate a data portability request.
 *
 * @param {string} code - A Google OAuth authorization code
 * @param {string} scopes - A space-delimited list of Google OAuth scopes
 * @param {string} externalSurveyId - An ID to connect the donation to a user's external survey responses
 *
 * @returns {Promise} - Resolves to a response object: 200 if portability job successfully initiated; rejects otherwise
 */
function postInitiatePortability(code, scopes, externalSurveyId) {
  return axiosInstance.post("/donations/youtube", {
    code,
    scopes,
    externalSurveyId,
  });
}

/**
 * Makes a GET request to the SDDS API to check the status of a portability job.
 * The server will expect an HttpOnly cookie to authorize this request.
 *
 * @returns {Promise} - Resolves to a response object: 202 if portability job is ongoing, 200 if it is complete; rejects otherwise
 */
export const getDonationStatus = () => {
  return axiosInstance.get("/donations/youtube/status");
};

/**
 * Makes a GET request to the SDDS API to check summary of a person's donated YouTube data.
 * The server will expect an HttpOnly cookie to authorize this request.
 *
 * @returns {Promise} - Resolves to a response object: 200 with summary data on body if found; rejects otherwise
 */
export const getDonationSummary = () => {
  return axiosInstance.get("/donations/youtube/summary");
};
