export class LocalStorageUtil {
  static getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key)
    if (!item) {
      return null
    }
    return JSON.parse(item) as T
  }

  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key)
  }
}
