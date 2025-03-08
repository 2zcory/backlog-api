import CategoryApi from './features/categories.api';
import CommentApi from './features/comments.api';
import IssueTypeApi from './features/issue-types.api';
import IssueApi from './features/issues.api';
import MilestoneApi from './features/milestones.api';
import PriorityApi from './features/priorities.api';
import ProjectUserApi from './features/project-users.api';
import StatusApi from './features/statuses.api';
import StoragePrivate from './storage-private';
import StoragePublic from './storage-public';

export const BacklogIssueApi = IssueApi;
export const BacklogIssueTypeApi = IssueTypeApi;
export const BacklogMilestoneApi = MilestoneApi;
export const BacklogCommentApi = CommentApi;
export const BacklogStatusApi = StatusApi;
export const BacklogProjectUserApi = ProjectUserApi;
export const BacklogPriorityApi = PriorityApi;
export const BacklogCategoryApi = CategoryApi;

export const BacklogPrivate = StoragePrivate;
export const BacklogPublic = StoragePublic;
