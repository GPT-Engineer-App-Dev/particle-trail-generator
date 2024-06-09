import { useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Button } from "@chakra-ui/react";
import ControlPanel from "../components/ControlPanel";
import WebGLCanvas from "../components/WebGLCanvas";

const Index = () => {
  const [settings, setSettings] = useState({
    numParticles: 100,
    shapeType: "circle",
    color: "#ff0000",
    cursorInteraction: true,
  });

  const [animate, setAnimate] = useState(false);

  const animateShapesRandomly = () => {
    // Logic to animate shapes randomly
    setAnimate(!animate);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        WebGL Animation Generator
      </Heading>
      <Button colorScheme="teal" mb={4} onClick={animateShapesRandomly}>
        Animate Shapes Randomly
      </Button>
      
      <Flex>
        <Box w="300px" mr={4}>
          <ControlPanel settings={settings} onSettingsChange={setSettings} />
        </Box>
        <Box flex="1">
          <WebGLCanvas settings={settings} animate={animate} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;