import { useColorMode } from "@chakra-ui/color-mode";
import {
  VStack,
  Box,
  Heading,
} from "@chakra-ui/layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
	<Box width={{ base: "auto"}}>
		    <VStack spacing={4} p={4} maxW="100%" align="center">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
    </VStack>
	</Box>

  );
}

export default App;
