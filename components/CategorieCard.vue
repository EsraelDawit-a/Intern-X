<template>
  <div  class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div  class="single-services text-center mb-30">
          <div  class="services-ion">
              <span  :class="cls">
                  </span>
                  </div> 
                  <div  class="services-cap">
                      <h5 >
                          <a  href="job_listing.html">{{ catagorie }}</a>
                          </h5> 
                          <span >({{ count}})</span>
                          </div>
                          </div>
                          </div>
</template>

<script>
export default {
  name:"CategorieCard",
  props:{
      catagorie:String,
      count:String,
      cls:String,

  }
}
</script>

<style>

</style>