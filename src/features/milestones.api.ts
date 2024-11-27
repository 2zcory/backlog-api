import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class MilestoneApi {
  static getList(projectId: number) {
    const res = ApiFetch.get<NSBacklog.Milestone[]>(
      r(Endpoints.MILESTONES, { projectId })
    );

    return res;
  }
}

export default MilestoneApi;
