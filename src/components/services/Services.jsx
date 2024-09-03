import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
        <motion.div className="textContainer">
            <p>Hey there! I'm Harsh Bhadouriya, a web and mobile developer passionate about building
                <br />modern apps that integrate Web3 and AI. I enjoy creating seamless user experiences and
                <br />exploring decentralized apps and innovative mobile solutions.
                <hr />
            </p>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/naruto1.jpg" alt="" />
                <h1><b>Innovative</b> tech solutions.
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Your</b> Business
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>Full-Stack to Blockchain and Beyond</h2>
                <p>I work in full-stack web development, using tools like React, 
                    Node.js, TypeScript, and Tailwind CSS. I'm excited about blockchain 
                    and decentralized apps, always looking to push boundaries.
                    also create mobile apps with React Native and improve
                    development processes with DevOps tools like Docker and Kubernetes.
                     </p>
            </div>
            <div className="box">
                <h2>Web3 & AI Enthusiast</h2>
                <p>Merging Web3 with AI is one of my passions.
                     I constantly explore new ways to integrate 
                     decentralized technologies with AI-driven solutions
                      to create innovative and secure applications for the future.
                     </p>
            </div>
            <div className="box">
                <h2>Open Source Contributor</h2>
                <p>I actively contribute to open-source projects, helping the
                community and staying updated with the latest trends in the 
                tech world. I love collaborating with other developers and
                 sharing my knowledge to create impactful solutions.


                </p>
            </div>
            
        </motion.div>
    </motion.div>
  )
}

export default Services
