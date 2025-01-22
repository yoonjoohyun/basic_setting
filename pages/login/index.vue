<template>
    <div class="wrap">
        <form @submit.prevent="handleLogin" class="login_box">
            <div class="logo_box">
                <img src="~/assets/images/logo.png"/>
            </div>
            <input class="id input_box" v-model="username" type="text" placeholder="ID" required/>
            <input class="password input_box" v-model="password" type="password" placeholder="PASSWORD" required/>
            <button type="submit" class="login_btn">로그인</button>
        </form>
    </div>
</template>

<script setup>
// 이미 로그인된 사용자는 메인 페이지로 리다이렉션
definePageMeta({
  middleware: ['guest']
})

const username = ref('')
const password = ref('')
const auth = useState('auth')

const handleLogin = async () => {
    try {
        // 실제 환경에서는 API 호출로 대체
        if (username.value === 'crayon' && password.value === '1234') {
            auth.value = true
            navigateTo('/') // await 제거
            return // 성공 시 함수 종료
        }
        // 로그인 실패 시
        throw new Error('Invalid credentials')
    } catch (error) {
        alert('아이디 또는 비밀번호가 잘못되었습니다.')
    }
}
</script>

<style scoped lang="scss" src="@/assets/scss/login.scss"></style>