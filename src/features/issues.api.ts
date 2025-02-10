import ApiFetch from '../api';
import Endpoints, { r } from '../endpoints';

class IssueApi {
  static defaultCount = 100;
  static getList(
    query: NSBacklog.Query.Issue = {},
    acc: NSBacklog.Issue[] = [],
    index = 0
  ): NSBacklog.Issue[] {
    const count = query.count || this.defaultCount;
    const res = ApiFetch.get<NSBacklog.Issue[], NSBacklog.Query.Issue>(
      Endpoints.ISSUES,
      {
        count,
        offset: index * count,
        ...query,
      }
    );

    if (!res) return acc;

    const result = [...acc, ...res];

    if (res.length < count) {
      return result;
    }

    return this.getList(query, result, index + 1);
  }

  static post(payload: NSBacklog.PostPayload.Issue) {
    const res = ApiFetch.post<NSBacklog.Issue>(Endpoints.ISSUES, payload);

    return res;
  }

  static patch(issueKey: string, payload: NSBacklog.PatchPayload.Issue) {
    const res = ApiFetch.patch<NSBacklog.Issue>(
      r(Endpoints.ISSUE, { key: issueKey }),
      payload
    );

    return res;
  }

  static delete(issueKey: string) {
    const res = ApiFetch.delete<NSBacklog.Issue>(
      r(Endpoints.ISSUE, { key: issueKey })
    );

    return res;
  }
}

export default IssueApi;
