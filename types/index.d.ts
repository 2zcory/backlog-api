declare namespace GoogleAppsScript {
  namespace URL_Fetch {
    type method = 'get' | 'post' | 'patch' | 'put' | 'delete';

    type QueryValue =
      | number
      | string
      | number[]
      | string[]
      | (number | string)[];

    interface Query {
      [key: string]: QueryValue;
    }

    interface Options {}
  }
}
