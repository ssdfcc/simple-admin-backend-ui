export interface BasePageReq {
  page: number;
  pageSize: number;
}

export interface BaseListResp<T> {
  data: T[];
  total: number;
}

export interface BaseDataResp<T> {
  code: number;
  msg: string;
  data: T;
}

export interface BaseResp {
  code?: number;
  msg: string;
}

export interface BaseIdReq {
  id: number;
}
