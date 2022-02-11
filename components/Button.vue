<template>
       <a href="#" :class="`btn ${cls}`">{{ value }}</a>
</template>

<script>

export default {
 name:"Button",
 props:{
     cls:{
         type:String,
         required:true
     },
     value:{
         type:String,
         required:true
     }
 }
}
</script>

<style>

</style>