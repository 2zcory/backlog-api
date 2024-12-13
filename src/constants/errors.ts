interface Error {
  code: string;
  description: string;
}

export const ERRORS: { [key: number]: Error } = {
  1: {
    code: 'InternalError',
    description: 'If an error occurs in the API Server.',
  },
  2: {
    code: 'LicenceError',
    description: 'If you call an API that is not available in your licence.',
  },
  7: {
    code: 'InvalidRequestError',
    description: 'If you post a request with invalid parameters.',
  },
};
