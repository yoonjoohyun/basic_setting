export default defineNuxtRouteMiddleware((to) => {
    const auth = useState('auth')
    
    // 로그인 페이지는 예외 처리
    if (to.path === '/login') {
        // 이미 로그인된 사용자가 로그인 페이지 접근 시 메인으로 리다이렉션
        if (auth.value) {
            return navigateTo('/')
        }
        return // 로그인 페이지는 자유롭게 접근 가능
    }

    // 그 외 모든 페이지는 인증 필요
    if (!auth.value) {
        return navigateTo('/login')
    }
}) 