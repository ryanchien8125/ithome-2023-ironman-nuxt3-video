import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name === 'Ryan') {
    throw createError({
      statusCode: 400,
      statusMessage: '登入失敗'
    })
  }

  const jwtTokenPayload = {
    id: 1,
    nickname: 'Ryan',
    email: 'ryanchien8125@gmail.com'
  }

  const maxAge = 60 * 60 * 24 * 7
  const expires = Math.floor(Date.now() / 1000) + maxAge

  const jwtToken = jwt.sign(
    {
      exp: expires,
      data: jwtTokenPayload
    },
    'JWT_SIGN_SECRET_PLEASE_REPLACE_WITH_YOUR_KEY'
  )

  setCookie(event, 'access_token', jwtToken, {
    maxAge,
    expires: new Date(expires * 1000),
    secure: true,
    httpOnly: true,
    path: '/'
  })

  return '登入成功'
})
