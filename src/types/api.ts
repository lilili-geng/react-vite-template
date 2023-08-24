export interface ResponseData {
  code: number
  data?: Object
}
export interface LoginAPi extends ResponseData {
  data?: {
    code: number
    account: String
  }
}