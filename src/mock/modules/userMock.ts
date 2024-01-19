import Mock from 'mockjs'
import { isLogin } from '@/utils/token'
import setupMock, { successResponseWrap, failResponseWrap } from '@/mock/setupMock'
import type { GetParams } from '@/types/global'
import { ResCode } from '@/types/constants'

setupMock({
  setup() {
    // 登录
    Mock.mock(new RegExp('/api/user/login'), (params: GetParams) => {
      const { username, password } = JSON.parse(params.body)
      if (!username) {
        return failResponseWrap(null, '用户名不能为空', ResCode.error)
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', ResCode.error)
      }
      if (username === 'admin' && password === 'admin') {
        window.localStorage.setItem('data-base-role', 'admin')
        return successResponseWrap({
          token: '12345'
        })
      }
      if (username === 'user' && password === 'user') {
        window.localStorage.setItem('data-base-role', 'user')
        return successResponseWrap({
          token: '54321'
        })
      }
      return failResponseWrap(null, '账号或者密码错误', ResCode.error)
    })
  }
})
