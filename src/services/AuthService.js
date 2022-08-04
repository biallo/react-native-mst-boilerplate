import Urls from '../config/Urls';
import { axiosAuth, axiosOpen } from '../utils/axios';

const API = Urls.API;

export default {
  login: (params) =>
    axiosOpen.post(API + '/auth/login', params)
};
