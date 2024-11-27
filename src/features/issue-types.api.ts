import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class IssueTypeApi {
  static getList(projectId: number) {
    const res = ApiFetch.get<NSBacklog.IssueType[]>(
      r(Endpoints.ISSUE_TYPES, { projectId })
    );

    return res;
  }
}

export default IssueTypeApi;
