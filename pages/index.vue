<template>
<div class="main_bg">
    <button @click="handleLogout" class="logout_btn">Logout</button>
</div>
</template>
<script setup>
// auth 미들웨어 적용
definePageMeta({
    middleware: ['auth']
})

const auth = useState('auth')

const handleLogout = async () => {
    try {
    // 실제 환경에서는 로그아웃 API 호출
        auth.value = false
        await navigateTo('/login')
    } catch (error) {
        console.error('로그아웃 중 오류 발생:', error)
    }
}

</script>

<style lang="scss" scoped src="~/assets/scss/main.scss"></style>