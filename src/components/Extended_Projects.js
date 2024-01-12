import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Stack, VStack, Grid, GridItem, Box, Heading, Text, HStack, useBreakpointValue, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import './Projects.css';
import SlideEx1 from './Projects/1_slacker';
import SlideEx2 from './Projects/2_paceplus';
import SlideEx3 from './Projects/3_heatsink';
import SlideEx4 from './Projects/4_hipimplant';
import SlideEx5 from './Projects/5_easyclick';
import SlideEx6 from './Projects/6_ostagami';
import SlideEx7 from './Projects/7_pressurevest';
import SlideEx8 from './Projects/8_unitygame';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos, MdCircle } from "react-icons/md";
import { motion } from "framer-motion";
import slackerCover from "./images/slacker/slacker_chores_cover.png"
import heatsinkCover from "./images/heatsink/heatsink_cover.jpg"
import hipCover from "./images/hipimplant/hipimpantCover.png"

const project1_image= heatsinkCover
const project2_image= slackerCover
const project3_image= "https://github.com/PacePlusPlus/PacePlusPlus/raw/main/Images/K64F-Board.jpg"
const project4_image= hipCover
const project5_image= "https://i.imgur.com/FhWsw41.png"
const project6_image= "https://i.imgur.com/XeGHEU0.png"
const project7_image= "https://i.imgur.com/RpJzjGy.png"
const project8_image= "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb27145b5-9ba3-4f9b-bf03-eaf24e01d4b8%2Feterniusprime.png?table=block&id=de3463b7-b454-4ace-95a7-afc72b9d35e5&spaceId=aef57990-2eec-4dbc-93ca-1d0ebf799a2e&width=2000&userId=356f44a9-6602-45d9-8f96-d0771f73cca3&cache=v2"
const projects = [
  
  {
    name: 'Slacker Chores',
    image: project2_image,
    description: 'Slacker, our winning hackathon app, tackles shared-housing chaos! It auto-assigns chores, streamlining routines and achieving work-life balance for busy students. ',
    tags: [['Winner', "yellow"], ['Hackathon', "facebook"], ['Full Stack', "blue"]],
  },
  {
    name: 'Pace++',
    image: project3_image,
    description: 'With code-generated visuals and a secure interface, Pace++ puts the complex world of pacemakers in your hands. Explore 7 modes, visualize heartbeats, and explore how our pacemaker keeps hearts ticking.',
    tags: [['Python', "pink"], ['Simulink', "purple"], ['Embedded', "cyan"]],
  },
  {
    name: 'Heatsink Project',
    image: project1_image,
    description: 'Tackled thermodynamics as a rookie engineers, crafting and testing dozens of heatsinks designs for optimal CPU cooling. We navigated design constraints of efficiency, cost, and feasibility to present innovative solutions.',
    tags: [['CAD', "red"], ['Design', "orange"], ['Materials', "green"]],
  },
  {
    name: 'Hip Implant',
    image: project4_image,
    description: 'Designed a custom hip implant (Companion) for athlete Djimon Hounsou to combat debilitating hip dysplasia, ensuring a pain-free, active future.',
    tags: [['CAD', "red"], ['Design', "orange"], ['Biomedical', "blue"]],
  },
  {
    name: 'Easy Click',
    image: project5_image,
    description: 'EasyClick earpiece uses head movements to control the mouse, empowering individuals with limited fine motor skills to navigate their online world with ease.',
    tags: [['Python', "pink"], ['Design', "orange"], ['Biomedical', "blue"]],
  },
  {
    name: 'Ostagami',
    image: project6_image,
    description: "Ostogami's modular, foldable design expands nighttime ostomy bag capacity for restful sleep, while its sleek daytime connector maintains a discreet profile.",
    tags: [['CAD', "red"], ['Design', "orange"], ['Biomedical', "blue"]],
  },
  {
    name: 'Unity Game',
    image: project8_image,
    description: 'Conquering pixelated foes and mastering class-based loot in 2 months, our metroidvania prototype offers four vibrant levels and a climactic boss fight.',
    tags: [['', "white"], ['C#', "blue"], ['Unity', "gray"]],
  },
];

/*-------------------------------------------*/

const ExtendedProjects = () => {
    
    const sliderSettings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        draggable: false,
        rows: 7,
        slidesPerRow: 1,
        nextArrow: <MdArrowForwardIos color="black"/>,
      prevArrow: <MdOutlineArrowBackIosNew color = "black"/>,
        
    };
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSlideExVisible, setSlideExVisible] = useState(false);

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
        
      <Box width="100%" paddingX={0}>
      <Box position="relative" width="100%">
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <motion.div
            initial={{ scale: 0.99 }}
            whileHover="hover"
            transition={{
              duration: 0.35,
              ease: "backInOut",
            }}
            variants={{
              hover: {
                scale: 1.0,
              },
            }}
            >
              <Box
                width="100%"
                height="auto"
                as="button"
                onClick={(event) => handleButtonClick(event, project)}
                variant="unstyled"
              >
                <Card
                  width="100%"
                  direction={{ base: 'column', sm: 'row' }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Box flex={{ base: 'none', md: '0 0 80%' }} maxWidth={{ base: '100%', md: '60%' }}>
                    <Image
                      objectFit="cover"
                      width="100%"
                      height="200px"
                      src={project.image}
                      alt="Project Card"
                    />
                  </Box>
                  <Stack flex="1">
                    <CardBody>
                      <Heading textAlign="left">{project.name}</Heading>
                      <Box whiteSpace="normal" textAlign="left">
                        <Text maxWidth="100%" py="2">
                          {project.description}
                        </Text>
                      </Box>
                      <Flex
                        justifyContent="flex-end"
                        position="absolute"
                        bottom="5px"
                        right="5px" 
                      >
                        {project.tags.map((tag, tagIndex) => (
                          <Tag
                            key={tagIndex}
                            variant="subtle"
                            colorScheme={tag[1]}
                            mr="2"
                            mt="2"
                          >
                            <TagLabel>{tag[0]}</TagLabel>
                          </Tag>
                        ))}
                      </Flex>
                    </CardBody>
                  </Stack>
                </Card>
              </Box>

            </motion.div>
          ))}
  
        
        </Slider>
        {isSlideExVisible && selectedProject && (
                <>
                    {selectedProject.name === 'Slacker Chores' && (
                    <SlideEx1
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Pace++' && (
                    <SlideEx2
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Heatsink Project' && (
                    <SlideEx3
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Hip Implant' && (
                    <SlideEx4
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Easy Click' && (
                    <SlideEx5
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Ostagami' && (
                    <SlideEx6
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Pressure Sensitive Vest' && (
                    <SlideEx7
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Unity Game' && (
                    <SlideEx8
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                </>
                )}
                </Box>
      </Box>
    );
  };

  export default ExtendedProjects;
