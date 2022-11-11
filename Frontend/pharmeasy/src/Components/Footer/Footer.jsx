import React from "react";
import social from "./social.png";
import paytm from "./paytm.png";
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Footer = () => {
  const company = [
    "About Us",
    "Career",
    "Blog",
    "Partner with PharmEasy",
    "Sell at PharmEasy",
  ];
  const service = [
    "Order Medicine",
    "Healthcare Products",
    "Lab Tests",
    "Find Nearest Collection Center",
  ];
  const feature = [
    "Covid Essentials",
    "Personal Care",
    "Health Food And Drinks",
    "Skin Care",
    "Beauty",
    "Home Care",
    "Ayurvedic Care",
    "Sexual Wellness",
    "Fitness Supplements",
    "Mother And Baby Care",
    "Health care Devices",
    "Health Condition",
    "Diabetic Care",
    "Elderly Care",
    "Accessories And Wearables",
    "Top Products",
  ];
  const help = [
    "Browse all Medicine",
    "Browse all Molecules",
    "Browse all Cities",
    "Browse all Stores",
    "Browse all Areas",
    "FAQs",
  ];
  const policy = [
    "Editorial Policy",
    "Privacy Policy",
    "Vulnerability Disclosure Policy",
    "Terms And Conditions",
    "Customers Support Policy",
    "Return Policy",
  ];

  return (
    <div>
      <div className="foot">
        <div className="footdis">
          <div>
            <Text fontSize="xl" fontWeight="bold" textAlign="left">
              Company
            </Text>
            {company.map((item) => (
              <a href="https://pharmeasy.in/">
                <Text textAlign="left">{item}</Text>
              </a>
            ))}
            <br />
            <Text fontSize="xl" fontWeight="bold" textAlign="left">
              Our Services
            </Text>
            {service.map((item) => (
              <a href="https://pharmeasy.in/">
                <Text textAlign="left">{item}</Text>
              </a>
            ))}
          </div>
          <div>
            <Text fontSize="xl" fontWeight="bold" textAlign="left">
              Featured Category
            </Text>
            {feature.map((item) => (
              <a href="https://pharmeasy.in/">
                <Text textAlign="left">{item}</Text>
              </a>
            ))}
          </div>
          <div>
            <Text fontSize="xl" fontWeight="bold" textAlign="left">
              Need Help
            </Text>
            {help.map((item) => (
              <a href="https://pharmeasy.in/">
                <Text textAlign="left">{item}</Text>
              </a>
            ))}
            <br />
            <Text fontSize="xl" fontWeight="bold" textAlign="left">
              Policy Info
            </Text>
            {policy.map((item) => (
              <a href="https://pharmeasy.in/">
                <Text textAlign="left">{item}</Text>
              </a>
            ))}
          </div>
          <div>
            <img src={social} alt="" className="imgg" />
          </div>
        </div>
        <div>
          <img src={paytm} alt="" />
        </div>
      </div>
      <div className="smallfoot">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Company
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {company.map((item) => (
                <Text textAlign="left">{item}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Our Services
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {service.map((item) => (
                <Text textAlign="left">{item}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Featured Category
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {feature.map((item) => (
                <Text textAlign="left">{item}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Need Help
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {help.map((item) => (
                <Text textAlign="left">{item}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Our Policy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {policy.map((item) => (
                <Text textAlign="left">{item}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <br />
        <img src={social} alt="" />
        <br />
        <img src={paytm} alt="" />
      </div>
    </div>
  );
};

export default Footer;
