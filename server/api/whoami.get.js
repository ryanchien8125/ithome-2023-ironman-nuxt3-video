import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
  const jwtToken = getCookie(event, 'access_token')

  try {
    const { data: userInfo } = jwt.verify(jwtToken, 'JWT_SIGN_SECRET_PLEASE_REPLACE_WITH_YOUR_KEY')

    return {
      id: userInfo.id,
      nickname: userInfo.nickname,
      email: userInfo.email
    }
  } catch (e) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})
