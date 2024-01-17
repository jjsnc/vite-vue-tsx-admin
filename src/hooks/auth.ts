import { login, logout, type LoginData } from '@/api/user'

import { useUserStore } from '@/stores'

import { setToken, clearToken } from '@/utils/token'
