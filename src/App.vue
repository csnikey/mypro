<template>
	<div class="main" id="app">
		<nav class="navbar">
			<li>
				<a  href='#/index/questions'>主页</a>
			</li>
			<li>
				<a href="#/add">添加</a>
			</li>
			<li>
				<a href="#/mine">我的</a>
			</li>
		</nav>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height:100%;
}
.navbar{
	position: fixed;
    bottom: 0;
    width: 100%;
    height: .8rem;
    border-top: 1px solid #e6e6e6;
    line-height: .8rem;
    z-index: 99;
}
.navbar li{
	float: left;
	width: 33.3%;
	text-align: center;
}
.navbar li a{
	
}
</style>
<script>
export default {
  name: 'app'
}
</script>
