import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class CategoryApi {
  static getList(projectId: number) {
    const res = ApiFetch.get<NSBacklog.Category[]>(
      r(Endpoints.CATEGORIES, { projectId })
    );

    return res;
  }

  static post(projectId: number, payload: NSBacklog.PostPayload.Category) {
    const res = ApiFetch.post<NSBacklog.Category>(
      r(Endpoints.CATEGORIES, { projectId }),
      payload
    );

    return res;
  }
}

export default CategoryApi;
