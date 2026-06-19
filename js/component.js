/**
 * Centralized JS Components for Toppers Guru
 * Defines Topbar, Navbar, and Footer layouts as ES6 classes.
 */



class Navbar {
  constructor(activePage = 'home') {
    this.activePage = activePage;
  }

  render() {
    const active = (page) => this.activePage === page ? 'active' : '';
    const ariaCurrent = (page) => this.activePage === page ? 'aria-current="page"' : '';

    return `
      <nav class="navbar navbar-expand-xl navbar-custom navbar-transparent fixed-top">
        <div class="container px-3 px-md-4">
          <!-- Dual Logo Branding -->
          <a class="brand-wrapper" href="index.html">
            <div class="brand-logos">
              <img src="Images/Logo.png" alt="Sanjeevni Shield Logo" />
            </div>
            <div class="brand-texts">
              <span class="brand-title">Toppers Guru</span>
              <span class="brand-tagline">Bhoolna Bhool Jaoge</span>
              <span class="brand-badge"><i class="fa-solid fa-certificate me-1"></i>ISO 21001:2018 Certified</span>
            </div>
          </a>

          <!-- Mobile Toggle Button -->
          <button class="navbar-toggler border-0 ms-auto me-2" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Nav Menu and Controls -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-xl-0 gap-1 gap-xl-0">
              <li class="nav-item">
                <a class="nav-link ${active('home')}" ${ariaCurrent('home')} href="index.html" data-i18n="nav.home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${active('courses')}" ${ariaCurrent('courses')} href="courses.html" data-i18n="nav.courses">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${active('regular-courses')}" ${ariaCurrent('regular-courses')} href="regular-courses.html" data-i18n="nav.regularCourses">Regular Course</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${active('blog')}" ${ariaCurrent('blog')} href="blog.html" data-i18n="nav.blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${active('about')}" ${ariaCurrent('about')} href="about.html" data-i18n="nav.about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${active('contact')}" ${ariaCurrent('contact')} href="contact.html" data-i18n="nav.contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${active('gallery')}" ${ariaCurrent('gallery')} href="gallery.html" data-i18n="nav.gallery">Gallery</a>
              </li>
            </ul>

            <div class="d-flex align-items-center gap-3 flex-wrap flex-xl-nowrap mt-3 mt-xl-0">
              <!-- Language Switcher -->
              <button class="lang-switch-btn" aria-label="Switch Language">
                <img src="https://flagcdn.com/w20/in.png" alt="Hindi" class="rounded-circle object-fit-cover"
                  style="width: 18px; height: 18px;" />
                <span class="lang-switch-text">हिन्दी | EN</span>
              </button>

              <!-- Phone Link -->
              <a href="tel:+919315593990"
                class="d-none d-xl-flex align-items-center gap-2 text-decoration-none phone-link font-display font-weight-700"
                style="font-weight: 700; font-size: 15px;">
                <i class="fa-solid fa-phone"></i>
                +91 9315593990
              </a>

              <!-- Apply Now CTA -->
              <a href="contact.html" class="btn btn-premium btn-orange text-white w-100 w-xl-auto py-2 px-4"
                data-i18n="nav.applyNow">Apply Now</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

class Footer {
  render() {
    return `
      <footer class="premium-footer">
        <div class="footer-top">
          <div class="container px-3 px-md-4">
            <div class="row gy-5">

              <!-- Info and Branding -->
              <div class="col-lg-4">
                <div class="footer-brand">
                  <div class="bg-white d-inline-flex rounded-3 align-items-center border">
                    <img src="Images/Logo.png" alt="Toppers Guru Logo" style="height: 98px; width: auto;" />
                  </div>
                  <h4 class="footer-brand-title">Toppers Guru</h4>
                  <p class="footer-brand-tagline">Bhoolna Bhool Jaoge</p>
                  <p class="footer-brand-society" data-i18n="footer.runningUnder">Running under Sanjeevni Edu & Welfare Society (Govt. Recognised)</p>
                  <p class="footer-desc" data-i18n="footer.description">
                    Leading coaching institute with 30+ years of experience providing premium educational guidance and skill development programs in Krishna Nagar, Delhi.
                  </p>
                </div>
              </div>

              <!-- Quick Links -->
              <div class="col-md-6 col-lg-2 offset-lg-1">
                <h4 class="footer-title" data-i18n="footer.quickLinks">Quick Links</h4>
                <ul class="footer-links">
                  <li><a href="index.html" data-i18n="nav.home"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Home</a></li>
                  <li><a href="courses.html" data-i18n="nav.courses"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Courses</a></li>
                  <li><a href="regular-courses.html" data-i18n="nav.regularCourses"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Regular Courses</a></li>
                  <li><a href="blog.html" data-i18n="nav.blog"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Blog</a></li>
                  <li><a href="about.html" data-i18n="nav.about"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>About</a></li>
                  <li><a href="contact.html" data-i18n="nav.contact"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Contact</a></li>
                  <li><a href="gallery.html" data-i18n="nav.gallery"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Gallery</a></li>
                </ul>
              </div>

              <!-- Legal Info -->
              <div class="col-md-6 col-lg-2">
                <h4 class="footer-title" data-i18n="footer.legalInfo">Legal Info</h4>
                <ul class="footer-links">
                  <li><a href="privacy-policy.html"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Privacy Policy</a></li>
                  <li><a href="terms.html"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Terms & Conditions</a></li>
                  <li><a href="refund-policy.html"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Refund Policy</a></li>
                  <li><a href="disclaimer.html"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Disclaimer</a></li>
                  <li><a href="admission-policy.html"><i class="fa-solid fa-chevron-right me-2 font-size-11"></i>Admission Policy</a></li>
                </ul>
              </div>

              <!-- Contact Us -->
              <div class="col-lg-3">
                <h4 class="footer-title" data-i18n="footer.contactUs">Contact Us</h4>

                <div class="footer-contact-item">
                  <i class="fa-solid fa-location-dot footer-contact-icon"></i>
                  <span class="footer-contact-text">
                    B-3, Jitar Nagar, Krishna Nagar, Delhi – 110051
                  </span>
                </div>

                <div class="footer-contact-item">
                  <i class="fa-solid fa-phone footer-contact-icon"></i>
                  <a href="tel:+919315593990" class="footer-contact-text text-decoration-none hover-orange font-weight-700">
                    +91 9315593990
                  </a>
                </div>

                <div class="footer-contact-item">
                  <i class="fa-solid fa-envelope footer-contact-icon"></i>
                  <a href="mailto:info@toppersguru.in" class="footer-contact-text text-decoration-none hover-orange">
                    info@toppersguru.in
                  </a>
                </div>

                <div class="footer-contact-item">
                  <i class="fa-solid fa-clock footer-contact-icon"></i>
                  <span class="footer-contact-text">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </span>
                </div>

                <!-- Social Icons -->
                <div class="footer-social-links">
                  <a href="https://www.facebook.com/profile.php?id=61588616382383" class="footer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/toppersguru_krishnanagar/" class="footer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.youtube.com/@toppergurukrishnanagar" class="footer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Footer Copyright Bar -->
        <div class="footer-bottom">
          <div class="container px-3 px-md-4">
            <div class="row align-items-center gy-3">
              <div class="col-md-6 text-center text-md-start">
                <span>&copy; <span id="copyrightYear">2026</span> Toppers Guru. <span data-i18n="footer.rights">All Rights Reserved.</span></span>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <span data-i18n="footer.developedBy">Website Developed by</span>
                <a href="https://lso360seoplugin.com/" target="_blank" rel="noopener noreferrer" class="font-weight-600 hover-orange">Advertising India</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

// Bind to window to guarantee global access
window.Navbar = Navbar;
window.Footer = Footer;
