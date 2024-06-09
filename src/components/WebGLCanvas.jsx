import { useEffect, useRef } from "react";

const WebGLCanvas = ({ settings }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Initialize WebGL context and shaders here
    // This is a placeholder for actual WebGL code
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Example of using settings to update WebGL content
    // This should be replaced with actual rendering logic
    console.log(settings);

  }, [settings]);

  return <canvas ref={canvasRef} width="800" height="600" />;
};

export default WebGLCanvas;