import { pool } from '@/server/utils/db'

export default defineEventHandler(async (event) => {
  if (event.context?.auth?.user?.id !== 1) {
    throw createError({
      statusCode: 401,
      message: '沒有權限'
    })
  }
  const articleId = getRouterParam(event, 'id')

  const result = await pool
    .query('DELETE FROM "article" WHERE "id" = $1;', [articleId])
    .catch((error) => {
      console.error(error)
      throw createError({
        statusCode: 500,
        message: '無法刪除文章，請稍候再試'
      })
    })

  if (result.rowCount !== 1) {
    throw createError({
      statusCode: 400,
      message: '刪除文章失敗，請稍候再試'
    })
  }

  return {
    message: '刪除文章成功'
  }
})
