import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoByTokenParams,
  GetUserInfoByUserIdModel,
} from './model/userModel';
import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/sys/login',
  getUserInfoByToken = '/sys/getUserInfo',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

/**
 * @description: 用户登陆
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: 请求用户信息
 * @param {params.authorization}  token信息
 */
export function getUserInfoByToken(params: GetUserInfoByTokenParams) {
  return defHttp.get<GetUserInfoByUserIdModel>({
    url: Api.getUserInfoByToken,
    headers: { 'Content-Type': 'application/json', params },
  });
}

export function getPermCodeByUserId(params: GetUserInfoByTokenParams) {
  return defHttp.get<string[]>({
    url: Api.GetPermCodeByUserId,
    params,
  });
}
