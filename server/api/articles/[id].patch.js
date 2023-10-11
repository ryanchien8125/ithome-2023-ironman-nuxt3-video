import { pool } from '@/server/utils/db'

export default defineEventHandler(async (event) => {
  if (event.context?.auth?.user?.id !== 1) {
    throw createError({
      statusCode: 401,
      message: '沒有權限'
    })
  }
  const articleId = await getRouterParam(event, 'id')
  const body = await readBody(event)

  const articleRecord = await pool
    .query(
      'UPDATE "article" SET "title" = $1, "content" = $2, "cover" = $3, "updated_at" = NOW() WHERE "id" = $4 RETURNING *;',
      [body.title, body.content, body.cover, articleId]
    )
    .then((result) => {
      if (result.rowCount === 1) {
        return result.rows?.[0]
      }
    })
    .catch((error) => {
      console.error(error)
      throw createError({
        statusCode: 500,
        message: '無法更新文章，請稍候再試'
      })
    })

  if (!articleRecord) {
    throw createError({
      statusCode: 400,
      message: '更新文章失敗，請稍候再試'
    })
  }

  return articleRecord
})
