<template>
<div>
     <header>
        <!-- Header Start -->
       <div class="header-area header-transparrent">
           <div class="headder-top header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-2">
                            <!-- Logo -->
                            <div class="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" width="200px"></a>
                            </div>  
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="menu-wrapper">
                                <!-- Main-menu -->
                                <div class="main-menu">
                                    <nav class="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li> 
                                                <NuxtLink to="/"> Home</NuxtLink>
                                                
                                                </li>
                                   
                                            <li> <NuxtLink to="/jobs"> Find a Jobs  </NuxtLink></li>
                                            <li> <NuxtLink to="/"> About </NuxtLink></li>
                                            <li><a href="#">Page</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Elements</a></li>
                                                    <li> <NuxtLink to="/"> job Details </NuxtLink></li>
                                                </ul>
                                            </li>
                                            <li> <NuxtLink to= "/contact" > Contact </NuxtLink> </li>
                                        </ul>
                                    </nav>
                                </div>          
                                <!-- Header-btn -->
                                <div class="header-btn d-none f-right d-lg-block">


                                    <Button cls="head-btn1" value="Register"/>

                                    <NuxtLink to="login"> 

                                    <Button cls="head-btn2" value="Login"/>
                                    </NuxtLink>
                                    
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Menu -->
                       <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"><div class="slicknav_menu">
                                <a href="#" aria-haspopup="true" role="button" tabindex="0" @click="dropdown" 
                                :class="`slicknav_btn ${drop_class ? 'slicknav_open': 'slicknav_closed' }`" style="outline: currentcolor none medium;">
                                    <span class="slicknav_menutxt">MENU</span>
                                    <span class="slicknav_icon">
                                        <span class="slicknav_icon-bar"></span>
                                        <span class="slicknav_icon-bar"></span>
                                        <span class="slicknav_icon-bar"></span>
                                        </span>
                                        
                                </a>
                                
                                <ul class="slicknav_nav slicknav_hidden" :style="`display: ${st1 ? 'block': 'none' };`" aria-hidden="true" role="menu">
                                            <li><a href="index.html" role="menuitem" tabindex="-1">Home</a></li>
                                            <li><a href="job_listing.html" role="menuitem" tabindex="-1">Find a Jobs </a></li>
                                            <li><a href="about.html" role="menuitem" tabindex="-1">About</a></li>

                                            <li :class="`${sub_drop_class ? 'slicknav_open': 'slicknav_closed' } slicknav_parent`">
                                                <a href="#" @click="subdropdown" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: currentcolor none medium;">
                                                <a href="#" tabindex="-1">Page</a>
                                                <span class="slicknav_arrow">+</span></a>
                                                
                                                <ul class="submenu slicknav_hidden" role="menu" :style="`display: ${st2 ? 'block': 'none' };`" aria-hidden="true">
                                                    <li><a href="blog.html" role="menuitem" tabindex="-1">Blog</a></li>
                                                    <li><a href="single-blog.html" role="menuitem" tabindex="-1">Blog Details</a></li>
                                                    <li><a href="elements.html" role="menuitem" tabindex="-1">Elements</a></li>
                                                    <li><a href="job_details.html" role="menuitem" tabindex="-1">job Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                                        </ul></div></div>
                        </div>
                        <!-- End of Mobile Menue -->
                    </div>
                </div>
           </div>
       </div>
        <!-- Header End -->
    </header>

    <!-- Nuxt renders here -->
  <Nuxt />

  <!-- Footer Here -->
  <footer>
        <!-- Footer Start-->
        <div class="footer-area footer-bg footer-padding">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                       <div class="single-footer-caption mb-50">
                         <div class="single-footer-caption mb-30">
                             <div class="footer-tittle">
                                 <h4>About Us</h4>
                                 <div class="footer-pera">
                                     <p>Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
                                </div>
                             </div>
                         </div>

                       </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>
                                    <p>Address :Your address goes
                                        here, your demo address.</p>
                                    </li>
                                    <li><a href="#">Phone : +8880 44338899</a></li>
                                    <li><a href="#">Email : info@colorlib.com</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Important Link</h4>
                                <ul>
                                    <li><a href="#"> View Project</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Testimonial</a></li>
                                    <li><a href="#">Proparties</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Newsletter</h4>
                                <div class="footer-pera footer-pera2">
                                 <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                             </div>
                             <!-- Form -->
                             <div class="footer-form" >
                                 <div id="mc_embed_signup">
                                     <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                     method="get" class="subscribe_form relative mail_part">
                                         <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                         class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                         onblur="this.placeholder = ' Email Address '">
                                         <div class="form-icon">
                                             <button type="submit" name="submit" id="newsletter-submit"
                                             class="email_icon newsletter-submit button-contactForm"><img src="assets/img/icon/form.png" alt=""></button>
                                         </div>
                                         <div class="mt-10 info"></div>
                                     </form>
                                 </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
               <!--  -->
               <div class="row footer-wejed justify-content-between">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <!-- logo -->
                        <div class="footer-logo mb-20">
                        <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div class="footer-tittle-bottom">
                        <span>5000+</span>
                        <p>Talented Hunter</p>
                    </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <div class="footer-tittle-bottom">
                            <span>451</span>
                            <p>Talented Hunter</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                        <!-- Footer Bottom Tittle -->
                        <div class="footer-tittle-bottom">
                            <span>568</span>
                            <p>Talented Hunter</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <!-- footer-bottom area -->
        <div class="footer-bottom-area footer-bg">
            <div class="container">
                <div class="footer-border">
                     <div class="row d-flex justify-content-between align-items-center">
                         <div class="col-xl-10 col-lg-10 ">
                             <div class="footer-copy-right">
                                 <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>
      
      <!-- document.write(new Date().getFullYear()); -->
      
      </script> All rights reserved | <i class="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Intern-X</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                             </div>
                         </div>
                         <div class="col-xl-2 col-lg-2">
                             <div class="footer-social f-right">
                                 <a href="#"><i class="fab fa-facebook-f"></i></a>
                                 <a href="#"><i class="fab fa-twitter"></i></a>
                                 <a href="#"><i class="fas fa-globe"></i></a>
                                 <a href="#"><i class="fab fa-behance"></i></a>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
        <!-- Footer End-->
    </footer>

</div>
</template>


<style scoped>
.slicknav_menu .slicknav_nav a:hover {
  background: transparent;
  color: #fb246a;
}
.slicknav_menu .slicknav_icon-bar {
  background-color: #fb246a !important;
}

</style>
<script>
export default {
    head(){

        return{

            script:[
                       {src:"/assets/js/main.js"},

            ]
        }
    },

    data(){
        return{
            drop_class:false,
            st1:false,
            sub_drop_class:false,
            st2:false


        }
    },

    methods:{
        dropdown(){

            this.drop_class = !this.drop_class
            this.st1 = !this.st1
        },
        subdropdown(){

            this.sub_drop_class = !this.sub_drop_class
            this.st2= !this.st2
        }
    }
}
</script>
