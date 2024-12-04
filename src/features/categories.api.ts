import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class CategoryApi {
  static getList(projectId: number) {
    const res = ApiFetch.get<NSBacklog.Category[]>(
      r(Endpoints.CATEGORIES, { projectId })
    );

    return res;
  }
}

export default CategoryApi;
