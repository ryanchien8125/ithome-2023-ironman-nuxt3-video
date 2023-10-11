import jwt from 'jsonwebtoken'

const urls = [
  {
    path: '/api/articles',
    method: 'POST'
  },
  {
    path: /^\/api\/articles\/(.*)($|\?.*|#.*)/,
    method: 'DELETE'
  },
  {
    path: /^\/api\/articles\/(.*)($|\?.*|#.*)/,
    method: 'PATCH'
  }
]

export default defineEventHandler((event) => {
  const requireVerify = urls.some((apiUrl) => {
    if (event.method === apiUrl.method) {
      if (apiUrl.path instanceof RegExp) {
        return apiUrl.path.test(event.path)
      }

      return event.path === apiUrl.path
    }

    return false
  })

  if (!requireVerify) {
    return
  }
  const jwtToken = getCookie(event, 'access_token')

  if (jwtToken) {
    try {
      const { data: user } = jwt.verify(jwtToken, 'JWT_SIGN_SECRET_PLEASE_REPLACE_WITH_YOUR_KEY')

      event.context.auth = {
        user
      }
    } catch (error) {
      console.error(error)
    }
  }
})
