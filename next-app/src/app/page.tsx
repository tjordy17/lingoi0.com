"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      setTimestamp(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className="preloader">
        <div className="loader">Loading...</div>
      </div>

      <section
        className="home-section home-parallax home-fade home-full-height bg-dark-60 agency-page-header"
        id="home"
        data-background="/assets/images/master_bg.jpg"
      >
        <div className="titan-caption">
          <div className="caption-content">
            <div className="time">
              <span id="timestamp">{timestamp}</span>
            </div>
            <div className="font-alt mb-30 titan-title-size-1">
              I am Jordy Ndibanje
            </div>
            <div className="font-alt mb-40 titan-title-size-3">
              <span className="rotate">Bienツenu| Welc0me | ようこそ | Yamb∐</span>
            </div>
            <a
              rel="noopener"
              className="section-scroll btn btn-border-w btn-circle"
              href="https://squareup.com/appointments/book/oeyevbgyibz57k/L10XN71J69MKA/start"
              target="_blank"
            >
              Talk to me
            </a>
          </div>
        </div>
      </section>

      <div className="main">
        <section className="module">
          <div className="container">
            <div className="row multi-columns-row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-focus"></span>
                  </div>
                  <h3 className="features-title font-alt">Web Development</h3>
                  Freelance Developer since 2018, always looking for work talk to me
                  about your project. UI/UX Designer.
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-global"></span>
                  </div>
                  <h3 className="features-title font-alt">Web 3.0</h3>
                  New to Smart Contract Developing, Always happy to learn and work
                  on any great ideas!
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-clock"></span>
                  </div>
                  <h3 className="features-title font-alt">Tech &amp; Consultation</h3>
                  Many years working in the Department of Technology and
                  information. I offer Tech Consultation to Small business or SME
                  in Ontario.
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="features-item">
                  <div className="features-icon">
                    <span className="icon-presentation"></span>
                  </div>
                  <h3 className="features-title font-alt">DEFI</h3>
                  Defi is the practice of using blockchain tech to access
                  financial services
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="module pt-0 pb-0" id="about">
          <div className="row position-relative m-0">
            <div
              className="col-xs-12 col-md-6 side-image"
              data-background="/assets/images/block.jpg"
            ></div>
            <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="module-title font-alt align-left">Who I am?</h2>
                  <div className="module-subtitle font-serif align-left">
                    DEVELOPER, ENTREPENEUR &amp; CONSULTANT
                  </div>
                  <p>
                    Traveller, explorer, self-taught full-stack developer and
                    entrepreneur, I&apos;m a 23-year-old man currently based in
                    Ontario, Canada. I&apos;m passionate about technology, and I&apos;ve
                    built and collaborated in multiple public and personal
                    projects over the years. I also develop SMEs and small
                    businesses, and I&apos;m now focusing on developing my smart
                    contract skills in the metaverse. When I&apos;m not coding, I&apos;m
                    rollerblading or playing soccer, or out exploring nature. I&apos;m
                    always looking for new ideas and collaborations, and I&apos;m
                    excited for what the future holds.
                  </p>
                  <br />

                  <div className="social-container">
                    <ul className="social-icons">
                      <li>
                        <a
                          title="instagram"
                          href="https://www.instagram.com/jayy_lingo/"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          title="twitter"
                          href="https://twitter.com/THERY_JORDY"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          title="linkedin"
                          href="https://www.linkedin.com/in/jordy-ndibanje-633895236/"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          title="github"
                          href="https://github.com/tjordy17"
                          target="_blank"
                          rel="noopener"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-w" />

        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h4 className="font-alt mb-30">FAQs</h4>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title font-alt">
                        <a data-toggle="collapse" data-parent="#accordion" href="#support1">
                          How long for a Reply?
                        </a>
                      </h4>
                    </div>
                    <div className="panel-collapse collapse in" id="support1">
                      <div className="panel-body">
                        Typically, a response to emails can be expected within 2-3
                        business days. If a quicker reply is desired, sending a
                        message via WhatsApp should generate a response within 24
                        hours. Please note that I will be out of office from April
                        2nd to August 5th, 2023.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title font-alt">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#support2"
                        >
                          Are a client and need immediate Help?
                        </a>
                      </h4>
                    </div>
                    <div className="panel-collapse collapse" id="support2">
                      <div className="panel-body">
                        Thank you for your inquiry. I am pleased to inform you
                        that our services are available Globaly. If you would like
                        to proceed, please leave a message on my WhatsApp with your
                        corresponding invoice and I will respond to you as soon as
                        possible.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title font-alt">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#support3"
                        >
                          wish list?
                        </a>
                      </h4>
                    </div>
                    <div className="panel-collapse collapse" id="support3">
                      <div className="panel-body">
                        The following
                        <a
                          href="https://www.amazon.ca/hz/wishlist/ls/394BR8TNW9O84?ref_=wl_share"
                          target="_blank"
                          rel="noopener"
                          style={{ color: "darkblue" }}
                        >
                          link
                        </a>
                        is my wish list and oh my birthday is July 16th ;)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <h4 className="font-alt mb-30">Experience</h4>
                <h6 className="font-alt">
                  <span className="icon-scope"></span> HTML/CSS
                </h6>
                <div className="progress">
                  <div
                    title="bar"
                    className="progress-bar pb-dark"
                    aria-valuenow={99}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="font-alt"></span>
                  </div>
                </div>
                <h6 className="font-alt">
                  <span className="icon-grid"></span> Yul
                </h6>
                <div className="progress">
                  <div
                    title="bar"
                    className="progress-bar pb-dark"
                    aria-valuenow={13}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="font-alt"></span>
                  </div>
                </div>
                <h6 className="font-alt">
                  <span className="icon-target"></span> JavaScript
                </h6>
                <div className="progress">
                  <div
                    title="bar"
                    className="progress-bar pb-dark"
                    aria-valuenow={81}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="font-alt"></span>
                  </div>
                </div>
                <h6 className="font-alt">
                  <span className="icon-refresh"></span> PHP
                </h6>
                <div className="progress">
                  <div
                    title="bar"
                    className="progress-bar pb-dark"
                    aria-valuenow={50}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="font-alt"></span>
                  </div>
                </div>
                <h6 className="font-alt">
                  <span className="icon-lifesaver"></span> Solidity
                </h6>
                <div className="progress">
                  <div
                    title="bar"
                    className="progress-bar pb-dark"
                    aria-valuenow={58}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="font-alt"></span>
                  </div>
                </div>
                <h6 className="font-alt">
                  <span className="icon-genius"></span> React
                </h6>
                <div className="progress">
                  <div
                    title="bar"
                    className="progress-bar pb-dark"
                    aria-valuenow={40}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="font-alt"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="module bg-dark-60 pt-0 pb-0 parallax-bg quote"
          data-background="/assets/images/master_bg.jpg"
        >
          <div className="quotes-slider pt-140 pb-140">
            <ul className="slides">
              <li>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="module-icon">
                        <span className="icon-quote"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <blockquote className="quote-text font-alt">
                        Too many people spend money they earned..to buy things
                        they don&apos;t want.to impress people that they don&apos;t like.
                      </blockquote>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                      <div className="quote-author">
                        <div className="quote-caption font-alt">
                          <div className="quote-title">Will Rogers</div>
                          <div className="quote-descr">
                            American humorist and entertainer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="module-icon">
                        <span className="icon-quote"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <blockquote className="quote-text font-alt">
                        An investment in knowledge pays the best interest.
                      </blockquote>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                      <div className="quote-author">
                        <div className="quote-caption font-alt">
                          <div className="quote-title">Benjamin Franklin</div>
                          <div className="quote-descr">Author, Scientist</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="module-icon">
                        <span className="icon-quote"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <blockquote className="quote-text font-alt">
                        Finance is not merely about making money. It&apos;s about
                        achieving our deep goals and protecting the fruits of our
                        labor. It&apos;s about stewardship and, therefore, about
                        achieving the good society.
                      </blockquote>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                      <div className="quote-author">
                        <div className="quote-caption font-alt">
                          <div className="quote-title">Robert J. Shiller</div>
                          <div className="quote-descr">American economist</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="scroll-up">
        <a title="back-to-top" href="#totop">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </main>
  );
}
