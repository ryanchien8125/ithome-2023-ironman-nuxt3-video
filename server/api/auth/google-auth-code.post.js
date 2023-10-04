import { OAuth2Client } from 'google-auth-library'

const runtimeConfig = useRuntimeConfig()
const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public
const { googleClientSecret: GOOGLE_CLIENT_SECRET } = runtimeConfig

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const oauth2Client = new OAuth2Client({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    redirectUri: 'http://localhost:3000'
  })

  const { tokens } = await oauth2Client.getToken(body.authCode)

  oauth2Client.setCredentials({ access_token: tokens.access_token })

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then((response) => response.data)
    .catch(() => null)

  await oauth2Client.revokeCredentials()

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token'
    })
  }

  return {
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified
  }
})
