<template>
  <div>
    <vtag v-model="tags" color="danger"></vtag>  
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: "kablosuzkedi,videosinif,pogaca,vuejs,codeigniter"
    }
  }
}
</script>

<style scoped>
body{
  font-family:sans-serif;
}
</style>