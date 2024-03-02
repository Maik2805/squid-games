import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./styles.css";

const root = createRoot(document.getElementById('root'));

root.render(
    <Canvas
        camera={{
            position: [2, 2, 5]
        }}>
        <Experience />
    </Canvas>
);
// root.render(
//     <Experience
//         title="Squid Games"
//         subtitle="3D Web" />
// );