<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>===============</h2>
    <h4 v-html="loginNaver"></h4>
    <h4 v-html="testVue"></h4>
    <h4 v-html="testVue2"></h4>
    <p v-for="user in users" :key="user.name">
      {{ user.name }} : {{ user.phone }}
    </p>
    <h1 id="str">{{ strs }}</h1>
    <h4 id="testMapList">{{ testMapList }}</h4>
    <h4>{{ test1 }}</h4>
    <h4>{{ test2 }}</h4>
    <h4>{{ test3 }}</h4>
    <h4>{{ test4 }}</h4>

    <p v-for="myList in myLists" :key="myList.name">
      {{ myList.name }} : {{ myList.age }}
    </p>

    <table border="1">
      <th>이름</th>
      <th>나이</th>
      <tr v-for="myList in myLists" :key="myList.name">
        <td>{{ myList.name }}</td>
        <td>{{ myList.age }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '메인페이지',
      loginNaver: '<a href="http://localhost:8080/login">네이버 간편로그인</a>',
      testVue: '<a href="http://localhost:8080/testVue">뷰 테스트</a>',
      testVue2: '<a href="http://localhost:8080/testVue2">뷰 테스트2</a>',
      strs: '',
      testMapList: '',
      test1: '',
      test2: '',
      test3: '',
      test4: '',
      users: '',
      myLists: '',
    }
  },
  created() {
    this.$http.get('/api/users').then((resp) => {
      const resultMsg = resp.data.message
      if (resultMsg === 'ok') {
        console.log('msg :>> ', resultMsg)
      } else {
        console.log('msg :>> ng')
      }
      this.users = resp.data.response
    })
    this.$http.get('/api/users/main').then((resp) => {
      this.strs = resp.data
    })
    this.$http.get('/api/users/testMapList?checkValue=ok').then((resp) => {
      let testMapList = resp.data.result
      console.log('testMapList :>> ', testMapList)
      this.testMapList = testMapList
      this.test1 = testMapList[0].name
      this.test2 = testMapList[0].age
      this.test3 = testMapList[1].name
      this.test4 = testMapList[1].age
      this.myLists = testMapList
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
