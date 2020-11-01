<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Request from 'request'
// export default {
//   name: 'App',
//   components: {
//     HelloWorld,
//   },
//   mounted() {
//     Request('http://localhost:8080/api/main', function (error, response, body) {
//       window.console.log('error', error)
//       window.console.log('response', response && response.statusCode)
//       window.console.log('body', body)
//     })
//   },
// }
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
