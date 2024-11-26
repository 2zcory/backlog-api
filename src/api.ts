import verifyApiKey from './hofs/verify-api-key';
import verifyBaseUrl from './hofs/verify-base-url';
import StoragePrivate from './storage-private';

const fetch = verifyBaseUrl(
  (
    endpoint: string,
    params?: Partial<GoogleAppsScript.URL_Fetch.RequestOptions>
  ) => {
    const baseUrl = StoragePrivate.getBaseUrl();

    // TODO: Check config.baseUrl
    return UrlFetchApp.fetch(`${baseUrl}${endpoint}`, {
      muteHttpExceptions: true,
      ...params,
    });
  }
);

const parseQuery = verifyApiKey((query?: GoogleAppsScript.URL_Fetch.Query) => {
  // TODO: Check ApiKey
  const apiKey = StoragePrivate.getApiKey();
  const result = `?$apiKey=${apiKey}`;

  if (!query) return result;
  const queryString = Object.entries(query)
    .map((entry) => {
      if (entry[0].includes('[]')) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (query[entry[0]] as any[])
          .map((value) => `${entry[0]}=${value}`)
          .join('&');
      }
      return entry[1] !== null && entry[1] !== undefined
        ? `${entry[0]}=${entry[1]}`
        : '';
    })
    .join('&');
  return result + queryString;
});

const parseResponse = <TDataRes = unknown>(
  res: GoogleAppsScript.URL_Fetch.HTTPResponse | null
) => {
  if (!res) return res;

  const data: TDataRes = JSON.parse(res.getContentText());

  const { errors } = data as GoogleAppsScript.URL_Fetch.ErrorResponse;

  if (errors?.[0]) {
    Browser.msgBox(`${errors[0].code} - ${errors[0].message}`);
    // TODO: handle errors
    return null;
  }

  return data;
};

class ApiFetch {
  static get<
    TResData = unknown,
    TQuery extends
      GoogleAppsScript.URL_Fetch.Query = GoogleAppsScript.URL_Fetch.Query,
  >(endpoint: string, query: TQuery) {
    const raw = fetch(`${endpoint}${parseQuery(query)}`);

    return parseResponse<TResData>(raw);
  }

  static post<
    TResData = unknown,
    TPayload extends
      GoogleAppsScript.URL_Fetch.Payload = GoogleAppsScript.URL_Fetch.Payload,
  >(endpoint: string, payload: TPayload) {
    const raw = fetch(`${endpoint}${parseQuery()}`, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
    });

    return parseResponse<TResData>(raw);
  }

  static patch<
    TResData = unknown,
    TPayload extends
      GoogleAppsScript.URL_Fetch.Payload = GoogleAppsScript.URL_Fetch.Payload,
  >(endpoint: string, payload: TPayload) {
    const raw = fetch(`${endpoint}${parseQuery()}`, {
      method: 'patch',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
    });

    return parseResponse<TResData>(raw);
  }
}

export default ApiFetch;
