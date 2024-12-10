import StoragePublic from '../storage-public';

const verifyBaseUrl =
  <TParams extends any[] = unknown[], TReturnValue = unknown>(
    cb: Callback<TParams, TReturnValue>
  ) =>
  (...args: TParams) => {
    const baseUrl = StoragePublic.getBaseUrl();

    if (!baseUrl) {
      const inputBaseUrl = Browser.inputBox(
        'Backlog Api',
        'Please enter baseUrl',
        Browser.Buttons.OK_CANCEL
      );

      if (inputBaseUrl === 'cancel') {
        SpreadsheetApp.getActiveSpreadsheet().toast(
          'Not enough information to use the service'
        );

        return null;
      }

      // TODO: check with regex pattern
      StoragePublic.setBaseUrl(inputBaseUrl.replace(/\/*$/, ''));
    }

    return cb(...args);
  };

export default verifyBaseUrl;
