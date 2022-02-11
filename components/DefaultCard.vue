<template>
  <div class="col-lg-4 col-md-6" >
      <div class="single-process text-center mb-30" >
          <div class="process-ion" >
              <span :class="cls" ></span>
              </div> 
              <div class="process-cap" >
                  <h5 >{{ title }}</h5> 
                  <p >{{ value }}</p>
                      </div>
                      </div>
                      </div>
</template>

<script>
export default {
  name:"DefaultCard",
  props:{
      title:String,
      value:String,
      cls:String
  }
}
</script>

<style>

</style>