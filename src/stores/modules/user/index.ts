import { defineStore } from 'pinia'

import { getUerInfo, requestSwitchRole, type UserInfo } from '@/api/user'

export default defineStore('userStore', {
  state: (): UserInfo => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: ''
  }),

  actions: {
    setUserInfo(payload: Partial<UserInfo>) {
      this.$patch(payload)
    },
    resetUserInfo() {
      this.$reset()
    },
    async switchRoles() {
      try {
        const res = await requestSwitchRole()
        const role = res.data.role
        this.role = role
      } catch (e) {
        /* empty */
      }
    },
    async refreshUserInfo() {
      const res = await getUerInfo()
      this.setUserInfo(res.data)
    }
  }
})
