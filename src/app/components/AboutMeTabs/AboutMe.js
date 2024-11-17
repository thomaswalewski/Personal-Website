"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import './AboutMe.css'
import Link from "next/link";

const aboutMeData = [
  {
    id: "background",
    question: "How I Became Interested in Computer Science",
    answer: [
      `When I was in elementary and middle school, like many other kids, I absolutely loved Minecraft. 
      I still think it's a great game, but at that time it was something I played every day. As I was getting
      into middle school, my friends and I wanted to play together, and I ended up hosting some of our Minecraft
      servers for a few years. At first, I paid a company to host the server for me and all I had to do was
      install plugins and make sure to restart the server occasionally.`,

      `However, as time went on, I realized I could host the server myself on an old PC I had, which would
      give me more control and save me money. Once I made this transition, the enchanced sense of ownership
      and control motivated me to mold my server into something that I was proud of. I began to not only install
      plugins, but modify their underlying functionality to give my server a unique experince. I took feedback
      from users, and eventually had robust featuresets that were not found on other servers. This caused the community
      to grow past my small initial friend group, and at points I had dozens of players on the server. This gave me a 
      real sense of reasponsibiltiy, as I now had to schedule my maintinence and new feature releases, as people wanted
      to know when they could play.`,

      `Once I was in high school, I took AP CSA and learned more about computer science was and how broad the field was.
      From then on, I knew I wanted to study CS and I applied to all of my prospective colleges as a CS major.`,
    ],
    image: "/images/Highlights/Path.jpg",
  },
  {
    id: "hobbies",
    question: "My Interests Outside of Computer Science",
    answer: [
      `While this website is primarily dedicated to showcasing my life through the lens of my work, 
      I really believe in the necessity of living a balanced life. One of my biggest personal hobbies
       is fitness, and I make sure to get training in at least six times a week. This time is very 
       important to me, as it allows me to focus my mind entirely on something that has nothing to 
       do with my academic pursuits or job. Training has always been a time for me to disconnect, 
       and focus on disciplining my mind and body.`,

      `Since my childhood, I have always loved the outdoors. I am very fortunate that around my town there
      are so many open spaces and reserves, and it has always been one of my favorite activities to go on 
      a walk through these beautiful areas. Protecting and respecting these spaces means a lot to me, and
      is something I certainly want to get more involved with later in life. Nature never fails to strike
      me with a deep beauty that I feel we have a responsibility to protect.`,

      `Over the past year, I have also gotten into photography. Since I have spent a lot of my time at college
      in a city and away from the nature areas I love so much, being able to spend time there when I go home 
      and put some effort into taking nice pictures has been a great way for me to practice gratitude. Since 
      this is also an exciting and dynamic time in my life, I knew I would want a camera to capture the unqiue
      moments. I have created a photos page on this website, which has some of my favorite photos.`
    ],
    image: "/images/Highlights/Night-sky-portrait.jpg",
  },
  {
    id: "goals",
    question: "What are my goals for the future?",
    answer: [
      `Fundementally, my main interest for the future is working on what I consider to be interesting problems. 
      I think that the current state of computer science is incredibly interesting, and that the explosion of 
      AI is enabling progess in areas that were previously only developed for theory.My main focus in my computer
      science education at Northeastern has been theory and machine learning, as I feel most passionate about these
      areas.Ideally, I would like to find a position that allows me to work on exciting aspects of machine learning,
      using new and relevant technologies to develop novel solutions to complex problems.I am excited by the idea of
      facing large and unsolved problems, and needing to create solutions from the ground up.I find this type of work
      to be the most stimulating, and I think it also promotes a strong team dynamic, which is something I am interested
      in as well.`,
    ],
    image: "/images/Highlights/Sagrada-Familia-Landscape.jpg",
  },
];


export default function AboutMe() {
  const [activeTab, setActiveTab] = useState(aboutMeData[0].id);
  const [tabBounds, setTabBounds] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeElement = document.getElementById(activeTab);
    if (activeElement) {
      const { left, width } = activeElement.getBoundingClientRect();
      const parentLeft = activeElement.offsetParent.getBoundingClientRect().left;
      setTabBounds({ left: left - parentLeft, width });
    }
  }, [activeTab]);

  return (
    <div className="w-auto sm:max-w-7xl max-w-full rounded-xl background-mygrey my-4 sm:mt-7">
      <div className="background-navblue rounded-xl">
        <h1 className="text-center py-6 bg-primary sm:text-7xl text-5xl font-normal">About Me</h1>
        <h2 className="flex justify-center text-center text-md sm:text-lg pl-3 pr-3 background-navblue pb-7">
          I am a senior at Northeastern University in
          Boston Massachusetts majoring in Computer Science and also pursuing a minor in Mathematics. I am currently completing a Software Engineering co-op at Chewy in Boston. My interests
          in computer science are machine learning, software engineering, and theory.
        </h2>
      </div>
      <div className="flex border-b background-navblue">
        <div className="flex w-full overflow-auto">
          {aboutMeData.map((item) => (
            <button
              id={item.id}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 sm:py-4 sm:px-6 py-2 px-4 text-xs sm:text-sm rounded-md font-medium transition-colors duration-300 flex items-center justify-center ${activeTab === item.id ? "dark-background" : "hover:dark-text"
                }`}
            >
              <span className="w-full z-1 font-medium text-center">{item.question}</span>
            </button>
          ))}
        </div>
        <motion.div
          className="absolute bottom-0 h-0.5 bg-primary"
          initial={false}
          animate={{ left: tabBounds.left, width: tabBounds.width }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      </div>
      <div className="relative w-auto max-w-full p-6">
        <AnimatePresence mode="wait">
          {aboutMeData.map(
            (item) =>
              item.id === activeTab && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, rotateX: -15, y: 50 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: 15, y: -50 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="gap-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-2xl font-bold mb-4 lg:pb-3"
                  >
                    {item.question}
                  </motion.h2>
                  <div className="sm:flex items-top gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-justify sm:w-1/2 lg:text-lg lg:leading-8 pb-4 sm:pb-0"
                    >
                      {item.answer.map((paragraph, index) => (
                        <p key={index} className="indent-4 w-auto">{paragraph}</p>
                      ))}
                    </motion.div>
                    {item.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="flex justify-center items-center sm:w-1/2"
                      >
                        <Image
                          src={item.image}
                          alt={`Illustration for ${item.question}`}
                          width={100}
                          height={100}
                          layout="responsive"
                          className="rounded-lg"
                        />
                      </motion.div>
                    )}
                  </div>
                  {item.id === "hobbies" && (
                    <div className="p-2 flex justify-center mt-4 px-4 w-full">
                      <div className="background-navblue w-fit p-2 rounded-md">
                        <Link href="/photos">Visit my Photos Page!</Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
