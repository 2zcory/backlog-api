declare namespace GoogleAppsScript {
  namespace URL_Fetch {
    type Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

    type ContentType = 'application/json';

    type QueryValue =
      | number
      | string
      | number[]
      | string[]
      | (number | string)[];

    interface Query {
      [key: string]: QueryValue;
    }

    interface Payload {
      [key: string]: unknown;
    }

    interface RequestHeaders {}

    interface RequestOptions {
      method: Method;
      payload: string;
      contentType: ContentType;
      headers: RequestHeaders;
      muteHttpExceptions: boolean;
    }

    interface Error {
      message: string;
      code: number;
    }

    interface ErrorResponse {
      errors: Error[];
    }
  }
}
