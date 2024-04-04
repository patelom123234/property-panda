import DefaultHeader from "@/components/common/DefaultHeader";
import MetaData from "@/components/common/MetaData";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const Heading2 = styled.h2`
  color: #2e48de;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Heading4 = styled.h4`
  color: #2e48de;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const metaInformation = {
  title: "Desclaimer || PropertyPanda - Real Estate ReactJS Template",
};

// Component
const Disclaimer = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      <div className="container">
        <Heading2>Disclaimer</Heading2>
        <Heading4>Home/About</Heading4>
        <Paragraph>
          The information provided by YasSir Property Holdings PVT. LTD. on
          propertypanda.com (the “Site”) is for general informational purposes
          only. All information on the Site is provided in good faith, however
          we make no representation or warranty of any kind, express or implied,
          regarding the accuracy, adequacy, validity, reliability, availability,
          or completeness of any information on the Site.
        </Paragraph>
        <Paragraph>
          UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS
          OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR
          RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE
          AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN
          RISK.
        </Paragraph>
        <Heading4>External Links Disclaimer</Heading4>
        <Paragraph>
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features. Such external links are not
          investigated, monitored, or checked for accuracy, adequacy, validity,
          reliability, availability, or completeness by us.
        </Paragraph>
        <Paragraph>
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
          THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY
          WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN
          ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY
          WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
          THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </Paragraph>
        <Heading4>Testimonial Disclaimer</Heading4>
        <Paragraph>
          The Site may contain testimonials by users of our products and/or
          services. These testimonials reflect the real-life experiences and
          opinions of such users. However, the experiences are personal to those
          particular users, and may not necessarily be representative of all
          users of our products and/or services.
        </Paragraph>
        <Paragraph>
          Your Individual Results May Vary. The testimonials on the Site are
          submitted in various forms such as text, audio, and/or video, and are
          reviewed by us before being posted. They appear on the Site verbatim
          as given by the users, except for the correction of grammar or typing
          errors. Some testimonials may have been shortened for the sake of
          brevity, where the full testimonial contained extraneous information
          not relevant to the general public.
        </Paragraph>
        <Paragraph>
          The views and opinions contained in the testimonials belong solely to
          the individual user and do not reflect our views and opinions.
        </Paragraph>
        <Heading4>ERRORS AND OMISSIONS DISCLAIMER</Heading4>
        <Paragraph>
          While we have made every attempt to ensure that the information
          contained in this site has been obtained from reliable sources, YasSir
          Property Holdings PVT. LTD. is not responsible for any errors or
          omissions or for the results obtained from the use of this
          information. All information in this site is provided “as is”, with no
          guarantee of completeness, accuracy, timeliness, or of the results
          obtained from the use of this information, and without warranty of any
          kind, express or implied, including, but not limited to warranties of
          performance, merchantability, and fitness for a particular purpose.
        </Paragraph>
        <Paragraph>
          In no event will YasSir Property Holdings PVT. LTD., its related
          partnerships or corporations, or the partners, agents or employees
          thereof be liable to you or anyone else for any decision made or
          action taken in reliance on the information in this Site or for any
          consequential, special, or similar damages, even if advised of the
          possibility of such damages.
        </Paragraph>
        <Heading4>GUEST CONTRIBUTORS’ DISCLAIMER</Heading4>
        <Paragraph>
          This Site may include content from guest contributors and any views or
          opinions expressed in such posts are personal and do not represent
          those of YasSir Property Holdings PVT. LTD. or any of its staff or
          affiliates unless explicitly stated.
        </Paragraph>
        <Heading4>LOGOS AND TRADEMARKS DISCLAIMER</Heading4>
        <Paragraph>
          All logos and trademarks of third parties referenced on
          propertypanda.com are the trademarks and logos of their respective
          owners. Any inclusion of such trademarks or logos does not imply or
          constitute any approval, endorsement, or sponsorship of YasSir
          Property Holdings PVT. LTD. by such owners.
        </Paragraph>
        <Heading4>CONTACT US</Heading4>
        <Paragraph>
          Should you have any feedback, comments, requests for technical
          support, or other inquiries, please contact us by email:
          support@propertypanda.com
        </Paragraph>
      </div>

      <section className="footer-style1 pt120 pb-0 mt60">
        <Footer />
      </section>
    </>
  );
};

export default Disclaimer;
