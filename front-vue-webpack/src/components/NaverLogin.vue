<template>
  <div id="appNaver">
    <NaverLogin
      client-id="TBZyaWSuJPbaBSgKsvTo"
      callback-url="${window.location.origin}/loginCallBackNaver"
      v-bind:is-popup="false"
      v-bind:button-type="3"
      v-bind:button-height="50"
      button-color="white"
      :callbackFunction="callbackFunction"
    />
  </div>
</template>

<script>
import NaverLogin from 'vue-naver-login'

let callbackFunction = (status) => {
  if (status) {
    /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
    var email = naverLogin.user.getEmail()
    if (email === undefined || email === null) {
      alert('이메일은 필수정보입니다. 정보제공을 동의해주세요.')
      /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
      naverLogin.reprompt()
      return false
    }
  } else {
    console.log('callback 처리에 실패하였습니다.')
  }
}

export default {
  name: 'App',
  components: {
    NaverLogin,
  },
  methods: {
    callbackFunction,
  },
}
</script>
