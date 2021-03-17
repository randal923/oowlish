export interface HttpInterface {
  post: <T>(url: string, body: T) => Promise<T>
  get: <T>(url: string) => Promise<T>
}