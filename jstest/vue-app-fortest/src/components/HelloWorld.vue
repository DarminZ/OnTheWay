<template>
  <div class="hello">
    <button @click="sendRequest">button</button>
  </div>
</template>

<script>
  import Axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    sendRequest () {
      Axios.get('http://localhost:3000/getreferrer', {
        withCredentials: true,
        headers: {
          referer: 'http://localhost:3000',  //源域名
          host: 'localhost:3000'
        },
      }).then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data)
      }).catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
