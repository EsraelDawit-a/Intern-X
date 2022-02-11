<template>
  <main>

        <!-- Hero Area Start-->
        <div class="slider-area ">
            <div class="single-slider section-overly slider-height2 d-flex align-items-center" style="background-image:url(assets/img/hero/about.jpg)">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Get your job</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero Area End -->
        <!-- Job List Area Start -->
        <div class="job-listing-area pt-120 pb-120">
            <div class="container">
                <div class="row">
                    <!-- Left content -->
                    <div class="col-xl-3 col-lg-3 col-md-4">
                        <div class="row">
                            <div class="col-12">
                                    <div class="small-section-tittle2 mb-45">
                                    <div class="ion"> <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="20px" height="12px">
                                    <path fill-rule="evenodd"  fill="rgb(27, 207, 107)"
                                        d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"/>
                                    </svg>
                                    </div>
                                    <h4>Filter Jobs</h4>
                                </div>
                            </div>
                        </div>
                        <!-- Job Category Listing start -->
                        <div class="job-category-listing mb-50">
                            <!-- single one -->
                            <div class="single-listing">
                               <div class="small-section-tittle2">
                                     <h4>Job Category</h4>
                               </div>
                                <!-- Select job items start -->
                                <div class=" nice-select select-dr select-job-items2">
                                    <select name="select">
                                        <option value="">All Category</option>
                                        <option value="">Category 1</option>
                                        <option value="">Category 2</option>
                                        <option value="">Category 3</option>
                                        <option value="">Category 4</option>
                                    </select>
                                </div>
                                <!--  Select job items End-->
                                <!-- select-Categories start -->
                                <div class=" select-Categories pt-80 pb-50">
                                    <div class="small-section-tittle2">
                                        <h4>Job Type</h4>
                                    </div>
                                    <label class="container">Full Time
                                        <input type="checkbox" >
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Part Time
                                        <input type="checkbox" checked="checked active">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Remote
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Freelance
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <!-- select-Categories End -->
                            </div>
                            <!-- single two -->
                            <div class="single-listing">
                               <div class="small-section-tittle2">
                                     <h4>Job Location</h4>
                               </div>
                                <!-- Select job items start -->
                                <div class="nice-select select-dr select-job-items2">
                                    <select name="select">
                                        <option value="">Anywhere</option>
                                        <option value="">Category 1</option>
                                        <option value="">Category 2</option>
                                        <option value="">Category 3</option>
                                        <option value="">Category 4</option>
                                    </select>
                                </div>
                                <!--  Select job items End-->
                                <!-- select-Categories start -->
                                <div class="select-Categories pt-80 pb-50">
                                    <div class="small-section-tittle2">
                                        <h4>Experience</h4>
                                    </div>
                                    <label class="container">1-2 Years
                                        <input type="checkbox" >
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">2-3 Years
                                        <input type="checkbox" checked="checked active">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">3-6 Years
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">6-more..
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <!-- select-Categories End -->
                            </div>
                            <!-- single three -->
                            <div class="single-listing">
                                <!-- select-Categories start -->
                                <div class="select-Categories pb-50">
                                    <div class="small-section-tittle2">
                                        <h4>Posted Within</h4>
                                    </div>
                                    <label class="container">Any
                                        <input type="checkbox" >
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Today
                                        <input type="checkbox" checked="checked active">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Last 2 days
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Last 3 days
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Last 5 days
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Last 10 days
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <!-- select-Categories End -->
                            </div>
                            <div class="single-listing">
                                <!-- Range Slider Start -->
                                <aside class="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                                    

                                     <div class="select-Categories pb-50 price">
                                    <div class="small-section-tittle2">
                                        <h4>Price range</h4>
                                    </div>
                                    <label class="container"> Less than 100 Birr
                                        <input type="checkbox" >
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">100 - 500 Birr
                                        <input type="checkbox" checked="checked active">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">500 - 1K
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container"> 1k - 5k 
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container"> 5k - 10k
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="container">10k +
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>

                             <!-- Price Range Selector -->
							<label  class="up-checkbox-label d-inline-flex">
                               
                               
                                            
                              <div  class="d-flex align-items-center">
                                    <div  class = "container">
                                         <input type="checkbox">
                                         <span class="checkmark"></span> 
                                        <input  name="customMin" type="text" 
                                        placeholder="$Min" maxlength="6" class="up-input up-input-sm">
                                        </div> 
                                    
                                        <div class="up-input-group">
                                           <input name="customMax" type="text" placeholder="$ Max" 
                                           maxlength="6" class="up-input up-input-sm">
                                           </div> 
                                           </div>

                                 </label>

                             <!-- End Of   Price Range Selector -->

							
                                </aside>
                              <!-- Range Slider End -->
                            </div>
                        </div>
                        <!-- Job Category Listing End -->
                    </div>
                    <!-- Right content -->
                    <div class="col-xl-9 col-lg-9 col-md-8">
                        <!-- Featured_job_start -->
                        <section class="featured-job-area">
                            <div class="container">
                                <!-- Count of Job list Start -->
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="count-job mb-35">
                                            <span>39, 782 Jobs found</span>
                                            <!-- Select job items start -->
                                            <div class="nice-select select-job-items">
                                                <span>Sort by</span>
                                                <select name="select">
                                                    <option value="">None</option>
                                                    <option value="">job list</option>
                                                    <option value="">job list</option>
                                                    <option value="">job list</option>
                                                </select>
                                            </div>
                                            <!--  Select job items End-->
                                        </div>
                                    </div>
                                </div>
                                <!-- Count of Job list End -->
                                <!-- single-job-content -->
                                 <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                 <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                  <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                 <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                 <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                  <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                 <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                 <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>
                                  <JobCard name="Digital Markete" location="Athens, Greece" time="Full Time" owner="Creative Agency" posted_time="7 hours ago" price_range="$3500 - $4000"></JobCard>


                              </div>
                        </section>
                        <!-- Featured_job_end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Job List Area End -->
        <!--Pagination Start  -->
        <div class="pagination-area pb-115 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item active"><a class="page-link" href="#">01</a></li>
                                    <li class="page-item"><a class="page-link" href="#">02</a></li>
                                    <li class="page-item"><a class="page-link" href="#">03</a></li>
                                <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-right"></span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Pagination End  -->
        
    </main>

</template>

<script>
export default {



layout:"Custom"
}
</script>

<style scoped>

.up-input {

    width: 70px;
    height: 30px;
    margin: 5px 5px;
    border: 1px solid #ddd;
}
.job-category-listing .single-listing .price .container input:checked ~ .checkmark {
  background-color: rgb(14, 170, 61);
  border: 2px solid transparent;
}
.select-dr select{
    border: none;
    background-color: #fff;
    color: #666666;
}
.select-dr select option{
    border: none;
    background-color: #fff;
    color: #666666;
    width: 100%;
}
.select-job-items select{
    border: none;
    background-color: #fff;
    color: #666666;
    width: 100%;
}
</style>