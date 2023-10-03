const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
  const { apiSecret } = runtimeConfig

  console.log(`接收到了一個 Server API 請求: ${event.path}`)
  console.log(`執行時的設定 [apiSecret]: ${apiSecret}`)

  return 'ok'
})
