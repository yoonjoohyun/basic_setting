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
const username = ref('')
const password = ref('')
const auth = useState('auth')

const handleLogin = () => {
// 여기서 실제 로그인 로직을 구현합니다
// 예시: 특정 ID/PW 체크
if (username.value === 'crayon' && password.value === '1234') {
    auth.value = true
    navigateTo('/')
} else {
    alert('아이디 또는 비밀번호가 잘못되었습니다.')
}
}
</script>

<style scoped lang="scss" src="@/assets/scss/login.scss"></style>