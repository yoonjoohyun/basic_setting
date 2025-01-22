export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useState('auth')

    // 이미 로그인된 사용자가 로그인 페이지 접근 시 메인으로 리다이렉션
    if (auth.value && to.path === '/login') {
    return navigateTo('/')
    }
}) 