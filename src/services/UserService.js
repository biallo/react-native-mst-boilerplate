import Urls from '../config/Urls';
import { axiosAuth, axiosOpen } from '../utils/axios';

const API = Urls.API;

export default {
  getActivities: (params) =>
    axiosAuth.get(API + '/user/activities', {params})
};
