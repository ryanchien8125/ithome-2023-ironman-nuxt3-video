import { pool } from '@/server/utils/db'

export default defineEventHandler(async (event) => {
  if (event.context?.auth?.user?.id !== 1) {
    throw createError({
      statusCode: 401,
      message: '沒有權限'
    })
  }
  const body = await readBody(event)

  const articleRecord = await pool
    .query('INSERT INTO "article" ("title", "content", "cover") VALUES ($1, $2, $3) RETURNING *;', [
      body.title,
      body.content,
      body.cover
    ])
    .then((result) => {
      if (result.rowCount === 1) {
        return result.rows?.[0]
      }
    })
    .catch((error) => {
      console.error(error)
      throw createError({
        statusCode: 500,
        message: '無法建立文章，請稍候再試'
      })
    })

  if (!articleRecord) {
    throw createError({
      statusCode: 400,
      message: '建立文章失敗，請稍候再試'
    })
  }

  return articleRecord
})
