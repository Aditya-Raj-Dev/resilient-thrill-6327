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
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const PaymentPage = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const firstField = React.useRef()

        const navigate = useNavigate();

        const handleNavigate = () => {
          navigate("/thankyou");
        };
  return (
    <div>
    <div className="paymentpage">
      <div className="paymentleft">
        <Heading textAlign="left" color="gray.600" fontSize="2xl">
          Offers
        </Heading>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <img
                    src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png"
                    alt=""
                    className="tagimg"
                  />
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
                  <img
                    src="https://cdn.pharmeasy.in/payments/amazonpay_new.png"
                    alt=""
                    className="tagimg"
                  />
                  <Box flex="1" textAlign="left">
                    Amazon Pay
                    <Text fontSize="sm" fontWeight="light">
                      Up to Rs.600 cashback on a minimum transaction of Rs.299.
                      Valid once per user
                    </Text>
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
                  <img
                    src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png"
                    alt=""
                    className="tagimg"
                  />
                  <Box flex="1" textAlign="left">
                    Mobokwik | Zip(Pay Later)
                    <Text fontSize="sm" fontWeight="light">
                      Up to Rs.650 cashback on Mobikwik use code MBK650. Valid
                      once per user
                    </Text>
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

          <Heading textAlign="left" color="gray.600" fontSize="2xl">
            Other Options
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                <img
                    src="https://cdn.pharmeasy.in/payments/upi.png"
                    alt=""
                    className="tagimg"
                  />
                  <Box flex="1" textAlign="left">
                    UPI
                    <div style={{display : "flex"}}>
                    <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png"
                    alt=""
                    className="tagimg"
                  />
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div style={{display : "flex"}}>
                <Input placeholder='ex 99xxxxxxxx@paytm.com' width="50%"/>
                <Button colorScheme="teal" size="lg">
                  Place Order And Pay
                </Button>
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                <img
                    src="https://cdn.pharmeasy.in/payments/wallet.png"
                    alt=""
                    className="tagimg"
                  />
                  <Box flex="1" textAlign="left">
                    Wallets
                    <div style={{display : "flex"}}>
                    <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/freecharge-wallet.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png"
                    alt=""
                    className="tagimg"
                  />
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <div style={{display : "flex"}}>
                <Input placeholder='ex 99xxxxxxxx@paytm.com' width="50%"/>
                <Button colorScheme="teal" size="lg">
                  Place Order And Pay
                </Button>
                </div>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                <img
                    src="https://cdn.pharmeasy.in/payments/card.png"
                    alt=""
                    className="tagimg"
                  />
                  <Box flex="1" textAlign="left">
                    Credit/Debit Cards
                    <Text fontSize="sm" fontWeight="light">
                      Up to Rs.650 cashback on HDFC credit card use code MBK650. Valid
                      once per user
                    </Text>
                    <div style={{display : "flex"}}>
                    <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png"
                    alt=""
                    className="tagimg"
                  />
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                 <Button leftIcon="+" colorScheme='teal' onClick={onOpen}>
                  Enter Card Details
                     </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                <img
                    src="https://cdn.pharmeasy.in/payments/netbanking.png"
                    alt=""
                    className="tagimg"
                  />
                  <Box flex="1" textAlign="left">
                    Net Banking
                    <Text fontSize="sm" fontWeight="light">
                      We supports over 100 banks.
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button colorScheme="teal" size="lg">
                  Place Order And Pay
                </Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png"
                    alt=""
                    className="tagimg"
                  />
                  <Box flex="1" textAlign="left">
                    Cash On Delivery
                    <Text fontSize="sm" fontWeight="light">
                      Pay via cash/UPI at the time of delivery.
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button colorScheme="teal" size="lg">Proceed</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          
        </div>
      </div>
      <div className="paymentright">
      <div className='ordersummary'>
             <h1>Price Breakdown</h1>
              <div className='totalsummary'>
                <div>
                  <p>Cart Value</p>
                  <h4>₹</h4>
                </div>
                <br />
                 <hr />
                <div>
                  <p>Delivery charges</p>
                  <h4 style={{color : "teal"}}>Free</h4>
                </div>
                <br />
                <hr />
                <div className="paid">
                  <p>Amount to be paid</p>
                  <h4>₹</h4>
                </div>
              </div>
              <div className='saving'>
                <p >Total saving of ₹81.50 on this order</p>
             </div>
             </div>
      </div>
    </div>



    <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Enter Card Details
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='number'>Card Number</FormLabel>
                <Input
                  ref={firstField}
                  id='number'
                  placeholder='Please enter card number'
                />
              </Box>
              <Box>
                <FormLabel htmlFor='date'>Valid Through</FormLabel>
                <Input
                  ref={firstField}
                  id='date'
                  placeholder='MM/YY'
                />
              </Box>
              <Box>
                <FormLabel htmlFor='cvv'>CVV</FormLabel>
                <Input
                  ref={firstField}
                  id='cvv'
                  placeholder='123'
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Name on Card</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='e.g. Sachin Kumar'
                />
              </Box>
              <Box><Checkbox defaultChecked>Save this card for future payment</Checkbox></Box>
              <Box>
                <Text>We support</Text>
                <div style={{display : "flex"}}>
                    <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png"
                    alt=""
                    className="tagimg"
                  />
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png"
                    alt=""
                    className="tagimg"
                  />
                    </div>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='teal' onClick={()=>{handleNavigate()}}>Make Payment</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default PaymentPage;
