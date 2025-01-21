<template>
  <NuxtLayout/>
  <NuxtPage/>
</template>

<script setup>
// 로그인 상태를 관리하기 위한 composable 사용
const auth = useState('auth', () => false)

// 로그인하지 않은 상태에서 main 페이지 접근 방지
onMounted(() => {
  const route = useRoute()
  if (!auth.value && route.path !== '/login') {
    navigateTo('/login')
  }
})
</script>

<style lang="scss" src="@/assets/scss/app.scss"></style>

