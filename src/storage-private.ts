import PropertyKeys from './property-keys';

class StoragePrivate {
  static ps = PropertiesService.getUserProperties();

  static get<TData = unknown>(key: PropertyKey) {
    const raw = this.ps.getProperty(key as string);

    if (!raw) return null;

    try {
      return JSON.parse(raw) as TData;
    } catch {
      return raw as TData;
    }
  }

  static getApiKey() {
    return this.get<string>(PropertyKeys.PRIVATE_API_KEY);
  }

  static setApiKey(value: string) {
    return this.ps.setProperty(PropertyKeys.PRIVATE_API_KEY, value);
  }
}

export default StoragePrivate;
