import axios from "axios";
import { Auth } from "aws-amplify";

// Add a request interceptor

const instance = axios.create({
  baseURL: "https://pi1q1uq4s6.execute-api.eu-south-1.amazonaws.com/dev",
});

instance.interceptors.request.use(async function (config) {
  const session = await Auth.currentSession();
  let idToken = session.getIdToken();

  let jwt = idToken.getJwtToken();

  config.headers.Authorization = jwt;

  return config;
});
export default instance;
