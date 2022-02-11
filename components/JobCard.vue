<template>
  <div class="single-job-items mb-30" >
      <div class="job-items">
          <div class="company-img" >
              <a href="job_details.html" >
                  <img src="assets/img/icon/job-list1.png" alt="" >
                  </a>
                  </div>
                   <div class="job-tittle" >
                       <a href="job_details.html" >
                           <h4 >{{ name }}</h4>
                           </a> 
                           <ul >
                               <li >{{ owner }}</li>
                                <li >
                                    <i class="fas fa-map-marker-alt" >
                                        </i>{{ location }}</li> 
                                        <li > {{ price_range }}</li>
                                        </ul>
                                </div>
                        </div>
                        <div class="items-link f-right" >
                <a href="job_details.html" >{{ time }}</a> 
                <span >{{ posted_time }}</span>
                </div>
                </div>
</template>

<script>
export default {
  name:"JobCard",
  props:{
      name:{ type:String, required:true},
      owner:{ type:String, required:true},
      location:{ type:String, required:true},
      price_range:{ type:String, required:true},
      time:{ type:String, required:true},
      posted_time:{ type:String, required:true},
  }
}
</script>

<style>

</style>