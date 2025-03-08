import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class CommentApi {
  static getList(
    issueIdOrKey: string,
    query: NSBacklog.Query.Comment = { count: 100 }
  ): NSBacklog.Comment[] {
    const res = ApiFetch.get<NSBacklog.Comment[], NSBacklog.Query.Comment>(
      r(Endpoints.COMMENTS, { issueIdOrKey }),
      query
    );

    if (!res) return [];

    return res;
  }
}

export default CommentApi;
