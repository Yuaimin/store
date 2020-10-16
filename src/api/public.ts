import { post } from '@/plugins/axios'

interface SigninParams {
  mobile: number
  password: string
}

export const signin = (data: SigninParams) => post('/api/signin', data)
