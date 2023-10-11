export default defineNuxtRouteMiddleware(async () => {
  const userInfo = useState('userInfo')

  if (userInfo.value) {
    if (userInfo.value?.id !== 1) {
      return navigateTo('/')
    }
  } else {
    const user = await $fetch('/api/whoami', {
      headers: useRequestHeaders(['cookie'])
    }).catch((error) => {
      console.error(error)
      return null
    })

    if (user?.id !== 1) {
      return navigateTo('/')
    }
  }
})
