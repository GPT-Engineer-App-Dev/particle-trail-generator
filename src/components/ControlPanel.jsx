import { Box, FormControl, FormLabel, Input, Select, Switch, VStack } from "@chakra-ui/react";

const ControlPanel = ({ settings, onSettingsChange }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onSettingsChange({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Number of Particles/Triangles</FormLabel>
          <Input
            type="number"
            name="numParticles"
            value={settings.numParticles}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Shape Type</FormLabel>
          <Select
            name="shapeType"
            value={settings.shapeType}
            onChange={handleChange}
          >
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="triangle">Triangle</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Color</FormLabel>
          <Input
            type="color"
            name="color"
            value={settings.color}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Speed</FormLabel>
          <Input
            type="number"
            name="speed"
            value={settings.speed}
            onChange={handleChange}
            min="0.1"
            step="0.1"
          />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="cursorInteraction" mb="0">
            Cursor Interaction
          </FormLabel>
          <Switch
            id="cursorInteraction"
            name="cursorInteraction"
            isChecked={settings.cursorInteraction}
            onChange={handleChange}
          />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default ControlPanel;