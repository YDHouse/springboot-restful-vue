<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'TBZyaWSuJPbaBSgKsvTo',
      callbackUrl: 'http://localhost:8080/loginCallBackNaver',
      isPopup: true,
      callbackHandle: false,
    })
    naverLogin.init()
    naverLogin.getLoginStatus((status) => {
      if (status) {
        /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
        const name = naverLogin.user.getName()
        const email = naverLogin.user.getEmail()
        console.log('name :>> ', name)
        console.log('email :>> ', email)

        if (name === undefined || name === null) {
          alert('이름은 필수정보입니다. 정보제공을 동의해주세요.')
          /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
          naverLogin.reprompt()
          return false
        }
        if (email === undefined || email === null) {
          alert('이메일은 필수정보입니다. 정보제공을 동의해주세요.')
          naverLogin.reprompt()
          return false
        }
      } else {
        console.log('callback 처리에 실패하였습니다.')
      }
      // 페이지 이동
      //window.opener.$router.push({ name: '/login' })
      //window.opener.$router.push('/login')
      window.opener.location.reload()
      window.close()
    })
  },
}
</script>
