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
  title: "OurService || PropertyPanda - Real Estate ReactJS Template",
};

// Component
const OurService = () => {
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      <div className="container">
        <Heading2>OUR SERVICES</Heading2>
        <Heading4>Buy a property</Heading4>
        <Paragraph>
          Flats, showrooms, office, land (industrial/ Commercial/ residential or
          agricultural), small plots or whatever else. We have a wide database
          which is flooded with genuine sellers of all types of properties that
          gets updated every day. The best part is, if you buy a property, our
          services are absolutely free! You don't owe us anything.
        </Paragraph>
        <Heading4>Rent a property</Heading4>
        <Paragraph>
          Are you considering leasing your property? Great! Let us help you find
          the perfect person or organization who fits the bill. It doesn't
          matter if the property you intend to lease is residential, commercial
          or industrial. We always have the perfect match for you. Similarly, if
          you are thinking to acquire a property on rent, we will instantly give
          you numerous options to select from. And one more thing, if you
          acquire a property on rent through us, we won't charge you a penny.
          Our services, in such a case, are free!
        </Paragraph>
        <Heading4>Sell a property</Heading4>
        <Paragraph>
          Wherever your property is located, we will get it sold. And, we assure
          you, it will be our endeavor to fetch the best price for it. With
          complete transparency from the beginning to the end, the final call
          will, of course, be yours!
        </Paragraph>
        <Heading4>Loan Assistance</Heading4>
        <Paragraph>
          We all need a helping hand to grow our business. If you need a loan to
          grow your dreams further, we will get it done for you in no time! And
          at no cost! This, too, is a free service for our valuable customers.
        </Paragraph>
        <Heading4>Investment Opportunities</Heading4>
        <Paragraph>
          There are a thousand avenues where you can safely grow your
          hard-earned money and reap great rewards. Investing in real estate is
          not instant coffee. Your money will not double overnight. A little
          patience, correct purchase price and the perfect opportunity is all
          that is required. And we have an amalgamation of all these in our
          investment packages.
        </Paragraph>
      </div>

      <section className="footer-style1 pt120 pb-0 mt60">
        <Footer />
      </section>
    </>
  );
};

export default OurService;
