// SlideEx.js
import React, { useState, useEffect } from 'react';
import { useBreakpointValue, Card, Link, IconButton, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack, Divider} from '@chakra-ui/react';
import PDFViewer from "../images/heatsink/HeatSinkDrawing"

import { FaGithub, FaReact, FaGitAlt} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { SiChakraui } from "react-icons/si";
import {MdOpenInNew} from "react-icons/md"
import { IoLogoFirebase } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { SiAutodesk } from "react-icons/si";

import multiview from "../images/heatsink/heatsink_multiview.jpg"
import heatsinkDrawing from "../images/heatsink/Heat_Sink_Drawing_Package.pdf"

import myTask from "../images/slacker/slacker_chores_myTaskpng.png"
import group from "../images/slacker/slacker_chores_group.png"
import settings from "../images/slacker/slacker_chores_settings.png"
import logo from "../images/slacker/slacker_chores_logo.png"

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
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize="70" mb="1">Heatsink Design</Heading>
            <Text color="gray">15/11/2023</Text>
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
              As a part of a design challenge, my partner and I tasked ourselves with creating a custom cpu heatsink that performed better than an engineering drawing we were provided as an example. 
              Utilizing concepts of thermodynamics; I created a more efficient natural convection heatsink, the simulations used to test efficacy, the methods of manufacturing, and future areas of improvement.   

              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} >My Role</Heading>
              <UnorderedList textColor="#1A202C" >
                <ListItem>Modelled the different root, stem, and shape iterations for the heatsink design</ListItem>
                <ListItem>Conducted simulations to test design iterations</ListItem>
                <ListItem>Researched various concepts relating to heatsink design and fluid thermodynamics </ListItem>
                <ListItem>Researched various methods of manufacturing </ListItem>
              </UnorderedList>
              </VStack>
              
            </HStack>
            <Box pt="10" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src={multiview} />
              <Text color="gray">The final design multiview</Text>
              </Box>
            </Box>
          </Box>
          <Box pt="50px" className='Solution'>
            
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30}>Our Solution</Heading>
           
            <Text textColor="#1A202C"  pt="5" width={{base: "100%", sm: "80%"}}>
            <strong>For our design,</strong> we utilized the motion of air, to create a more efficient cpu cooler. In our case, we were able to lower the maximum temperature of the heatsink from <strong>198 C → 132 C</strong> between the first and the last designs that we created.  
            <br/><br/>
            With our main goal being to reduce the temperature as much as possible, we decided to set our heatsink material to copper alongside creating our design with injection molding in mind. Throughout our entire process, <strong>our main focus was the movement of hot air throughout our entire heatsink from top to bottom.</strong>   
            
            </Text>
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="50px" mb="5">Tech Stack</Heading>
          <List textColor="#1A202C" spacing={3}>
            <ListItem>
              <ListIcon as={SiAutodesk} color='black' />
              Autodesk Fusion360
            </ListItem>
            <ListItem>
              <ListIcon as={GoDotFill} color='black' />
              Thermodynamic Design
            </ListItem>
            <ListItem>
              <ListIcon as={GoDotFill} color='black' />
              Manufacturing Design
            </ListItem>
            <ListItem>
              <ListIcon as={FaGitAlt} color='black' />
              Git
            </ListItem>
          </List>
          </Box>
          
          <Box className='ShowcaseAndProcess'>
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} pt="50px" mb="5">Showcase</Heading>
          <Text textColor="#1A202C" width={{base: "100%", sm: "80%"}} > 
            To begin, our first challenge was to answer the question: <strong>"how do we start to design a heatsink?"</strong> <br/> <br/>
            
            Modern heatsink designs for most cpu's generally involved the several types; natural convection, ones that utilize fans, one that use liquid cooling, or ones that utilize additive manufacturing to create a structure that guides air through a specific path to cool the overall structure. <br/> <br/>

            Since our design challenge specifically defined natural convection, only still air with no fans or liquids, the main area that we had to focus on was the movement of hot air through the heatsink. In our research, we found that for natural convection situations a tree like structure is the most optimal design.  <br/> <br/>

            In an  <Link href="https://www.sciencedirect.com/science/article/pii/S0196890421007846" isExternal color="#008CC9"> article written by Ho et al</Link>, using topology optimization and additive manufacturing, they found that a tree-like structure resulted in a better thermal performance to dissipate heat from a chip. 
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src="https://ars.els-cdn.com/content/image/1-s2.0-S0196890421007846-gr2.jpg"/>
              <Text color="gray">Topology-optimized structures developed based on two-dimensional steady state heat transfer at T0 of (a) 30 °C, (b) 50 °C, and (c) 80 °C.</Text>
              </Box>
            </Box>
          
          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
            In another <Link href="https://www.tandfonline.com/doi/full/10.1080/01457632.2021.1919972" isExternal color="#008CC9"> article written by Han-Ling Li et al</Link>, utilized a blackbox topology optimization simulation to create additional designs for natural convection problems:
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
               <PDFViewer/>>
              </Box>
            </Box>


          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
            From our research, we identified what we wanted to solve and the type of structure that we wanted to create in our design. In our case, we modelled a heatsink design that we sourced from McMaster Ecocar.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
                  <iframe  src={heatsinkDrawing} type="application/pdf" width="100%" height="600px" />
                  <Text color="gray">Designs, temperature fields, and velocity fields obtained by Han-Ling Li et al</Text>
              </Box>
          </Box>


          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          In our app, "My Tasks" becomes your personal hub for seamless teamwork. Tasks flow seamlessly from group sections, getting randomly assigned to ensure a fair workload distribution for everyone.          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src={myTask}/>
            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
            Comming off of the "My Tasks," the user is able to select 2 other additional options with the aim of editing user to user interactions. The "Group Tasks" page display a list of all avaiable tasks that are too be completed in the entire group, in our case this reflects the total household chores for our house. User's additionally have the option of 
            adding new tasks and setting their frequency, with the application automatically assigning tasks to group constituents. <br/><br/>
            The "Settings" page allows the user to either create a group or join an existing group through their email IDs. Once you join a group, you will be able to view all the group members, including the "Slacker," who is assigned the least amount of tasks. This feature encourages active participation and accountability within the group, ensuring a fair distribution of tasks and promoting a sense of teamwork and productivity.   
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src={group}/>
            <Text color="gray">The group tasks page</Text>
            <Image pt="5" width={{base: "100%", sm: "80%"}} src={settings}/>
            <Text color="gray">The settings page</Text> 
            </Box>
          </Box>


          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
            During this project I took a stab at attempting logo and brand design, and learned valuable lessons about the power of visual communication.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "50%"}} src={logo}/>
            <Text color="gray">The logo mockups</Text>   
            </Box>
          </Box>
          </Box>
          <  Divider py="5" />
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="5">Credits</Heading>
          <Box pt="5" px="4">
          <Link href="https://www.linkedin.com/in/albertlai631/" isExternal color="#008CC9"><Text>Albert Lai</Text></Link>
          <Link href="https://www.linkedin.com/in/hady-ibrahim/" isExternal color="#008CC9"><Text>Hady Ibrahim</Text></Link>
          <Link href="https://www.linkedin.com/in/varun-ram/" isExternal color="#008CC9"><Text>Varun Kothandaraman</Text></Link>
          </Box>
          



        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
