const userToken = 'user_token'

export const setStorage = (token) => {
  // 设置token_Storage
  window.localStorage.setItem(userToken, token || {})
}

export const getStorage = () => {
  // 获取token_Storage
  window.localStorage.getItem(userToken)
}

export const delStorage = () => {
  // 删除token_Storage
  window.localStorage.removeItem(userToken)
}
