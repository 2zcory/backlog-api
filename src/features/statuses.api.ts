import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class StatusApi {
  static getList(projectId: number) {
    const res = ApiFetch.get<NSBacklog.Status[]>(
      r(Endpoints.STATUSES, { projectId })
    );

    return res;
  }
}

export default StatusApi;
