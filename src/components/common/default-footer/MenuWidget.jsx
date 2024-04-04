// import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Property Panda",
      links: [
        { label: "Mobile App", href: "#" },
        { label: "Our Service", href: "/our-service" },
        { label: "Price Trends", href: "#" },
        { label: "Post Your property", href: "#" },
        { label: "Real estate Investment", href: "#" },
        { label: "Builders in India ", href: "#" },
        { label: "Tools", href: "#" },
        { label: "Article & Blog", href: "#" },
        { label: "Customer Service", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers with us", href: "#" },
        { label: "Terms & Conditions ", href: "/terms-and-conditions" },
        { label: "Request Info", href: "#" },
        { label: "Feedback", href: "#" },
        { label: "Report a Problem", href: "#" },
        { label: "Testimonial", href: "#" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Grievances", href: "#" },
        { label: "Safety Guides", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { label: "+917947923500", href: "#" },
        { label: "+917575081000", href: "#" },
        { label: "Chicago", href: "#" },
        { label: "New York", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
