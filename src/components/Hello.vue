<template>
  <div	class="hello">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'my first app here'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	padding: 20px;
	

}
</style>
