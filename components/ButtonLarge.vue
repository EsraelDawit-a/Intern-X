<template>
  <a href="job_listing.html" :class="`border-btn2  ${ cls }`" >{{ value }}</a>
</template>

<script>
export default {
  name:"ButtonLarge",
  props:{
     value:{
         type:String,
         required:true
     },
     cls:String
  }
}
</script>

<style>

</style>