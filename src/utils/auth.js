const userToken = 'user_token'

export const setStorage = (token) => {
  // 设置token_Storage
  console.log(token)
  return window.localStorage.setItem(userToken, JSON.stringify(token) || {})
}

export const getStorage = () => {
  // 获取token_Storage
  return JSON.parse(window.localStorage.getItem(userToken))
}

export const delStorage = () => {
  // 删除token_Storage
  return window.localStorage.removeItem(userToken)
}
