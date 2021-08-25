export interface BasicPageParams {
  currPage: number;
  pageSize: number;
}

export interface BasicFetchResult<T extends any> {
  items: T[];
  message?: string;
  totalCount: number;
}
