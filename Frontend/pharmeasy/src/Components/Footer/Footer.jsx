import React from 'react'
import social from "./social.png";
import paytm from "./paytm.png";
import { Heading, Text } from '@chakra-ui/react' 

const Footer = () => {
    const company = ["About Us","Career","Blog","Partner with PharmEasy","Sell at PharmEasy"];
    const service = ["Order Medicine","Healthcare Products","Lab Tests","Find Nearest Collection Center"];
    const feature = ["Covid Essentials","Personal Care","Health Food And Drinks","Skin Care","Beauty","Home Care","Ayurvedic Care","Sexual Wellness","Fitness Supplements","Mother And Baby Care","Health care Devices","Health Condition","Diabetic Care","Elderly Care","Accessories And Wearables","Top Products"];
    const help = ["Browse all Medicine","Browse all Molecules","Browse all Cities","Browse all Stores","Browse all Areas","FAQs"];
    const policy = ["Editorial Policy","Privacy Policy","Vulnerability Disclosure Policy","Terms And Conditions","Customers Support Policy","Return Policy"];

  return (
    <div className='foot'>
        <div style={{display:"flex"}}>
            <div>
                <Text fontSize="xl" fontWeight="bold" textAlign="left">Company</Text>
                {company.map((item)=>
                    <a href=''><Text textAlign="left">{item}</Text></a>
                )}
                <Text fontSize="xl" fontWeight="bold" textAlign="left">Our Services</Text>
                {service.map((item)=>
                    <a href=''><Text textAlign="left">{item}</Text></a>
                )}
            </div>
            <div>
                <Text fontSize="xl" fontWeight="bold" textAlign="left">Featured Category</Text>
                {feature.map((item)=>
                    <a href=''><Text textAlign="left">{item}</Text></a>
                )}
            </div>
            <div>
                <Text fontSize="xl" fontWeight="bold" textAlign="left">Need Help</Text>
                {help.map((item)=>
                    <a href=''><Text textAlign="left">{item}</Text></a>
                )}
                <Text fontSize="xl" fontWeight="bold" textAlign="left">Policy Info</Text>
                {policy.map((item)=>
                    <a href=''><Text textAlign="left">{item}</Text></a>
                )}
            </div>
            <div>
                <img src={social} alt="" className='imgg'/>
            </div>
        </div>
        <div>
            <img src={paytm} alt="" />
        </div>
    </div>
  )
}

export default Footer