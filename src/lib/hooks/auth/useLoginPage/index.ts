import { Form, message } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'
import { useSubmitLogin } from '@/lib/services/api/user-services/authentication/login'
import { useAuth } from '@/lib/stores/auth'

import { LoginForm } from './types'

export const useLoginPage = () => {
  const navigate = useNavigate()
  const { getSearchParamsValue } = useQueryParams()
  const { setToken, setUserDetail } = useAuth()
  const [form] = Form.useForm<LoginForm>()

  const { mutate: submitLogin, isPending: isLoadingSubmitLogin } =
    useSubmitLogin({
      onSuccess: (res) => {
        if (!res?.token) {
          message.warning('user has no access')
          return
        }

        setToken(res.token)
        setUserDetail(res.user_info)
        setTimeout(() => {
          navigate(getSearchParamsValue('redirectTo') ?? '/')
        }, 10)
      },
    })

  const handleLogin = (formValues: LoginForm) => submitLogin(formValues)

  return {
    handleLogin,
    isLoadingSubmitLogin,
    form,
  }
}
