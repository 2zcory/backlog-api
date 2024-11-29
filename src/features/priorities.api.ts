import ApiFetch from '../api';
import Endpoints from '../endpoints';

class PriorityApi {
  static getList() {
    const res = ApiFetch.get<NSBacklog.Priority[]>(Endpoints.PRIORITIES);

    return res;
  }
}

export default PriorityApi;
