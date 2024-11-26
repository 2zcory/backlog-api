type Callback<TParams extends any[] = unknown[], TReturnValue = unknown> = (
  ...args: TParams
) => TReturnValue;
