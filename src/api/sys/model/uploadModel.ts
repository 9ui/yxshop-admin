export interface ResultModel {
  materialId: string;
  materialGroupId: string;
  url: string;
  name: string;
}

export interface UploadApiResult {
  message: string;
  code: number;
  url: ResultModel;
}
