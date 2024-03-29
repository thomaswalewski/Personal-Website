'use client'
import React, { useEffect, useRef } from 'react';
import '../style.css'
import NavBar from '../components/nav/nav'
import '../stylet.css'
import GithubLink from '../components/GithubLink/GithubLink'

export default function Projects() {

    const projectRefs = useRef([]);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('project-transition');
                }
            });
        }, { threshold: 0 });


        const projects = document.querySelectorAll('.project');
        projects.forEach((project) => {
            observer.observe(project);

            projectRefs.current.push(project);
        });

        return () => {
            if (projectRefs.current) {
                projectRefs.current.forEach((project) => {
                    observer.unobserve(project);
                });
            }
        };
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <div className="project-back">
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left sm:p-2'> StudyBuddy (MySQL, Express, React, Node, Docker) April 2023 - May 2023</h1>
                        <GithubLink link="https://github.com/thomaswalewski/StudyBuddy" />
                    </div>
                    <h2 className="text-justify text-md sm:text-lg indent-6">
                        <p>
                            This project is a small prototype for a web app, designed by me in a Directed Study to the specifications of the business students in
                            Entrepreneurship 3330 Design Thinking for Startups course at the D'Amore-McKim School of Business at Northeastern
                            University. The Study Buddy is designed to a be a combined Hardware and Software solution, where young students
                            struggling to learn time management could have the help and emotional support of the physical Buddy, while also learning
                            discipline, and having a bit of gamification for their work. This project is strictly the prototype for the web
                            application that would complement the Buddy, which would also run its own software. The purpose of this prototype
                            was to give some insight into how the web application would function, both for the young student and their parent.
                        </p>
                    </h2>

                    <div className="justify-center sm:flex" width="95%">
                        <img src="images/StudyBuddy/SBLogin.png" className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto' />
                        <img src="images/StudyBuddy/SBParent.png" className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto' />
                    </div>
                    <h2 className="text-justify text-md sm:text-lg indent-6">
                        <p>
                            In the first two images above you can see the login screen and the home page for the student. The login process was
                            completed through Express.Js using session tracking with cookies. Once the parent logged in they are able to see
                            their childs completed and in progress assignments, pulled from the database. They are also able to see their childs
                            usage of the application and assignment completion rate, as well as the health of the 'buddy' (Algorithms for these numbers
                            would be developed in production). This allows the parent to see how their child is performing as well as track progress and change.
                        </p>
                    </h2>
                    <div className="justify-center sm:flex" width="95%">
                        <img src="images/StudyBuddy/SBWorking.png" className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto' />
                        <img src="images/StudyBuddy/SBHome.png" className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto' />
                    </div>
                    <h2 className="text-justify text-md sm:text-lg indent-6">
                        <p>
                            In these two images, you can see the child's view of the application. Once the child logs in, they will be shown a home screen of their
                            current assignments and some basic information about them. They also have the opportunity to add assignments on this page. To work on their assignments,
                            the child should switch over to work mode, where they then can select an assignment from their currently incomplete assignments. They can then set a timer
                            and work on an assignment. In this mode there would be more information shown on the phyiscal buddy that is also a part of this design. They can
                            then mark any task as complete, having worked productively using this application to manage their time.
                        </p>
                    </h2>
                </div>
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left sm:p-2'>Brain Hemorrhage Classification (Python, Java) Nov 2022 - Dec 2022</h1>
                        <GithubLink link="https://github.com/thomaswalewski/HemorrhageClassifier" />
                    </div>
                    <h2 className="text-justify text-md sm:text-lg indent-6">
                        <p>
                            This project was done in a small group for my MATH 4570: Matrix Methods for Data Analysis and Machine
                            Learning Class. The goal of the project was to take real world patient CT scans and categorize them based
                            on the presence of a hemorrhage and the location of a hemorrhage. We chose this project because real world
                            diagnosis of a hemorrhage needs to be done by a highly trained doctor whose time is extremely valuable and
                            when faced with a hemorrhage, anything that can speed up the diagnosis process is a massive help to the
                            affected patients. For the project we ended on a convolution neural network, though we tried several
                            different models mostly for experimental reasons, since based off of the problem type a convolution neural
                            network is really the best fit.
                        </p>
                        <p>
                            Though before we could create any models, we had to clean the data. While the data was nicely labeled, a
                            lot of the scans were completely unusable due to the fact that the brain was not well pictured in them.
                            Since there were thousands of scans, I wrote a small program in Java to find the scans we deemed
                            acceptable based on numeric data from the cumulative pixel brightness. We tried several different
                            boundaries for this floor, and ended up cutting out the bottom 10% of samples. This cleaner data allowed
                            us to progress to creating more accurate models.
                        </p>
                        <p>
                            Our first model was a SoftMax Logistic Regression. This model was pretty good at predicting the normal
                            cases, but was also misclassifying real hemorrhages often as just normal. The overall accuracy capped out
                            at 53%, so although it was decent, we wanted to see higher numbers. Our next three models were
                            Convolutional Neural Networks, which progressed in accuracy and complexity. Our first model had an overall
                            testing accuracy of 67%, but it was really brought up by the disproportionate amount of normal scans we
                            had, so our next iterations were focused on improving the hemorrhage accuracy, which at this point was as
                            low as 47%. As we continued, we moved towards a more effective downsampling method to disrupt the data
                            less. We were previously only downsampling on one axis, but we moved it to be balanced, so structures in
                            the brain were better preserved. Our final model had a 69.99% testing accuracy. Even though this model had a slightly
                            lower accuracy for the normal category, we chose it over our previous models due to the significant
                            increase in accuracy in the smaller hemorrhaging categories, since detecting these hemorrhages is the
                            point of the project.
                        </p>
                    </h2>
                    <div>
                        <div className="p4 lg:p-0 flex flex-col items-center">
                            <img src="images/AI/Results.png" className='w-full lg:w-11/12' />
                            <p>A table of the exact results for the CNN.</p>
                        </div>
                        <div className='justify-center sm:flex'>
                            <div className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto flex flex-col items-center'>
                                <img src="images/AI/ConfMatrix.png" className='w-full' />
                                <p>A confusion matrix for our final CNN model.</p>
                            </div>
                            <div className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto flex flex-col items-center'>
                                <img src="images/AI/3.jpg" className='w-full' />
                                <p>An example CT Scan image.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left sm:p-2'>Tokenizer and Shell (C) Feb 2023 </h1>
                    </div>
                    <h2 className='text-justify text-md sm:text-lg indent-6'>
                        <p>
                            For this project a partner and I first developed a small tokenizer to parse tokens from user inputted
                            commands, and then developed a shell which would execute the commands that were supported
                            by linux, as well as building in a few more featues such as: Sequencing, Input redirection, Output
                            redirection, and Piping. We also added support for the commands cd (change directory), source (to execute
                            scripts, can be nested), prev, and help to explain the built in commands in the shell. This allowed for our
                            version of shell to be quite functional and in line with the normal linux terminal.
                        </p>
                    </h2>
                    <div className="justify-center flex">
                        <img src="images/shell/example-interaction.png" className='w-full lg:w-11/12' />
                    </div>
                    <h2 className='text-center'>An example interaction from the project description.</h2>
                </div>
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left sm:p-2'>Model of 16 bit RISC-V Processor (SystemVerilog) May 2023 - June 2023</h1>
                    </div>
                    <h2 className='text-justify text-md sm:text-lg indent-6'>
                        <p>
                            This project was through the lab of my Fundamentals of Digital Design and Computer Organization lab.
                            For this lab, we spent the class periods developing and implementing a model of a 16-bit RISC-V
                            processor. The final model is below. The behaivoral code was implemented through several lab sessions, where
                            each component was developed and tested. Through this process, I gained an incredibly deep understanding of
                            instruction decoding and execution across a processor.
                        </p>
                    </h2>
                    <div className="justify-center flex">
                        <img src="images/RISC-V/finalprocessor.png" className='w-full lg:w-11/12' />
                    </div>
                </div>
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left sm:p-2'>This Website (Next.Js) April 2023 - Present</h1>
                        <GithubLink link="https://github.com/thomaswalewski/Personal-Website" />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg indent-6'>
                        <p>
                            I developed this website just to initially learn a little bit about HTML and CSS and showcase some of my
                            projects, socials, and personality. I recently moved this website over to React so I would have more opportunities
                            to expand it in the future as I see fit. I use Next.js as the framework as create-react-app was recently deprecated,
                            and I wanted to learn something new. I have really enjoyed working with this project, as I find it super satisfying to create
                            something nice.
                        </p>
                    </h2>
                    <div className="justify-center flex">
                        <img src="images/WebsiteProject/WebsitePhoto.png" className='w-full lg:w-11/12' />
                    </div>
                </div>
                <div className="project">
                    <h1 className='text-2xl sm:text-4xl text-center sm:text-left sm:p-2'>Photo Editor Application (Java) Oct 2022 - December 2022</h1>
                    <h2 className='text-justify text-md sm:text-lg indent-6'>
                        <p>
                            In the fall of 2022, a partner and I developed a photo-editor application in Java. The application allowed for
                            the user to upload photos in various formats, and perform 17 different operations to the photo (or parts of
                            it) and save the photo down in any one of the formats we supported. This application was built using the
                            Model-View-Controller model, which allowed our program to be easily extendable and extremely flexible. The
                            application started with support through the terminal, using command line input to execute operations on the
                            photos, but we soon developed a full GUI using Java Swing. This allowed for a greatly increased ease of use,
                            and it was very nice to see the operations being performed in real time on the photos. The image seen below is
                            a screenshot of the program in the GUI mode in use. The image is of my cat (his name is Tangelo), and above in
                            the Nav bar you can see some of the operations you are able to perform on the image.
                        </p>
                    </h2>
                    <div className="justify-center flex">
                        <img src="images/PhotoEditor/ScreenshotOfProgram.png" className='w-full lg:w-11/12' />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg'>
                        Here are some examples of the resulting images downloaded from the editor. There is an image with the left
                        half sharpened and one that has had a mosaic operation done to the entirety of it.
                    </h2>
                    <div className="justify-center sm:flex" width="95%">
                        <img src="images/PhotoEditor/tangelosharp.jpg" className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto' />
                        <img src="images/PhotoEditor/TangMosaic.png" className='pb-4 pt-4 sm:p-4 sm:w-1/2 h-auto' />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg'>
                        The code for this project is closed due to academic integrity standards, so unfortunately there is no link to
                        github for it.
                    </h2>
                </div>
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left sm:p-2'>Garden Tracker (Python, MySQL, Flask) Nov 2022 - Dec 2022</h1>
                        <GithubLink link="https://github.com/thomaswalewski/DBDesignProject" />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg indent-6'>
                        <p>
                            The GardenTracker is an application where users can create gardens, add plants, log harvests and waterings, as well as create new gardens. They can also log product usage on their garden and rate it. The application also features a company side where companies can list their products and see ratings.
                            This allows for more potential products to be added for users. There is also a login for employees of the application where they can see page visits on the application and keep in contact with clients. This application was developed with a focus on the complexity of the database and the backend for
                            a database design class. It features an extensive MySQL database visualized below. It features sixteen tables with thousands of rows of mock data I generated to allow for qeurying and interaction. The application feautured a frontend created through Appsmith for user interaction.
                        </p>
                    </h2>
                    <div className="justify-center flex">
                        <img src="images/GardenTracker/GardenTrackerDb.png" className='w-full lg:w-11/12' />
                    </div>
                    <h2 className='text-center'> A visualization of the database for this application.</h2>
                </div>
                <div>
                    <h3 className="text-center font-normal">Built by Thomas Walewski</h3>
                </div>
            </div>
        </div>
    )
}