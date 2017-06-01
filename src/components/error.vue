<template>
 
    <h1 class="m-error">{{ msg }}</h1>
  

</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      msg: '页面找不到了'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-error{
	text-align: center;

}
</style>
