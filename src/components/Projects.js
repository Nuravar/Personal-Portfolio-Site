import React, { useState, useEffect } from 'react';
import { Flex, Stack, VStack, Grid, GridItem, Box, Heading, Text, HStack, useBreakpointValue, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import './Projects.css';
import GithubCard from './Github-Card'
import ExtendedProjects from './Extended_Projects';


const repoNames = [
  {
    name: 'albertlai431/slacker-chore'
  },
  {
    name: 'PacePlusPlus/PacePlusPlus'
  },
  {name: 'Nuravar/Personal-Portfolio-Site'},
];



/*-------------------------------------------*/



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSlideExVisible, setSlideExVisible] = useState(false);
    const columns = useBreakpointValue({ base: 1, md: 2 }); // 1 column for mobile, 2 columns for desktop

    const handleButtonClick = (event, project) => {
        event.preventDefault(); // Prevent the default behavior (scrolling to the top)
      
        setSelectedProject(project);
        setSlideExVisible(true);
    };
  
    const handleCloseSlideEx = () => {
      setSelectedProject(null);
      setSlideExVisible(false);
    };
  
  
    
    return (
      <Flex justify="flex-start" width="100%" padding={{ base: '10', sm: '10' }} paddingBottom={0}>
        <VStack align="flex-start" spacing="5" width="100%">
          
          <Heading paddingX={0} id="projects" fontFamily="Clashgrotesk, sans-serif;">
            Projects
          </Heading>

          

          <Text fontWeight="regular" paddingX={3}>Click the Arrows to See More</Text>


        <ExtendedProjects  />

          <VStack spacing={4} align="center" p={4} w = '100%'>
            <Grid
              templateColumns={`repeat(${columns}, 1fr)`}
              gap={4}
              w="100%"
            >
              {repoNames.map((repo) => (
                <GridItem key={repo.name}>
                  <GithubCard repoName={repo.name} />
                </GridItem>
              ))}
            </Grid>
          </VStack>
         
          
          <Divider />
        </VStack>
      </Flex>
    );
  };
  
  export default Projects;
  
