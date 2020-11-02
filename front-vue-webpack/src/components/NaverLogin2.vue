<template>
  <div id="naverLogin"></div>
</template>

<script>
import NaverLogin from 'vue-naver-login'

export default {
  name: 'App',
  components: {
    NaverLogin,
  },
  head: {
    script: [
      { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js' },
    ],
  },
  mounted() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'TBZyaWSuJPbaBSgKsvTo',
      callbackUrl: 'http://localhost:8080/#/loginNaverCB',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60,
      },
    })
    naverLogin.init()
    naverLogin.getLoginStatus(function (status) {
      if (status) {
        /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
        const email = naverLogin.user.getEmail()
        const name = naverLogin.user.name()
        if (email === undefined || email === null) {
          alert('이메일은 필수정보입니다. 정보제공을 동의해주세요.')
          /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
          naverLogin.reprompt()
          return false
        }
        if (name === undefined || name === null) {
          alert('이름은 필수정보입니다. 정보제공을 동의해주세요.')
          naverLogin.reprompt()
          return false
        }
      } else {
        console.log('callback 처리에 실패하였습니다.')
      }
      this.$router.push({ name: 'login2' })
    })
  },
  methods: {},
}
</script>
