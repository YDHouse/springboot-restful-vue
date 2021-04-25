<template>
  <div id="naverIdLogin"></div>
</template>

<script>
export default {
  mounted() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'TBZyaWSuJPbaBSgKsvTo',
      callbackUrl: 'http://localhost:8080/loginCallBackNaver',
      isPopup: true,
      callbackHandle: true,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60,
      },
    })
    naverLogin.init()
    naverLogin.getLoginStatus(function (status) {
      if (status) {
        const email = naverLogin.user.getEmail()
        const name = naverLogin.user.getName()
        console.log('object :>> ', name, ' ~~~>>> ', email)
      } else {
        console.log('AccessToken이 올바르지 않습니다.')
      }
    })
  },
}
</script>
