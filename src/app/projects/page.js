import '../style.css'
import NavBar from '../nav'
import '../stylet.css'
import GithubLink from '../GithubLink'

export default function Projects() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="project-back">
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left'>Brain Hemorrhage Classification (Python, Java)</h1>
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
                            the brain were better preserved. Our final model had a 69.99% testing accuracy, which was really only
                            brought up by higher accuracies in the hemorrhaging categories. Even though this model had a slightly
                            lower accuracy for the normal category, we chose it over our previous models due to the significant
                            increase in accuracy in the smaller hemorrhaging categories, since detecting these hemorrhages is the
                            point of the project.
                        </p>
                    </h2>
                    <div className='justify-center'>
                        <img src="images/AI/Results.png" width="100%" />
                        <p>A table of the exact results for the CNN.</p>
                        <div className='justify-center sm:flex'>
                            <div className='p-4 sm:w-1/2 h-auto'>
                                <img src="images/AI/ConfMatrix.png" className='w-full' />
                                <p>A confusion matrix for our final CNN model.</p>
                            </div>
                            <div className='p-4 sm:w-1/2 h-auto'>
                                <img src="images/AI/3.jpg" className='w-full' />
                                <p>An example CT Scan image.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left'>Tokenizer and Shell (C)</h1>
                        <GithubLink link="https://github.com/thomaswalewski/ShellProject" />
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
                        <img src="images/shell/example-interaction.png" width="95%" />
                    </div>
                    <h2>An example interaction from the project description.</h2>
                </div>
                <div className="project">
                    <div className='sm:flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left'>Model of 16 bit RISC-V Processor (SystemVerilog)</h1>
                        <GithubLink link="https://github.com/thomaswalewski/RISC-VModel" />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg indent-6'>
                        <p>
                            This project was through the lab of my Fundamentals of Digital Design and Computer Organization lab (EECE
                            2323). For this lab, we spent the class periods developing and implementing a model of a 16-bit RISC-V
                            processor. The final model is below. The behaivoral code was implemented through several lab sessions, where
                            each component was developed and tested.
                        </p>
                    </h2>
                    <div className="justify-center flex">
                        <img src="images/RISC-V/finalprocessor.png" width="95%" />
                    </div>
                </div>
                <div className="project">
                    <div className='flex items-center'>
                        <h1 className='text-2xl sm:text-4xl text-center sm:text-left'>This Website (Next.Js)</h1>
                        <GithubLink link="https://github.com/thomaswalewski/Personal-Website" />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg indent-6'>
                        <p>
                            I developed this website just to initially learn a little bit about HTML and CSS and showcase some of my
                            projects, socials, and personality. I recently moved this website over to React so I would have more opportunities
                            to expand it in the future as I see fit. I used Next.js as the framework as create-react-app was recently deprecated,
                            and I wanted to learn something new. Next.js compatibility with firebase hosting is still in its infancy, but I having
                            learned the basics of this framework I am excited to see how it develops.
                        </p>
                    </h2>
                    <div className="justify-center flex">
                        <img src="images/WebsiteProject/WebsitePhoto.png" width="95%" />
                    </div>
                </div>
                <div className="project">
                    <h1 className='text-2xl sm:text-4xl text-center sm:text-left'>Photo Editor Application (Java)</h1>
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
                        <img src="images/PhotoEditor/ScreenshotOfProgram.png" width="95%" />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg'>
                        Here are some examples of the resulting images downloaded from the editor. There is an image with the left
                        half sharpened and one that has had a mosaic operation done to the entirety of it.
                    </h2>
                    <div className="justify-center sm:flex" width="95%">
                        <img src="images/PhotoEditor/tangelosharp.jpg" className='p-4 sm:w-1/2 h-auto' />
                        <img src="images/PhotoEditor/TangMosaic.png" className='p-4 sm:w-1/2 h-auto' />
                    </div>
                    <h2 className='text-justify text-md sm:text-lg'>
                        The code for this project is closed due to academic integrity standards, so unfortunately there is no link to
                        github for it.
                    </h2>
                </div>
                <div>
                    <h3 className="credits">Built by Thomas Walewski</h3>
                </div>
            </div>
        </div>
    )
}