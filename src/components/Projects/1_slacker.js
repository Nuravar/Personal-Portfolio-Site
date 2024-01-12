// SlideEx.js
import React, { useState, useEffect } from 'react';
import { useBreakpointValue, Card, Link, IconButton, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack, Divider} from '@chakra-ui/react';
import { FaGithub, FaReact} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { SiChakraui } from "react-icons/si";
import {MdOpenInNew} from "react-icons/md"
import { IoLogoFirebase } from "react-icons/io5";

import slacker_chores_depost from "../images/slacker/slacker_chores_depost.png"
import mobile from "../images/slacker/slacker_chores_mobile_mockup.png"
import light from "../images/slacker/slacker_chores_light.png"
import dark from "../images/slacker/slacker_chores_dark.png"
import auth from "../images/slacker/slacker_chores_auth.png"
import login from "../images/slacker/slacker_chores_loggedin.png"
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
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize="70" mb="1">Slacker Chores</Heading>
            <Text color="gray">13/01/2023</Text>
            <Flex justifyContent="flex-start" mt="2">
              <Link href="https://devpost.com/software/slacker-u25lpj" isExternal>
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
              Shared housing often presents a challenge when it comes to organizing chores and ensuring everyone contributes equally. Without clear instructions, many students struggle to maintain a proper work-life balance and may forget their assigned chores.

              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} >My Role</Heading>
              <UnorderedList textColor="#1A202C" >
                <ListItem>Created the UI design for desktop and mobile mockups in Figma</ListItem>
                <ListItem>Created the desktop landing page and a variety of subpage layouts</ListItem>
                <ListItem>Bug-tested the final react-app</ListItem>
              </UnorderedList>
              </VStack>
              
            </HStack>
            <Box pt="10" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src={slacker_chores_depost} />
              <Text color="gray">The winning banner over our devpost</Text>
              </Box>
            </Box>
          </Box>
          <Box pt="50px" className='Solution'>
            
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30}>Our Solution</Heading>
           
            <Text textColor="#1A202C"  pt="5" width={{base: "100%", sm: "80%"}}>
            <strong>Slacker</strong> is a web-app designed to streamline household chores for users. By joining a household group, members access a comprehensive task list, and the app automatically assigns tasks to each member within the group. This ensures a more organized and efficient distribution of responsibilities.

            <br/><br/>
            My two roommates and I won the "best productivity app" category at the <Link href="https://www.eng.mcmaster.ca/ibiomed/" isExternal color="#008CC9"> Deltahacks  </Link> 
            hackathon, earning us an <Link href="https://www.delonghi.com/en-ca/manual-espresso-machine-ecp3220/p/ECP3220" isExternal color="#008CC9"> espresso machine  </Link> as a prize. We are excited about our success and are now determined to develop the full version of our app, with plans to publish it on mobile app stores in the near future.
            </Text>
            <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} mt="50px" mb="5">Tech Stack</Heading>
          <List textColor="#1A202C" spacing={3}>
            <ListItem>
              <ListIcon as={FaReact} color='#61dbfb' />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={IoLogoFirebase} color='#FFCE36' />
              Firebase
            </ListItem>
            <ListItem>
              <ListIcon as={SiChakraui} color='#55C9C6' />
              Chakra-ui
            </ListItem>
          </List>
          </Box>
          
          <Box className='ShowcaseAndProcess'>
          <Heading textColor="#1A202C" fontFamily="Clashgrotesk, sans-serif;" fontSize={30} pt="50px" mb="5">Showcase</Heading>
          <Text textColor="#1A202C" width={{base: "100%", sm: "80%"}} > 
          Our mobile application began with an initial set of mockups that served as the foundation for the website's design. We derived the majority of styling elements for the website from the CSS data provided by Figma, ensuring consistency between both platforms. Additionally, the mobile application incorporates our future ideas and features that we plan to implement as the project progresses. 
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image src={mobile}/>
              <Text color="gray">The original mobile mockup in figma</Text>
              </Box>
            </Box>
          

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          After creating the mobile mockup, we quickly realized that we did not have enough time to continue with a react native application. From the mobile design that I created, we pivoted to a standard react-app that switches between dark and light modes. This was the project that got me into graphic design and learning how to make pages look user-friendly, if I were to redo the page, I would definetly change up the layout and make it simpler to understand.</Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image width={{base: "100%", sm: "80%"}} src={light}/>
              <Text color="gray">The web application login-page in light mode</Text>
              </Box>
            </Box>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src={dark}/>
            <Text color="gray">The web application login-page in dark mode</Text>
            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          For user authentication and account sign-up our website integrates google authentication for seamless sign-in through firebase, providing a secure and efficient login process. Users can create groups easily and invite others through their respective email addresses. This enhances collaboration between users and simplifies the process of expanding group membership.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src={auth}/>
            <Text color="gray">The user authentication workflow</Text>
            <Image pt="5" width={{base: "100%", sm: "50%"}} src={login}/>
            <Text color="gray">Signed in user display</Text>

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
