<template>
<div class="main_bg">
    <button @click="handleLogout" class="logout_btn">Logout</button>
</div>
</template>
<script setup>

const auth = useState('auth')

// 로그인하지 않은 상태에서 접근 시 로그인 페이지로 리다이렉션
onMounted(() => {
  if (!auth.value) {
    navigateTo('/login')
  }
})

const handleLogout = () => {
  auth.value = false
  navigateTo('/login')
}

</script>

<style lang="scss" scoped src="~/assets/scss/main.scss"></style>