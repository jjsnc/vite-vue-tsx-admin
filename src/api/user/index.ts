
import instance from '@/utils/http' 
import type {
  LatestActivity,
  LoginData,
  LoginRes,
  ProjectItem,
  TeamItem,
  UnitCertification,
  UserInfo,
  BasicInfoModel,
  RoleRes
} from './type'

import type { OKResponse } from '@/types/global'

export type {
  UserInfo,
  LatestActivity,
  LoginData,
  LoginRes,
  ProjectItem,
  TeamItem,
  UnitCertification,
  BasicInfoModel
}

export function getUerInfo() {
  return instance.post<UserInfo>('/api/user/info')
}

export function login(data: LoginData) {
  return instance.post<LoginRes>('/api/user/login', data)
}

export function logout() {
  return instance.post<LoginRes>('/api/user/logout')
}

export function userUploadApi(data: FormData) {
  return instance.post<OKResponse>('/api/user/upload', data)
}

export function queryMyProjectList() {
  return instance.post<ProjectItem[]>('/api/user/my-team/list')
}

export function queryLatestActivity() {
  return instance.post<LatestActivity[]>('/api/user/latest-activity')
}

export function saveUserInfo() {
  return instance.post<OKResponse>('/api/user/save-info')
}

export function queryCertification() {
  return instance.post<UnitCertification>('/api/user/certification')
}

export function requestSwitchRole() {
  return instance.post<RoleRes>('/api/user/switch-user-role')
}
