// SlideEx.js
import React, { useState, useEffect } from 'react';
import { useBreakpointValue, Card, Link, IconButton, CardBody, Stack, Grid, GridItem, Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack, Divider} from '@chakra-ui/react';
import { FaGithub, FaReact} from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { SiChakraui } from "react-icons/si";
import {MdOpenInNew} from "react-icons/md"
import { IoLogoFirebase } from "react-icons/io5";


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
              <Image src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/d4ef78c1-14de-495e-835b-826f1c74d99d/Untitled.png?id=53ac56bf-8cd9-40b9-851b-b5f18864e6e8&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=1JmDZZFJ4KGIGH4-mMGyxjhlAsRyi6-G194VmKq__qc&downloadName=Untitled.png" />
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
              <Image src="https://i.imgur.com/IReKvbh.png"/>
              <Text color="gray">The original mobile mockup in figma</Text>
              </Box>
            </Box>
          

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          After creating the mobile mockup, we quicly realized that we did not have enough time to continue with a react native application. From the mobile design that I created, we pivoted to a standard react-app that switches between dark and light modes. This was the project that got me into graphic design and learning how to make pages look user-friendly, if I were to redo the page, I would definetly change up the layout and make it simpler to understand.</Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
              <Box align="center">
              <Image width={{base: "100%", sm: "80%"}} src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/71021491-531d-437e-9bdb-a389a586b53f/Untitled.png?id=e46f325b-b362-4be1-b301-6b20983c7add&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=nIX9e0GObQDAFZsHjZIukgaQ7TEzKB4AJenJx_dKfQw&downloadName=Untitled.png"/>
              <Text color="gray">The web application login-page in light mode</Text>
              </Box>
            </Box>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/92e6c474-d001-420e-91b5-c4a27a7a513b/Untitled.png?id=f2af8b57-8406-4771-a8b2-33634e45b2e9&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=3n-SufLpC_CpE7999r6KS5RdwcYgZITMavY5KjBRfmY&downloadName=Untitled.png"/>
            <Text color="gray">The web application login-page in dark mode</Text>
            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          For user authentication and account sign-up our website integrates google authentication for seamless sign-in through firebase, providing a secure and efficient login process. Users can create groups easily and invite others through their respective email addresses. This enhances collaboration between users and simplifies the process of expanding group membership.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/e80b2f36-45b5-41a8-b809-68b8d8f54bb6/Untitled.png?id=122a2ff8-be7e-4466-a5c2-48aaceb0db4f&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=_jcetZgxInaIcFBcAqXpqLXFRcFiXSLjcqAgxliwMxg&downloadName=Untitled.png"/>
            <Text color="gray">The user authentication workflow</Text>
            <Image pt="5" width={{base: "100%", sm: "50%"}} src="https://i.imgur.com/yAOaD8H.png"/>
            <Text color="gray">Signed in user display</Text>

            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
          In our app, "My Tasks" becomes your personal hub for seamless teamwork. Tasks flow seamlessly from group sections, getting randomly assigned to ensure a fair workload distribution for everyone.          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/7dd23320-2bcf-4950-90db-e1f51cd1d5a1/Untitled.png?id=1eca7f2b-14bd-4980-94c2-8f7a998703bf&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=PnwksBXi5wARAH1VYLkQsOtbBImksDgixzUodFcutB8&downloadName=Untitled.png"/>
            </Box>
          </Box>

          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
            Comming off of the "My Tasks," the user is able to select 2 other additional options with the aim of editing user to user interactions. The "Group Tasks" page display a list of all avaiable tasks that are too be completed in the entire group, in our case this reflects the total household chores for our house. User's additionally have the option of 
            adding new tasks and setting their frequency, with the application automatically assigning tasks to group constituents. <br/><br/>
            The "Settings" page allows the user to either create a group or join an existing group through their email IDs. Once you join a group, you will be able to view all the group members, including the "Slacker," who is assigned the least amount of tasks. This feature encourages active participation and accountability within the group, ensuring a fair distribution of tasks and promoting a sense of teamwork and productivity.   
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "80%"}} src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/cb00fd84-2aa9-4102-9566-ad80306c3219/Untitled.png?id=6541c255-2fb6-41eb-ae08-bc196568d10a&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=UzUEgTF8x10-smzKkKkjLC73ANtUNVTwegpghbOwfZI&downloadName=Untitled.png"/>
            <Text color="gray">The group tasks page</Text>
            <Image pt="5" width={{base: "100%", sm: "80%"}} src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/bc14347c-70a5-42f0-8130-c07badd4ef46/Untitled.png?id=3ed8c062-d7cc-46d3-8ef5-a303c785db35&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=yoa4GWVmwXv2BljqkN8eIoLM3d7pMOYpv0xtrGbkUHE&downloadName=Untitled.png"/>
            <Text color="gray">The settings page</Text> 
            </Box>
          </Box>


          <Text textColor="#1A202C" pt="50px" width={{base: "100%", sm: "80%"}} > 
            During this project I took a stab at attempting logo and brand design, and learned valuable lessons about the power of visual communication.
          </Text>
          <Box pt="5" width={{base: "100%", sm: "80%"}}>
            <Box align="center">
            <Image width={{base: "100%", sm: "50%"}} src="https://file.notion.so/f/f/aef57990-2eec-4dbc-93ca-1d0ebf799a2e/36b4a1be-ee8f-4167-9d5a-d4e35e50d9e3/Untitled.png?id=0bf1f213-24d8-4a64-990f-27636d1b4477&table=block&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&expirationTimestamp=1704261600000&signature=39akWj7YLiVbDLrdUOkKI_5dznaO6WlcSYm8Go7tNFI&downloadName=Untitled.png"/>
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
