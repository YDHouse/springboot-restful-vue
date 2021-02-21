<template>
  <div id="app">
    <h4>{{ msg }}</h4>
    <button @click="changeMsg">버튼</button>
    <h4>{{ updateMsg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'TestVue2',
  data: function () {
    return {
      msg: '기본 메시지',
      updateMsg: '변경 전',
    }
  },
  watch: {
    msg(newVal, oldVal) {
      console.log('newMsg :>> ', newVal)
      console.log('oldMsg :>> ', oldVal)
      this.updateMsg = '변경 후'
    },
  },
  methods: {
    changeMsg() {
      this.msg = '메시지 변경해요'
    },
  },
}
</script>
