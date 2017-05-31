<template>
  <div >
     <ul>
     	<li ><a href="./index/">主页</a></li>
     	<li><a href="./add/">添加</a></li>
     	<li><a href="/mine/">我的</a></li>
     	</ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
