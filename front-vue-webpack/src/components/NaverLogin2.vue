<template>
  <div id="naverIdLogin"></div>
</template>

<script>
export default {
  mounted() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'TBZyaWSuJPbaBSgKsvTo',
      callbackUrl: 'http://localhost:8081/#/loginCallBackNaver',
      isPopup: false,
      // callbackHandle: true,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60,
      },
    })
    naverLogin.init()
  },
  methods: {},
}
</script>
