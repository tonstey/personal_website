import { useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import "../index.css";

export default function HomePage() {
  const capy1 = useGLTF("/blender/capy1.glb");
  const capy2 = useGLTF("/blender/capy2.glb");
  const capy3 = useGLTF("/blender/capy3.glb");
  const cat1 = useGLTF("/blender/cat1.glb");
  const cat2 = useGLTF("/blender/cat2.glb");
  const cat3 = useGLTF("/blender/cat3.glb");
  const cat4 = useGLTF("/blender/cat4.glb");
  const frog = useGLTF("/blender/Frog.glb");
  const turtle = useGLTF("/blender/turtle.glb");

  const CameraLook = () => {
    const { camera } = useThree();

    useEffect(() => {
      camera.position.set(0, 5, 10);
      camera.lookAt(0, -2, 0);
      camera.fov = 60;
    }, [camera]);

    return null;
  };

  return (
    <>
      <section
        className="relative flex h-full w-full flex-1 flex-col items-center overflow-y-hidden"
        id="homepage"
      >
        <div className="absolute left-1/2 top-0 z-10 w-fit -translate-x-1/2 transform rounded-lg border-2 border-black bg-white p-2 px-4 text-center font-bokuteh text-2xl font-bold text-[#74664B] md:rounded-full">
          Welcome to Tony's Portfolio Website!
        </div>

        <div className="absolute bottom-0 z-10 flex w-full items-center justify-between px-2 pb-2 font-bokuteh text-[10px] font-extralight text-[#74664B] sm:text-xs md:px-6 md:text-sm lg:text-base">
          <h1>Hold left-click to rotate the screen</h1>
          <h1 className="text-center">
            All models created by @PhilipMyGasTank on Roblox
          </h1>
          <h1>Hold right-click to move the screen</h1>
        </div>

        <Canvas className="h-full w-full">
          <ambientLight intensity={2.25} />
          <PerspectiveCamera makeDefault />
          <CameraLook />
          <primitive
            scale={[1.5, 1.5, 1.5]}
            object={capy1.scene}
            position={[0, -5.25, -3.75]}
          />
          <primitive
            scale={[0.25, 0.25, 0.25]}
            object={capy2.scene}
            position={[2, -3.75, 2.25]}
            rotation={[-0.2, 0, 0]}
          />
          <primitive
            scale={[0.25, 0.25, 0.25]}
            object={capy3.scene}
            position={[4.75, -3.75, 2.25]}
            rotation={[-0.2, 0, 0]}
          />

          <primitive
            scale={[2, 2, 2]}
            object={cat1.scene}
            position={[2.4, -0.8, 0.5]}
            rotation={[-0.4, -0.5, 0]}
          />
          <primitive
            scale={[2, 2, 2]}
            object={cat4.scene}
            position={[2.4, -1.75, 0.8]}
            rotation={[-0.4, -0.5, 0]}
          />

          <primitive
            scale={[-2, 2, 2]}
            object={cat2.scene}
            position={[-2.4, -0.8, 0.5]}
            rotation={[-0.4, 0.5, 0]}
          />
          <primitive
            scale={[-2, 2, 2]}
            object={cat3.scene}
            position={[-2.4, -1.75, 0.8]}
            rotation={[-0.4, 0.5, 0]}
          />

          <primitive
            scale={[0.3, 0.3, 0.3]}
            object={frog.scene}
            position={[0, 0.35, 0]}
          />
          <primitive
            scale={[4.75, 4.75, 4.75]}
            object={turtle.scene}
            position={[0, -1, 0]}
          />

          <OrbitControls />
        </Canvas>
      </section>
    </>
  );
}
