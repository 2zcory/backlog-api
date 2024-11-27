import IssueTypeApi from './features/issue-types.api';
import IssueApi from './features/issues.api';
import MilestoneApi from './features/milestones.api';
import ProjectUserApi from './features/project-users.api';
import StatusApi from './features/statuses.api';
import StoragePrivate from './storage-private';

export const BacklogIssueApi = IssueApi;
export const BacklogIssueTypeApi = IssueTypeApi;
export const BacklogMilestoneApi = MilestoneApi;
export const BacklogStatusApi = StatusApi;
export const BacklogProjectUserApi = ProjectUserApi;

export const BacklogPrivate = StoragePrivate;
