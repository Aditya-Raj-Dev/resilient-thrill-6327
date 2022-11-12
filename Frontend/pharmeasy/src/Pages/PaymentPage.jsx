import React from "react";
import {
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button
} from "@chakra-ui/react";

const PaymentPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", border: "1px solid black" }}>
        <Heading>Offers</Heading>
        <div>
          <img src="" alt="" />
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Paytm Wallet
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button colorScheme="teal" size="lg">
                  Link Wallet
                </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Amazon Pay
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Button colorScheme="teal" size="lg">
                  Place Order & Pay 
                </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Mobokwik | Zip(Pay Later)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Button colorScheme="teal" size="lg">
                  Place Order & Pay
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div style={{ border: "1px solid black", width: "50%" }}>
        <Text fontWeight="bold" fontSize="xl" color="gray" textAlign="left">
          Price Breakdown
        </Text>
        <br />
        <Text color="gray" fontSize="xl" textAlign="left">
          Cart Value
        </Text>
        <Text color="gray" fontSize="xl" textAlign="left">
          Delivery Charges
        </Text>
        <Text
          color="gray"
          fontSize="xl"
          textAlign="left"
          border="1px dashed"
          borderLeft="none"
          borderRight="none"
        >
          Amount to be Paid
        </Text>
      </div>
    </div>
  );
};

export default PaymentPage;
