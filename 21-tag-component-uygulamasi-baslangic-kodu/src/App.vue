<template>
  <div class="container">
    <app-tags v-model="tags" color="success"/>
    {{ tags }}
    <hr>
    <app-tags v-model="tags2" />
    {{ tags2 }}
    <hr>
    

  </div>
</template>
  <!-- span ~ etiket -->

<script>
import Tags from "./components/Tags.vue"

export default{
  components:{
    appTags: Tags
  },
  data(){
    return{
      tags: "deneme, test, gkandemir",
      tags2: "deneme, test, gkandemir, klavye, telsiz",

    }
  },
}

</script>

<style scoped>
body{
  font-family: sans-serif;
}

</style>
