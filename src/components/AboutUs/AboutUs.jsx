import React from "react";

const AboutUs = () => {
  return (
    // <!-- Wrapper -->
    <div id="wrapper" class="divided">
      {/* <!-- One --> */}
      <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div class="content">
          <h1>Story</h1>
          <p class="major">
            A (modular, highly tweakable) responsive one-page template designed
            by <a href="https://html5up.net">HTML5 UP</a> and released for free
            under the <a href="https://html5up.net/license">Creative Commons</a>
            .
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#first" class="button big wide smooth-scroll-middle">
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/banner.jpg" alt="" />
        </div>
      </section>

      {/* <!-- Two --> */}
      <section
        class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
        id="first"
      >
        <div class="content">
          <h2>Magna etiam feugiat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/spotlight01.jpg" alt="" />
        </div>
      </section>

      {/* <!-- Three --> */}
      <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
          <h2>Tempus adipiscing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/spotlight02.jpg" alt="" />
        </div>
      </section>

      {/* <!-- Four --> */}
      <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
          <h2>Pharetra etiam nulla</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/spotlight03.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
