import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import ControlPanel from "../components/ControlPanel";
import WebGLCanvas from "../components/WebGLCanvas";

const Index = () => {
  const [settings, setSettings] = useState({
    numParticles: 100,
    shapeType: "circle",
    color: "#ff0000",
    cursorInteraction: true,
  });

  const [triggerRandomAnimation, setTriggerRandomAnimation] = useState(false);

  const handleRandomAnimation = () => {
    setTriggerRandomAnimation(!triggerRandomAnimation);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        WebGL Animation Generator
      </Heading>
      <Button colorScheme="teal" onClick={handleRandomAnimation} mb={4}>
        Random Animation
      </Button>
      <Flex>
        <Box w="300px" mr={4}>
          <ControlPanel settings={settings} onSettingsChange={setSettings} />
        </Box>
        <Box flex="1">
          <WebGLCanvas settings={settings} triggerRandomAnimation={triggerRandomAnimation} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;