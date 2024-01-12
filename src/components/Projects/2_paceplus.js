// SlideEx.js
import React, { useState, useEffect } from 'react';
import { useBreakpointValue, Card, Link, IconButton, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack, Divider} from '@chakra-ui/react';
import { FaGithub, FaPython, FaCircle} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GoDotFill } from "react-icons/go";
import settings from "../images/paceplusplus/paceplusplus_settings.webp"

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
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize="70" mb="1">Pace++</Heading>
            <Text color="gray">20/12/2023</Text>
            <Flex justifyContent="flex-start" mt="2">
              {/* <Link href="https://devpost.com/software/slacker-u25lpj" isExternal>
                <Button mr="2" rightIcon={<MdOpenInNew/>} colorScheme='blue' variant="outline">
                    Website
                  </Button>
              </Link> */}
              <Link href="https://github.com/PacePlusPlus/PacePlusPlus" isExternal>
                  <Button
                    leftIcon={<FaGithub />}
                    bgColor="#333"
                    textColor="white"
                    variant="outline"
                    _hover={{ bgColor: 'white', textColor: 'black' }}
                  >
                    GitHub
                  </Button>
              </Link>
              
            </Flex>
          
            {/* <Image mt="5" width="100%"  objectFit="cover" height="400px" borderRadius="10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Color_icon_green.png/640px-Color_icon_green.png"/> */}
          </Box>
          
          <Box className="Introduction" >
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={45} mt="5" mb="">Quick Summary</Heading>
            <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={10} >
              <VStack align="left" maxW={{ base: '100%', md: '60%' }} >
              <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="5" mb="2.5">Problem Statement</Heading>
              <Text textColor="#1A202C" >
                How might we develop a minimum viable pacemaker prototype that covers all of the main features of pacemaker software today. Pace++ is a simulated pacemaker built to visually and functionally represent the various functions of modern pacemakers today. The following project is based of Boston Scientific's pacemaker specifications alongside implementing 8 of their defined pacemaker pacing modes, a real time electrocaridiogram display, and local encrypted user data storage. 
              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} >My Role</Heading>
              <UnorderedList textColor="#1A202C" >
                <ListItem>Created the desktop graphical user interface for all frontend interacts</ListItem>
                <ListItem>Utilzed MATLAB Simulink to create the serial communication between the desktop and the K64F board</ListItem>
                <ListItem>Developed the backend for displaying user data, simulated pacing data, and storing user information</ListItem>
              </UnorderedList>
              </VStack>
              
            </HStack>
            <Box pt="10" width={{base: "100%", sm: "50%"}}>
              <Box align="center">
              <Image src="https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/K64F-Board.jpg" />
              <Text color="gray">The NXP FRDM K64F board </Text>
              </Box>
            </Box>
          </Box>
          <Box pt="50px" className='Solution'>
            
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30}>Our Solution</Heading>
           
            <Text textColor="#1A202C"  pt="5" width={{base: "100%", sm: "80%"}}>
            <strong>Pace++</strong> is a simulated pacemaker designed with python and MATLAB Simulink. The front-end of the project was designed and developed by my subteam where we created the GUI and dealt with the connection between the STM32 board and the python script.  

            <br/><br/>
            Our pacemaker design utilized a board that simulated the heart's electrical pulses, through this board, we created 8 unique modes to pace different aspects aspects and conditions of heart disease. These modes pace the atrium or ventricle at either fixed rates, uneven intervals, or during physical activity through the in-built accelerometer. 
            The python script then displays the electrical signals real-time to a doctor using to software, allowing him to make fine adjusted per each individual patient.  
            </Text>
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="50px" mb="5">Tech Stack</Heading>
          <List textColor="#1A202C" spacing={3}>
            <ListItem>
              <ListIcon as={FaPython} color='black' />
              Python
            </ListItem>
            <ListItem>
              <ListIcon as={FaPython} color='black' />
              Custom Tkinter
            </ListItem>
            <ListItem>
              <ListIcon as={GoDotFill} color='black' />
              Matlab Simulink
            </ListItem>
            <ListItem>
              <ListIcon as={GoDotFill} color='black' />
              NXP FRDM K64F Board
            </ListItem>
          </List>
          </Box>
          
          <Box className='ShowcaseAndProcess'>
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} pt="50px" mb="5">Showcase</Heading>
          <Text textColor="#1A202C" width={{base: "100%", sm: "80%"}} > 
          Through python's tkinter, we created a secure interface that allows for the modification of the pacemaker. Our GUI allows for:
         </Text>
              <UnorderedList px="3" textColor="#1A202C" >
                <ListItem>Real-time display of the simulated heartbeat</ListItem>
                <ListItem>Patient data to be saved and modified</ListItem>
                <ListItem>Encryption of patient data</ListItem>
                <ListItem>Serial communication to the K64F board </ListItem>
                <ListItem>Dark and light modes </ListItem>
              </UnorderedList>
            <Text>
              The login screen utilizes a dictionary to separate user data involving both for login and pacemaker parameters, collects information on the current board serial number, and collects information on login times.
            </Text>
            <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src="https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/IntroScreen-Dark.png"/>
              <Text color="gray">The dark mode version of the login page</Text>
              </Box>
            </Box>
            <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src="https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/IntroScreen-Light.png"/>
              <Text color="gray">The light mode version of the login page</Text>
              </Box>
            </Box>
          
          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
              After logining in the "doctor" is given a screen that display most of the important information first, such as three graphs showcasing the electrocardiograph reading. The pacemaker GUI
              also showcases allows the doctor to start, stop, and change the pacemaker options -- where each of these option directly send a packet to the board to perform their specific task. 
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image width={{base: "100%", sm: "80%"}} src="https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/EgramScreen1.png"/>
              <Text color="gray">The main page displaying the graphical data</Text>
              </Box>
            </Box>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "60%"}} src={settings}/>
            <Text color="gray">The options menu to change specific pacemaker values</Text>
            </Box>
          </Box>
          
          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          For the backend, we utilized MATLAB Simulink to not only take in the simulated heart pacing data but also to perform actions upon it using the parameters the doctor choses to set in the options menu.
          In our workflow, there are a couple of major parts:
          </Text>
          <OrderedList px="3" textColor="#1A202C">
            <ListItem>We take in the simulated heart signals and parameter data sent over from the python GUI, if no parameter data is sent over then it defaults to values specified in Boston Scientific's specification sheet. </ListItem>
            <ListItem>Through the accelerometer, we calculate the derivative of motion to determine if the users activity is increasing or decreasing. Since your heart beats faster as you exercise, it is important to account for making the pacemaker pulse faster.  </ListItem>
            <ListItem>Utilzing the input parameters, we can calculate certain formulas to define specific heart behaviours and through 8 unique pacing modes these parameters are used to pace the simulated heart</ListItem>
          </OrderedList>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src="https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/Simulink1.jpg"/>
            <Text color="gray">General overview of the simulink stateflow</Text>
            <Image pt="5" width={{base: "100%", sm: "80%"}} src="https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/Simulink3.jpg"/>
            <Text color="gray">Overview of parameter processing</Text>
            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          In our pacemaker we have 8 different modes that perform certain functions: 
          </Text>
          <OrderedList px="3" textColor="#1A202C">
            <ListItem>AOO, fixed pacing of the atrium</ListItem>
            <ListItem>VOO, fixed pacing of the ventricle</ListItem>
            <ListItem>AAI, irregular pacing of the atrium</ListItem>
            <ListItem>VVI, irregular pacing of the ventricle</ListItem>
            <ListItem>Rate adaptive modes for each of the modes above</ListItem>
          </OrderedList>
          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 

          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src="https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/Simulink2.jpg"/>
            <Text color="gray">Overview of pacemaker pacing modes</Text>
            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          To test and validate our pacemaker mode function, we employed Heartview, a McMaster created cardiac simulation tool that was pre-flashed onto our board.   
          </Text>
          
          </Box>
          <  Divider py="5" />
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="5">Credits</Heading>
          <Box pt="5" px="4">
          <Link href="https://www.linkedin.com/in/christopher-nazarian-66394016a/" isExternal color="#008CC9"><Text>Christopher Nazarian</Text></Link>
          <Link href="https://www.linkedin.com/in/himanshu-singh-99470b207/" isExternal color="#008CC9"><Text>Himanshu Singh</Text></Link>
          <Link href="https://www.linkedin.com/in/mathew-galuszka-151bb1231/" isExternal color="#008CC9"><Text>Matthew Galuszka</Text></Link>
          <Link href="https://www.linkedin.com/in/shaan-suthar/" isExternal color="#008CC9"><Text>Shaan Suthar</Text></Link>
          <Link href="https://www.linkedin.com/in/varun-ram/" isExternal color="#008CC9"><Text>Varun Kothandaraman</Text></Link>
          <Link href="https://www.linkedin.com/in/shivan-gaur/" isExternal color="#008CC9"><Text>Shivan Guar</Text></Link>
          </Box>
          



        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
