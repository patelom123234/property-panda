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

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Strong = styled.strong``;

const Email = styled.span`
  color: #007bff;
`;

const PhoneNumber = styled.span`
  color: #28a745;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  title: "OurService || PropertyPanda - Real Estate ReactJS Template",
};

// Component
const PrivacyPolicy = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      <div className="container">
        <Heading2>Privacy & Policy</Heading2>
        <Paragraph>
          The firm property panda Pvt Ltd, which was established in India in
          accordance with the Companies Act, 1956 ("Company") is the owner and
          operator of the website{" "}
          <Link href="https://www.propertypanda.com">
            https://www.propertypanda.com
          </Link>{" "}
          as well as the mobile application "Property panda" (collectively,
          "Website"). The Company's business is to enable owners, tenants,
          buyers, and sellers to explore and identify all types of immovable
          properties, such as land, buildings, factories, houses, apartments,
          and other residential, commercial, and industrial plots and
          properties, and to carry out transactions involving the purchase,
          sale, licensing, leasing, hiring, renting, or other activity relating
          to transferable, and nontransferable properties ("Services") The
          Company's privacy practices with regard to the entire Website's
          content are outlined in this privacy statement (the "Privacy Policy")
          The Terms of Use and other terms on the Site include this Policy in
          its entirety ("Terms of Use"). The definitions given to capitalized
          nouns that have been used here but are not specified will apply to
          them as well. As soon as a user registers with the website and accepts
          its terms and conditions, this policy becomes operative. Before using
          our Services, please take the time to thoroughly read this Privacy
          Policy and our Terms of Use
        </Paragraph>
        <Heading4>Information Collection</Heading4>
        <Paragraph>
          Through your use of the Website, participation in the Property Panda
          community on social media sites, information submitted to one of our
          marketing partners, or any other interaction with Property Panda, we
          may gather information about you. We may gather and use the personal
          data you supply, including but not restricted to: Information that you
          give us when you register, including any facts that can be used to
          contact or locate the user, like name, address, email, bank
          information, and phone number Every computer or mobile device
          connected to the internet is given a domain name and a series of
          numbers that act as that machine's Internet Protocol, or "IP" address.
          Examples of such data include your mobile phone's operating system.
          Our web servers detect your domain name and IP address automatically
          when you request a page from any page on the Website. Other than the
          IP address from which you have viewed the Website, the domain name and
          IP address don't reveal any personal information about you Data from
          Subscription or premium service
        </Paragraph>
        {/* Add more headings, paragraphs, links, etc. */}
        <Paragraph>
          We or our payment gateway provider may obtain your purchase, address,
          or billing information, including your credit card number and
          expiration date, when you select any subscription or paid service
          offered as part of our Services. However, the same are handled by such
          mobile operating system platform providers when you place an order
          utilizing an in-app purchase option on any of the Company's
          applications. Unless terminated, the subscriptions or paid services
          may be renewed automatically. You can cancel your subscription before
          the end of the subscription term if you decide at any time that you do
          not want it to renew automatically
        </Paragraph>
        <Heading4>Voluntary Disclosure</Heading4>
        <Paragraph>
          We might also get more information from you at other times, such as
          when you provide us feedback or comments, alter your email or content
          preferences, take our survey, or communicate with us in any other way
          We may use "cookies" or other similar electronic tools to collect
          information in order to give each visitor a special, random number as
          a User Identification (User ID) and better understand their unique
          interests using the identified computer or device. This helps us make
          the Sites more responsive for our Users. Even if we assign a cookie to
          your computer or device, we will not be able to identify you unless
          you explicitly identify yourself (via registration, for instance).
          Only information you submit can be used to identify you personally in
          cookies. Your device's or hard drive's data cannot be read by a
          cookie. If you click on one of their adverts or other content, our
          advertisers may also add their own cookies to your browser, a process
          that we have no control over. Every time you connect with us through
          the Site or Service using a computer, laptop, tablet, smartphone, or
          ham log magar bhagat ki olat hai other mobile or handheld device, we
          acquire and store specific categories of Information about you
        </Paragraph>

        <Paragraph>
          We might also get more information from you at other times, such as
          when you provide us feedback or comments, alter your email or content
          preferences, take our survey, or communicate with us in any other way.
          We may use "cookies" or other similar electronic tools to collect
          information in order to give each visitor a special, random number as
          a User Identification (User ID) and better understand their unique
          interests using the identified computer or device. This helps us make
          the Sites more responsive for our Users. Even if we assign a cookie to
          your computer or device, we will not be able to identify you unless
          you explicitly identify yourself (via registration, for instance).
          Only information you submit can be used to identify you personally in
          cookies. Your device's or hard drive's data cannot be read by a
          cookie. If you click on one of their adverts or other content, our
          advertisers may also add their own cookies to your browser, a process
          that we have no control over. Every time you connect with us through
          the Site or Service using a computer, laptop, tablet, smartphone, or
          other mobile or handheld device, we acquire and store specific
          categories of Information about you.
        </Paragraph>
        <Heading4>Data From Further Sources</Heading4>
        <Paragraph>
          We might acquire details about you from other sources, add them to the
          data we already have on you, and handle them in line with this Policy.
          Your account information and order information may be given to us if
          you disclose it to the platform provider or another partner to whom we
          offer services. Statistics and Other Information: In order to provide
          you communications and promotions that are more specifically tailored
          to you, we might consult different sources of demographic and other
          information. Among other tools, we utilize Google Analytics to monitor
          user activity on our websites. We have enabled Google Analytics
          expressly to allow display advertising in order to better understand
          the demographics and preferences of our users. The reports are
          anonymous and can't be connected to any specific, personally
          identifiable data that you could have given us. Using Google's Ads
          Settings, you can choose not to use Google Analytics for display
          advertising and modify Google Display Network ads.
        </Paragraph>

        <Heading4>Retention Of Data</Heading4>
        <Paragraph>
          The Company will only keep personal data as long as it's required to
          fulfil the purposes for which it was obtained and as long as the law
          allows it. Contact us by email at info@Propertypanda.com if you want
          to close your account or ask that the Company no longer use your
          information to provide you with services. Even after your account is
          closed, the Company may keep your personal information as long as it's
          necessary to satisfy legal and regulatory requirements, handle
          disputes, wrap up any operations associated with account cancellation,
          look into or stop fraud and other inappropriate activity, uphold our
          agreements, or for other business purposes. The unique DoubleClick
          cookie ID on the user's browser is overwritten with the words "OPT
          OUT" if they want to opt out using the Ads Settings. The opt-out
          cookie can no longer be connected to a specific browser because there
          is no longer a distinct cookie ID.
        </Paragraph>
        <Heading4>Information from Log Files</Heading4>
        <Paragraph>
          When you access our site, application, or service, we automatically
          log a small amount of data, including your IP address, about the
          Internet connection of your computer and your mobile device. Your IP
          address is a number that tells internet-connected devices where to
          send information, such as the pages you visit. Your IP address, the
          name of your computer, the kind and version of your browser, the CPU
          speed, and the connection speed are all pieces of information that we
          automatically receive and log from your browser. Additionally, we
          might gather log data from your device, such as its location, IP
          address, name, serial number, or unique identifying number (such as
          the UDiD on an iOS device), operating system, browser type and
          version, CPU speed, and connection speed, among other things.
        </Paragraph>

        <Heading4>Data From Further Sources</Heading4>
        <Paragraph>
          We might acquire details about you from other sources, add them to the
          data we already have on you, and handle them in line with this Policy.
          Your account information and order information may be given to us if
          you disclose it to the platform provider or another partner to whom we
          offer services.
        </Paragraph>
        <Heading4>Statistics and Other Information</Heading4>
        <Paragraph>
          In order to provide you communications and promotions that are more
          specifically tailored to you, we might consult different sources of
          demographic and other information. Among other tools, we utilize
          Google Analytics to monitor user activity on our websites. We have
          enabled Google Analytics expressly to allow display advertising in
          order to better understand the demographics and preferences of our
          users. The reports are anonymous and can't be connected to any
          specific, personally identifiable data that you could have given us.
          Using Google's Ads Settings, you can choose not to use Google
          Analytics for display advertising and modify Google Display Network
          ads.
        </Paragraph>
        <Heading4>Link To Third Part Sites</Heading4>
        <Paragraph>
          Links on this website could take you to other websites. Please be
          aware that after you leave the Company's website, the other website's
          privacy policy will apply to you. The Company may not always have
          control over the linked websites. Please be advised that the Company
          does not control the privacy policies or procedures of such
          third-party websites. The Company strongly advises reading the privacy
          statements on each and every website that gathers personal data. You
          solely assume all risk if you choose to access any of the third-party
          websites connected to the Website. The linking party is responsible
          for any links to any of the Company's partners; the Company is not
          liable for notifying users of any changes to the names or locations of
          any and all material on the Website.
        </Paragraph>

        <Heading4>Application Of The Information Collected</Heading4>
        <Paragraph>
          The Company's main objective in gathering your information is to give
          you a platform on which to access the Services. The following are some
          possible uses for the personal data you gave to the Company:
        </Paragraph>
        <List>
          <ListItem>to assist in offering you the Services;</ListItem>
          <ListItem>
            We are able to develop the Services and give you the best
            user-friendly experience thanks to the information provided by the
            users. In specific circumstances or while providing a particular
            service or utility, we may also need your contact information. The
            Company may use the aforementioned user information to maintain,
            safeguard, and improve the Services (including advertising and
            personalization on the Sites) and for creating new Services, as all
            needed Information is service dependent.
          </ListItem>
          <ListItem>
            Additionally, we might send promotional emails to your email address
            or other personally identifiable information about third parties'
            goods and services with an unsubscribe/subscribe option about our
            services and/or such additional updates and features (where
            feasible). However, we might use your email address for
            administrative or non-marketing purposes (such as notifying you of
            major changes, for customer service purposes, billing, etc.).
          </ListItem>
        </List>
        <Paragraph>
          Any personally identifiable information that you give that is widely
          available and/or accessible in the public domain, such as any
          comments, messages, blogs, or scribbles posted on social media sites
          like Facebook, Twitter, etc., will not be regarded as sensitive.
        </Paragraph>
        <Paragraph>
          Any user-generated content that is posted, uploaded, conveyed, or
          communicated on the public areas of the Sites is deemed published
          content and is not covered by this Policy.
        </Paragraph>
        <Paragraph>
          We might not be able to provide you with some services on the Sites if
          you decide not to supply personally identifiable information on the
          Sites. When you open your account, we'll try our best to let you know
          about the same. In any case, we won't be held accountable or liable if
          we can't provide you with certain services because you haven't
          provided the appropriate personal information.
        </Paragraph>
        <Paragraph>
          When you register for the Sites or Services, we may occasionally
          contact you about updating your personal information so that we can
          provide Users things that we think they might find useful or
          interesting.
        </Paragraph>
        <Heading4>
          Asset sales, mergers, acquisitions, and bankruptcies
        </Heading4>
        <Paragraph>
          As a result of a sale or acquisition, merger, or bankruptcy involving
          the Company, the information acquired from you may be transferred to a
          third party.
        </Paragraph>

        <Heading4>How are the data gathered used?</Heading4>
        <Paragraph>
          When you visit or use our sites or services, we employ third-party
          advertising businesses to show ads. These businesses may use data
          about your visits to or use of a specific website, mobile application,
          or service (but not your name, address, email address, telephone
          number, or any other personally identifiable information) to deliver
          advertisements for products and services that may be of interest to
          you. Utilizing Times Internet Limited's own ad serving technologies,
          Property panda additionally enables marketers and producers to deliver
          adverts directly.
        </Paragraph>
        <Heading4>Sharing of Information</Heading4>
        <Paragraph>
          Your personal information will be used to enable you to access your
          account on the website, address specific service problems, keep you
          updated on new services and features, and communicate with you about
          how you're using the website. Any additional data gathered will be
          used for business purposes, which may include the viewing or
          advertising of residential or commercial real estate, rental
          properties, or the use of related services by Users, as well as data
          usage for analytical purposes, improving the Site's functionality, and
          serving you with targeted advertisements.
        </Paragraph>
        <Paragraph>
          <strong>
            IN THE FEW INSTANCES LISTED BELOW, THE COMPANY DISCLOSES YOUR
            INFORMATION TO ANY THIRD PARTY WITHOUT FIRST GETTING THE USER'S
            PERMISSION:
          </strong>
        </Paragraph>
        <List>
          <ListItem>
            The Company proposes to share such Information with its group
            companies, as well as officers and staff of those group companies,
            in order to do business and to handle personal data on its behalf.
            We also make sure that the recipients of this information consent to
            processing it in accordance with our instructions, this Policy, and
            any other applicable confidentiality and security safeguards.
          </ListItem>
          <ListItem>
            The Company intends to use the Information to carry out its
            operations and to share it with the officers and staff of the other
            firms in its group who will be processing personal data on its
            behalf. We also make sure that the recipients of this information
            consent to processing it in accordance with our instructions, this
            Policy, and any other applicable confidentiality and security
            safeguards.
          </ListItem>
          <ListItem>
            The Company may provide Information to our advertisers and third
            parties in order to better understand our audience and demonstrate
            the effectiveness of our online advertising. Typically, this
            Information takes the form of aggregated statistics on the traffic
            to different pages on our website.
          </ListItem>
          <ListItem>
            When we have reason to believe that revealing User information is
            necessary to identify, contact, or bring legal action against
            someone who may be causing interference with our rights or our
            Sites, whether intentionally or unintentionally, or when anyone else
            could be harmed by such activities, we may share your information in
            order to enforce or protect our rights or those of any or all of our
            affiliates, associates, employees, directors, or officers.
          </ListItem>
          <ListItem>
            We share your email address with other businesses whose goods or
            services we believe you might be interested in.
          </ListItem>
          <ListItem>
            Registered phone numbers of visitors to our site may be contacted by
            us by phone or text message with information about new goods and
            services or impending events.
          </ListItem>
        </List>
        <Heading4>INFORMATION SECURITY</Heading4>
        <Paragraph>
          To protect and secure such Personal Information, the Company has
          implemented the necessary administrative controls. Only information
          that is compatible with and pertinent for the purposes for which it
          was gathered or allowed by the user is processed by the Company. Users
          of the Website have access to their Personal Information and can
          update, correct, or remove any inaccurate data.
        </Paragraph>
        <Paragraph>
          Your information is protected by the Company using commercially
          reasonable safeguards against loss, theft, unauthorized access,
          disclosure, duplication, use, and modification.
        </Paragraph>
        <Paragraph>
          The information that is gathered from you may be sent to, kept, and
          processed at any location within and/or outside of India. You consent
          to this transfer, storing, and/or processing by providing information
          on the website. The Company will take the reasonable efforts it deems
          necessary to ensure that your information is handled securely and in
          compliance with this Privacy Policy.
        </Paragraph>
        <Paragraph>
          You acknowledge that using the Website implies some inherent security
          risks associated with data transmission over the internet. The Company
          assumes no liability for any disclosure of information due to
          transmission errors, unauthorized third-party access or other acts of
          third parties, or acts or omissions beyond its reasonable control, so
          you agree not to hold the Company liable for any security breach. As a
          result, you agree to use the Website at your own risk.
        </Paragraph>
        <Paragraph>
          If the Company learns of any breach in the security of your
          information, it will contact you right away and do all in its power to
          correct the situation.
        </Paragraph>
        <Heading4>GRIEVANCE OFFICER</Heading4>
        <Paragraph>
          The name and contact information for the Grievance Officer are listed
          below in compliance with the Information Technology Act, 2000 and the
          rules promulgated thereunder. Any User complaints regarding the
          inconsistencies or improper use of information submitted to Property
          Panda may be directed to the grievance officer designated by Property
          Panda for this reason, whose contact information is provided below.
        </Paragraph>
        <ContactInfo>
          <PhoneNumber>+91 7575081000</PhoneNumber>
          <Email>Support@propertypanda.com</Email>
        </ContactInfo>
        <Paragraph>
          Within one month of the day the grievance was received from the User,
          the grievance officer must respond.
        </Paragraph>
      </div>

      <section className="footer-style1 pt120 pb-0 mt60">
        <Footer />
      </section>
    </>
  );
};

export default PrivacyPolicy;
