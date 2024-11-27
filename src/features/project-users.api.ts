import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class ProjectUserApi {
  static getList(projectId: number) {
    const res = ApiFetch.get<NSBacklog.User[]>(
      r(Endpoints.PROJECT_USERS, { projectId })
    );

    return res;
  }
}

export default ProjectUserApi;
