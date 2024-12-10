import PropertyKeys from './property-keys';

class StoragePublic {
  static ps = PropertiesService.getScriptProperties();

  static get<TData = unknown>(key: PropertyKey) {
    const raw = this.ps.getProperty(key as string);

    if (!raw) return null;

    try {
      return JSON.parse(raw) as TData;
    } catch {
      return raw as TData;
    }
  }

  static getBaseUrl() {
    return this.get<string>(PropertyKeys.PRIVATE_BASE_URL);
  }

  static setBaseUrl(value: string) {
    return this.ps.setProperty(PropertyKeys.PRIVATE_BASE_URL, value);
  }
}

export default StoragePublic;
