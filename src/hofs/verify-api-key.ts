const verifyApiKey =
  <TParams extends any[] = unknown[], TReturnValue = unknown>(
    cb: Callback<TParams, TReturnValue>
  ) =>
  (...args: TParams) => {
    const apiKey = StoragePrivate.getApiKey();

    if (!apiKey) {
      const inputApiKey = Browser.inputBox(
        'Backlog Api',
        'Please enter apiKey',
        Browser.Buttons.OK_CANCEL
      );

      if (inputApiKey === 'cancel') {
        SpreadsheetApp.getActiveSpreadsheet().toast(
          'Not enough information t use the service'
        );

        return null;
      }

      // TODO: check with regex pattern or test api
      StoragePrivate.setApiKey(inputApiKey);
    }

    return cb(...args);
  };

export default verifyApiKey;
