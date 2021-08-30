import { api } from 'API'
import { ILoginRequest } from 'constants/user'

export async function login(data: ILoginRequest) {
  try {
    const response = await api.post(`/login`, data)
    return response.data
  } catch (err) {
    return false
  }
}
