<template>
<span class="tag" :class="selectedTheme">
    <span class="content">{{ tag }}</span>
    <span class="close" @click="$emit('removeOneTagEvent', index)">X</span>
</span>
</template>


<script>
export default{
    props: ["tag", "index", "tagColor"],
    data(){
      return{
        selectedTheme: null,
      }
    },
    created(){
      this.selectedTheme = this.tagColor
    },
}

</script>


<style scoped>
.primary{
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}
.tag{
  padding: 10px; 
  cursor: default;
  margin-right: 10px;
  border-radius:5px;
}
.tag * {
  font-size:14px;
}
.tag.close{
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
}
</style>
