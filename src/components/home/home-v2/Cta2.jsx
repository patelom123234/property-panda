export default function Cta2() {
  return (
    <section className="our-cta2 p0 px20">
      <div
        className="cta-banner2 bgc-thm maxw1600 mx-auto pt100 pt50-md pb85 pb50-md px30-md bdrs12 position-relative overflow-hidden"
        style={{ backgroundColor: "#D9D9D9" }}
      >
        <div className="img-box-5">
          <img
            className="img-1 spin-right"
            src="/images/about/element-1.png"
            alt="element"
          />
        </div>
        <div className="img-box-6">
          <img
            className="img-1 spin-left"
            src="/images/about/element-2.png"
            alt="element"
          />
        </div>

        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-xl-5 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                width: "100%",
                height: "100%",
                // backgroundColor: "white",
              }}
            >
              <div className="cta-style2" style={{ display: "flex" }}>
                <div style={{ width: "60%" }}>
                  <h2 className="cta-title" style={{ color: "black" }}>
                    Need help? Talk to our expert.
                  </h2>
                  <p className="cta-text" style={{ color: "black" }}>
                    Talk to our experts or browse through more properties.
                  </p>
                </div>
                <div style={{ width: "35%" }}>
                  <a
                    className="ud-btn mt10 mr10"
                    href="/contact"
                    style={{
                      color: "black",
                      border: "1px solid black",
                    }}
                  >
                    Learn More<i className="fal fa-arrow-right-long"></i>
                  </a>
                  <a className="ud-btn btn-dark mt10" href="/contact">
                    Learn More<i className="fal fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
