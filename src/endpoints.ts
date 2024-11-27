export const r = (endpoint: string, params: object) => {
  let newEndpoint = endpoint;
  Object.entries(params).forEach(([k, v]) => {
    newEndpoint = endpoint.replace(
      new RegExp(`:${k}`, 'g'),
      (v || '').toString()
    );
  });

  return newEndpoint;
};

/* eslint-disable no-shadow */
enum Endpoints {
  ISSUES = '/api/v2/issues',
  ISSUE = '/api/v2/issues/:key',
  ISSUE_TYPES = '/api/v2/projects/:projectId/issueTypes',
  MILESTONES = '/api/v2/projects/:projectId/versions',
  STATUSES = '/api/v2/projects/:projectId/statuses',
  PROJECT_USERS = '/api/v2/projects/:projectId/users',
  MYSELF = '/api/v2/users/myself',
  PROJECTS = '/api/v2/projects',
  PROJECT_ADMINS = '/api/v2/projects/:projectId/administrators',
}

export default Endpoints;
