// SlideEx.js
import React, { useState, useEffect } from 'react';
import { useBreakpointValue, Card, Link, IconButton, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack, Divider} from '@chakra-ui/react';
import { FaGithub, FaPython, FaReact} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { SiChakraui } from "react-icons/si";
import {MdOpenInNew} from "react-icons/md"
import { IoLogoFirebase } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";


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
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize="70" mb="1">Easy Click</Heading>
            <Text color="gray">13/02/2022</Text>
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
              Our project involved creating a wearable device with sensors to assist people with disabilities or diseases in accomplishing home tasks more easily. We identified the market of individuals who struggle with fine motor skills and are unable to operate a mouse effectively with their hands. To address this challenge, we developed "EasyClick," an intuitive alternative to the traditional mouse. EasyClick maps head movements to control the mouse, enabling users to seamlessly navigate their online activities. 

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
            <Box pt="10"  width={{base: "100%", sm: "50%"}}>
              <Box align="center">
              <Image src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F96759434-36d6-40cc-a3c5-1fac2de5214c%2Feayclicl.png?table=block&id=8eb7a19f-ab02-4e98-b144-6f51e417cad4&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&width=2000&userId=356f44a9-6602-45d9-8f96-d0771f73cca3&cache=v2" />
              <Text color="gray">Our physical prototype</Text>
              </Box>
            </Box>
          </Box>
          <Box pt="50px" className='Solution'>
              
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30}>Our Solution</Heading>
           
            <Text textColor="#1A202C"  pt="5" width={{base: "100%", sm: "80%"}}>
            Our wearable device <strong>EasyClick</strong>, serves as a small Bluetooth earpiece that functions as a mouse. It incorporates an orientation sensor, the BNO055, to translate head movements into mouse movements. Tilting the head from the rest position moves the mouse in all directions, while tilting left or right simulates left and right mouse clicks. Placing a hand over the device activates the scrolling feature.  <br/> 
            For our minimal viable product (MVP), I utilized a Raspberry Pi alongside a 3D printed case to mimic all of the required functions that a normal mouse would be able to accomplish.<br/> <br/> Our MVP uses the following components:
            </Text>
            <UnorderedList px="3" textColor="#1A202C" >
                <ListItem>BNO055 Orientation Sensor</ListItem>
                <ListItem>VL53L0X Time-of-Flight Sensor</ListItem>
                <ListItem>LEDs</ListItem>
                <ListItem>A button for scroll functionality</ListItem>
              </UnorderedList>
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="50px" mb="5">Tech Stack</Heading>
          <List textColor="#1A202C" spacing={3}>
            <ListItem>
              <ListIcon as={FaPython} color='black' />
              Python
            </ListItem>
            <ListItem>
              <ListIcon as={GoDotFill} color='black' />
              Autodesk Inventor
            </ListItem>
            <ListItem>
              <ListIcon as={GoDotFill} color='black' />
              Raspberry Pi
            </ListItem>
          </List>
          </Box>
          
          <Box className='ShowcaseAndProcess'>
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} pt="50px" mb="5">Showcase</Heading>
          <Text textColor="#1A202C" width={{base: "100%", sm: "80%"}} > 
          The Raspberry Pi and breadboard were essential tools for building a computing prototype. Through code development, we effectively translated sensor data into various functions. These functions encompassed tasks like computing the rolling average by averaging data, writing sensor data to a text file, and reading from the text file to analyze the data.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/37305704-c006-4740-b0ea-af3cb8026cfb/Untitled.png?id=6232f79b-c369-4b16-9735-abe1bf07d572&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=Ax7UxojG2TWomw0KA6N0XO5FbP3M0yVUEN1rMO3cTVE&downloadName=Untitled.png"/>
              <Text color="gray">The full breadboard assembly of the mouse device</Text>
              </Box>
          </Box>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/cc0eb041-14f5-4de2-a7e1-b24c9b37d31f/Untitled.png?id=88d71aae-3fc3-4f7b-82ce-c59cd1793f88&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=ANwtyYju5SSzxwHXRHL2reoaixsS-MIB3eA_zhhObwc&downloadName=Untitled.png"/>
              <Text color="gray">A closeup of the breadboard</Text>
              </Box>
          </Box>
          <Box pt="5" width={{ base: "100%", sm: "80%" }}>
            <Flex justify="space-between" flexWrap="wrap">
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
                <Image width="100%" src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/c77061c2-cc5d-48ef-ba3e-8f59c9240d14/Untitled.png?id=905d2a3b-7020-4c2f-ad50-2abfbd3747d3&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=3NupycP5NB9iliam2fQEJ7VFn8hrh2wukjoldlMz3A0&downloadName=Untitled.png" />
                <Text color="gray" textAlign="center">The physical prototype</Text>
              </Box>
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
              <Image src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/8f54caae-1754-4fab-9703-9fc9f45613e7/FinalAssembly.png?id=8f2456ff-0f04-4a2e-9929-10b0da1dcf3a&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=69xQIOMSgfPAJqhq3_vObwoP4F2eE_atL2BAdmIThDI&downloadName=FinalAssembly.png"/>
              <Text color="gray">A full rendered assembly of the EasyClick prototype</Text>
              </Box>
            </Flex>
          </Box>
          <Box pt="5" width={{ base: "100%", sm: "80%" }}>
            <Flex justify="space-between" flexWrap="wrap">
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
                <Image width="100%" src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/88295c41-922d-41eb-9043-740deebf2799/PiHousing.png?id=42303397-d23d-4da9-ad4f-7a469422c1bb&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=AqH6OTykaz_CurrFGBy7fXLFbWfSeHlEulXZxgQRcqs&downloadName=PiHousing.png" />
                <Text color="gray" textAlign="center">The raspberry pi housing</Text>
              </Box>
              <Box flexBasis={{ base: "100%", sm: "48%" }}>
              <Image src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/36537be8-6627-4260-9417-37f224d8e6f4/SensorFrame.png?id=3902014e-38a3-488c-9bef-e5195b1df739&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=KuHSmkqWuVHkNCRScVfb8BYaqEvgZ4f2tFkc8q_nqH8&downloadName=SensorFrame.png"/>
              <Text color="gray">The BNO055 sensor housing</Text>
              </Box>
            </Flex>
          </Box>
          <Box pt="5" width={{base: "100%", sm: "60%"}}>
              <Box align="center">
              <Image src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/3ef42509-04e8-42d3-a976-7c31140fb98c/Untitled.png?id=9796f580-47ee-4f9a-b398-7f5c8fbfaffb&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=kP4dZxzslGsiZ3MLfNjqH-Y8iXXMz_MWqznE15zNKDc&downloadName=Untitled.png"/>
              <Text color="gray">The BNO055 sensor display data based off euler coordinates, this data was processed through an averaging function</Text>
              </Box>
          </Box>
          <Text textColor="#1A202C"  pt="5" width={{base: "100%", sm: "80%"}}>
            As I was creating an accessibility device, it was important to understand that not all paraplegics have the same range of motion in their necks. Therefore, it was important to add a sensitivity feature to allow for user customization.
            </Text>
          <Box pt="5" width={{base: "100%", sm: "60%"}}>
              <Box align="center">
              <Image src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/9584b815-e47f-4ba3-9bc9-cae3af467d55/Untitled.png?id=bf84185c-4d62-4fda-b085-bb335bf748f0&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704434400000&signature=-_2dRIH6dMxAjkGdgCIF2JbOBqcpVOSrTgfGa_GQK7E&downloadName=Untitled.png"/>
              <Text color="gray">The tkinter GUI</Text>
              </Box>
          </Box>
          
          </Box>
          <  Divider py="5" />
    

        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
