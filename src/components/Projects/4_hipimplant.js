// SlideEx.js
import React, { useState, useEffect } from 'react';
import { useBreakpointValue, Card, Link, IconButton, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack, Divider} from '@chakra-ui/react';
import { FaGithub, FaReact} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { SiChakraui } from "react-icons/si";
import {MdOpenInNew} from "react-icons/md"
import { IoLogoFirebase } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

import assembly from "../images/hipimplant/hipimplant_assembly.png"
import stem from "../images/hipimplant/hipimplant_stem.png"
import cup from "../images/hipimplant/hipimplant_cup.png"
import linning from "../images/hipimplant/hipimplant_linning.png"
import head from "../images/hipimplant/hipimplant_head.png"
import calc from "../images/hipimplant/hipimplant_calc.png"
import print from "../images/hipimplant/hipimplant_3dprint.png"
import process from "../images/hipimplant/hipimplant_process.png"
import headscrew from "../images/hipimplant/hipimplant_head2.png"
import stemscrew from "../images/hipimplant/hipimplant_stem2.png"


function SlideEx({ isOpen, onClose }) {
  const gridColumnCount = useBreakpointValue({ base: 10, sm: 10, md: 10, lg: 10, xl: 10 });

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10, position: 'fixed', top: 0, left: 0, right: 0 }}>
      <div  style={{ maxHeight: '100%', overflowY: 'auto' }}>
        <Box
          p="40px"
          color="black"
          mt="4"
          bg="white"
          rounded="md"
          shadow="md"
          position="relative"
          outlineColor="black"
          border='2px solid gray'
          outline="1"
        >
          <Button
            position="absolute"
            top="5px"
            right="5px"
            onClick={onClose}
            variant="outline"
            bg="transparent"
            colorScheme="red"
          >
            <ImCross/>
            
          </Button>



          {/* Start of the Document */}
          <Box lassName="Header" >
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize="70" mb="1">Hip Implant</Heading>
            <Text color="gray">20/01/2022</Text>
            <Flex justifyContent="flex-start" mt="2">
              {/* <Link href="https://devpost.com/software/slacker-u25lpj" isExternal>
                <Button mr="2" rightIcon={<MdOpenInNew/>} colorScheme='blue' variant="outline">
                    Website
                  </Button>
              </Link>
              <Link href="https://github.com/albertlai431/slacker-chore" isExternal>
                  <Button
                    leftIcon={<FaGithub />}
                    bgColor="#333"
                    textColor="white"
                    variant="outline"
                    _hover={{ bgColor: 'white', textColor: 'black' }}
                  >
                    GitHub
                  </Button>
              </Link> */}
              
            </Flex>
          
            {/* <Image mt="5" width="100%"  objectFit="cover" height="400px" borderRadius="10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Color_icon_green.png/640px-Color_icon_green.png"/> */}
          </Box>
          
          <Box className="Introduction" >
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={45} mt="5" mb="">Quick Summary</Heading>
            <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={10} >
              <VStack align="left" maxW={{ base: '100%', md: '60%' }} >
              <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="5" mb="2.5">Problem Statement</Heading>
              <Text textColor="#1A202C" >
              Djimon Hounsou, is a 41-year-old male who has been experiencing constant hip dislocations and pain, hindering his athletic lifestyle. After careful diagnosis, doctors determined hip dysplasia as his underlying condition, leading to the deformation of the acetabulum and femoral head displacement. Considering the condition of his arteritis, I concluded that a full hip replacement would the best course of action for further care. Our team then designed a custom hip implant called the "Companion," specifically tailored to Djimon's needs, aiming to restore his active lifestyle and alleviate the debilitating pain he has endured for so long.

              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} >My Role</Heading>
              <UnorderedList textColor="#1A202C" >
                <ListItem>Created the 3D model for the hip implant in Autodesk Inventor</ListItem>
                <ListItem>Utilized real CAT scans to determine measurement and parameter specifications</ListItem>
                <ListItem>Performed FEA to determine load stability</ListItem>
              </UnorderedList>
              </VStack>
              
            </HStack>
            
          </Box>
          <Box pt="50px" className='Solution'>
            
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30}>Our Solution</Heading>
           
            <Text textColor="#1A202C"  pt="5" width={{base: "100%", sm: "80%"}}>
            <strong>The Companion</strong> is hip implant designed to acount for developmental hip dysplasia through a custom shaped acetabulum cup to better fit the patient's hip socket and increased surface area on the stem shape for better implantation. Our project had a larger focus on reseraching novel materials for improved biocomptibility, reduced cost, and  improved function. 
            The materials that we used are:
            </Text>
            <UnorderedList px="3" textColor="#1A202C" >
                <ListItem><strong>Ti-6Al-4V</strong> for the stem and acetabular cup </ListItem>
                <ListItem><strong>Cross-linked Polyethylene with a Beeswax Additive</strong> for the acetabular lining</ListItem>
                <ListItem><strong>Polyethylenimine with reinforced glass fibers</strong> for the femoral head</ListItem>
                <ListItem><strong>Gold-Platinum Alloy with thermally stable nanocrystallinity</strong> for the femoral headlining</ListItem>
              </UnorderedList>
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="50px" mb="5">Tech Stack</Heading>
          <List textColor="#1A202C" spacing={3}>
            <ListItem>
              <ListIcon as={GoDotFill} color='black' />
              Autodesk Inventor
            </ListItem>
          </List>
          </Box>
          
          <Box className='ShowcaseAndProcess'>
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} pt="50px" mb="5">Showcase</Heading>
          <Text textColor="#1A202C" width={{base: "100%", sm: "80%"}} > 
          To ensure precision and a proper fit, the hip replacement was meticulously modeled using the patient's scan of his right femur. This approach allowed us to achieve better accuracy and tailor the implant specifically to Djimon's anatomy. By utilizing his scan data, we could ensure that the custom-designed implant would seamlessly integrate with his existing bone structure, leading to a more successful and effective hip replacement procedure.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src= {assembly} />
              <Text color="gray">The full assembly of the hip implant</Text>
              </Box>
            </Box>
          

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          The construction of the stem took into account the precise measurements I obtained and the data provided. To verify the accuracy of the stem angle and femoral offset, I referenced a journal article from the New England Journal of Medicine. This research-backed approach ensured that the implant's design adhered to established medical standards and best practices, contributing to a successful and reliable custom hip replacement solution for Djimon.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image width={{base: "100%", sm: "80%"}} src= {stem} />
              <Text color="gray">The femoral stem design</Text>
              </Box>
            </Box>
          

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          Due to hip dysplasia causing a deformed hip socket, we designed the acetabular cup to fit the oval-shaped deformation in our client's acetabulum. This customization was crucial to ensure a snug fit without any empty spaces, thus enabling the implant's forces to be evenly distributed over a larger area. By filling the void and accommodating the unique shape, we aimed to maximize stability and longevity, providing Djimon with an implant that would effectively support his hip joint and improve his overall mobility and comfort.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src={cup} />
            <Text color="gray">The acetabular cup</Text>
            <Image pt="5" width={{base: "100%", sm: "50%"}} src={linning} />
            <Text color="gray">The acetabular lining</Text>

            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          The femoral head consisted of the PEI + reinforced glass polymer on the inside with the ultra wear-resistant gold-plat coating on the outside.          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src= {head} />
            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          The key to ensuring an accurate and comfortable hip implant lies in employing proper techniques and tools to obtain precise measurements for specific parts. Every angle and measurement should be meticulously calculated to minimize any potential discomfort for the client. <br/> <br/> To achieve this level of accuracy, I utilized various methods, including centroids of shapes, intersecting lines, and 3D models provided, allowing me to derive the most accurate measurements that the implant should adhere towards. 
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "50%"}} src= {calc} />
            <Text color="gray">The calcuations done to determie the center point</Text>
            </Box>
          </Box>
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="50px" mb="5">Gallery</Heading>
          <Box pt="5" width={{ base: "100%", sm: "80%" }}>
            <Flex justify="space-between" flexWrap="wrap">
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
                <Image width="100%" src= {print} />
                <Text color="gray" textAlign="center">The 3D prints</Text>
              </Box>
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
                <Image width="100%" src={process} />
                <Text color="gray" textAlign="center">The 3D printing process</Text>
              </Box>
            </Flex>
          </Box>
          <Box pt="5" width={{ base: "100%", sm: "80%" }}>
            <Flex justify="space-between" flexWrap="wrap">
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
                <Image width="100%" src={headscrew} />
                <Text color="gray" textAlign="center">The femoral head</Text>
              </Box>
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
                <Image width="100%" src={stemscrew} />
                <Text color="gray" textAlign="center">The femoral stem</Text>
              </Box>
            </Flex>
          </Box>
          </Box>
          <  Divider py="5" />
    

        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
