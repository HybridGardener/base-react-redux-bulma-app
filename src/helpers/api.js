import uuidv4 from 'uuid/v4'
import axios from 'axios'
import store from './../store';
import { showLoader, hideLoader } from '../actions/loader.action';

const { dispatch } = store;

export const initAxios = (accessToken) => {
  // const baseURL = ((window.location.origin || "").includes("virgin") ? `${window.location.origin}/svc/embarkation-admin-bff` : `${window.location.origin}/embarkation-admin-bff`)
  const baseURL = `${process.env.BASE_URL}`
  axios.defaults.baseURL = baseURL //TODO: will be read from process.env.BASE_URL
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Accept'] = 'application/json'
  axios.defaults.headers.common['Accept-Language'] = 'en-us'
}

axios.interceptors.request.use((configuration) => {
  dispatch(showLoader());
  configuration.headers.common.CorrelationId = uuidv4();
  return configuration;
});

axios.interceptors.response.use((configuration) => {
  dispatch(hideLoader());
  return configuration;
});
