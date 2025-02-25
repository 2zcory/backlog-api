import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class UserApi {
  static getList() {
    const res = ApiFetch.get<NSBacklog.User[]>(Endpoints.USERS);

    return res;
  }
}

export default UserApi;
