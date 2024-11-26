declare namespace NSBacklog {
  interface Issue {
    actualHours: number | null;
    assignee: User;
    attachments: Attachment[];
    category: Category[];
    created: string;
    createdUser: User;
    customFields: string[];
    description: string;
    dueDate: null | string;
    estimatedHours: number | null;
    externalFileLinks: string[];
    id: number;
    issueKey: string;
    issueType: IssueType;
    keyId: number;
    milestone: Milestone[];
    parentIssueId: number | null;
    priority: Priority;
    projectId: number;
    resolution: null;
    sharedFiles: string[];
    stars: string[];
    startDate: null | string;
    status: Status;
    summary: string;
    updated: string;
    updatedUser: User;
    versions: string[];
  }

  namespace Query {
    interface Issue extends GoogleAppsScript.URL_Fetch.Query {
      /**
       * Assignee ID : assigneeId[](Multiple)
       */
      'assigneeId[]'?: number[];
      /**
       * True to make include Issue with Attachment : attachment
       */
      attachment?: string;
      /**
       * Category ID : categoryId[](Multiple)
       */
      'categoryId[]'?: number[];
      /**
       * number of records to retrieve(1-100) default=20 : count
       */
      count?: number;
      /**
       * Created since (yyyy-MM-dd) : createdSince
       */
      createdSince?: string;
      /**
       * Created until (yyyy-MM-dd) : createdUntil
       */
      createdUntil?: string;
      /**
       * Created User ID : createdUserId[](Multiple)
       */
      'createdUserId[]'?: number[];
      /**
       * Due Date since (yyyy-MM-dd) : dueDateSince
       */
      dueDateSince?: string;
      /**
       * Due Date until (yyyy-MM-dd) : dueDateUntil
       */
      dueDateUntil?: string;
      /**
       * Issue ID : id[](Multiple)
       */
      'id[]'?: number[];
      /**
       * Issue Type ID : issueTypeId[](Multiple)
       */
      'issueTypeId[]'?: number[];
      /**
       * Keyword : keyword
       */
      keyword?: string;
      /**
       * Milestone ID : milestoneId[](Multiple)
       */
      'milestoneId[]'?: number[];
      /**
       * : offset
       */
      offset?: number;
      /**
       * Order of the sort “asc” or “desc” default=“desc” : order
       */
      order?: string;
      /**
       * Subtasking0: All1: Exclude Child Issue2: Child Issue3: Neither Parent Issue nor Child
       * Issue4: Parent Issue : parentChild
       */
      parentChild?: string;
      /**
       * Parent Issue ID : parentIssueId[](Multiple)
       */
      'parentIssueId[]'?: number[];
      /**
       * Priority ID : priorityId[](Multiple)
       */
      'priorityId[]'?: number[];
      /**
       * Project ID : projectId[](Multiple)
       */
      'projectId[]'?: number[];
      /**
       * Resolution ID : resolutionId[](Multiple)
       */
      'resolutionId[]'?: number[];
      /**
       * True to make include Issue with File : sharedFile
       */
      sharedFile?: string;
      /**
       * What to sort results
       * by“issueType”“category”“version”“milestone”“summary”“status”“priority”“attachment”“sharedFile”“created”“createdUser”“updated”“updatedUser”“assignee”“startDate”“dueDate”“estimatedHours”“actualHours”“childIssue”“customField_${id}”
       * : sort
       */
      sort?: string;
      /**
       * Start Date since (yyyy-MM-dd) : startDateSince
       */
      startDateSince?: string;
      /**
       * Start Date until (yyyy-MM-dd) : startDateUntil
       */
      startDateUntil?: string;
      /**
       * Status IDAPI of status list for each project : statusId[](Multiple)
       */
      'statusId[]'?: number[];
      /**
       * Updated since (yyyy-MM-dd) : updatedSince
       */
      updatedSince?: string;
      /**
       * Updated until (yyyy-MM-dd) : updatedUntil
       */
      updatedUntil?: string;
      /**
       * Version ID : versionId[](Multiple)
       */
      'versionId[]'?: number[];
    }
  }

  namespace PostPayload {
    interface Issue extends GoogleAppsScript.URL_Fetch.Payload {
      summary: string;
      priorityId: number;
      projectId: number;
      issueTypeId: number;
      estimatedHours?: number;
      assigneeId?: number;
      attachmentId?: number[];
      categoryId?: number[];
      description?: string;
      /**
       * YYYY-MM-DD
       */
      dueDate?: string;
      milestoneId?: number[];
      notifiedUserId?: number[];
      parentIssueId?: number;
      /**
       * YYYY-MM-DD
       */
      startDate?: string;
      versionId?: number[];
    }
  }

  namespace PatchPayload {
    interface Issue extends GoogleAppsScript.URL_Fetch.Payload {
      summary?: string;
      actualHours?: number;
    }
  }
}
