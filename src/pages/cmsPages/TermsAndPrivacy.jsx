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
  title: "Terms & Conditions || PropertyPanda - Real Estate ReactJS Template",
};

// Component
const TermsConditions = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      <div className="container">
        <Heading2>Terms & Conditions</Heading2>
        <Heading4>Introduction</Heading4>
        <Paragraph>
          Welcome to YasSir Property Holdings Private Limited (“Company”, “we”,
          “our”, “us”)! These Terms of Service (“Terms”, “Terms of Service”)
          govern your use of our website located at propertypanda.com (together
          or individually “Service”) operated by YasSir Property Holdings
          Private Limited. Our Privacy Policy also governs your use of our
          Service and explains how we collect, safeguard and disclose
          information that results from your use of our web pages.
        </Paragraph>
        <Paragraph>
          Your agreement with us includes these Terms and our Privacy Policy
          (“Agreements”). You acknowledge that you have read and understood
          Agreements, and agree to be bound by them.
        </Paragraph>
        {/* Add more headings and paragraphs for other sections */}
        <Heading4>Communication</Heading4>
        <Paragraph>
          By using our Service, you agree to subscribe to newsletters, marketing
          or promotional materials and other information we may send. However,
          you may opt out of receiving any, or all, of these communications from
          us by following the unsubscribe link or by emailing at
          support@propertypanda.com.
        </Paragraph>
        <Heading4>Contests, Sweepstakes and Promotions</Heading4>
        <Paragraph>
          Any contests, sweepstakes or other promotions (collectively,
          “Promotions”) made available through Service may be governed by rules
          that are separate from these Terms of Service. If you participate in
          any Promotions, please review the applicable rules as well as our
          Privacy Policy. If the rules for a Promotion conflict with these Terms
          of Service, Promotion rules will apply.
        </Paragraph>
        {/* Add more sections similarly */}
        <Heading4>Subscriptions</Heading4>
        <Paragraph>
          Some parts of Service are billed on a subscription basis
          "Subscriptions". You will be billed in advance on a recurring and
          periodic basis ("Billing Cycle"). Billing cycles will be set depending
          on the type of subscription plan you select when purchasing a
          Subscription.
        </Paragraph>
        <Paragraph>
          At the end of each Billing Cycle, your Subscription will automatically
          renew under the exact same conditions unless you cancel it or YasSir
          Property Holdings Private Limited cancels it. You may cancel your
          Subscription renewal either through your online account management
          page or by contacting support@propertypanda.com customer support team.
        </Paragraph>
        {/* Add more paragraphs for other details in the Subscriptions section */}
        <Paragraph>
          A valid payment method is required to process the payment for your
          subscription. You shall provide YasSir Property Holdings Private
          Limited with accurate and complete billing information that may
          include but not limited to full name, address, state, postal or zip
          code, telephone number, and a valid payment method information. By
          submitting such payment information, you automatically authorize
          YasSir Property Holdings Private Limited to charge all Subscription
          fees incurred through your account to any such payment instruments.
        </Paragraph>
        <Paragraph>
          Should automatic billing fail to occur for any reason, YasSir Property
          Holdings Private Limited reserves the right to terminate your access
          to the Service with immediate effect.
        </Paragraph>
      </div>
      <section className="footer-style1 pt120 pb-0 mt60">
        <Footer />
      </section>
    </>
  );
};

export default TermsConditions;
