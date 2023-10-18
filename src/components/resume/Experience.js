import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import ExperienceModal from "./ExperienceModal";
import {hide} from "react-modal/lib/helpers/ariaAppHider";

const Experience = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 0.5}}}
                className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
            >
                <div>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
                        <h2 className="text-4xl font-bold">Job Experience</h2>
                    </div>
                    <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ExperienceModal
                            title="Full Stack Developer"
                            subTitle="Ars Systems LLC, Yerevan"
                            result="Jan 2018-Dec 2019"
                            des="Project: QuizFull - Interactive Programming Language Quiz Platform
Customer: The Outsource Company
Project Description: QuizFull is a web application designed to help users enhance
their programming language knowledge. Users can select a programming language
and test their expertise thw-full h-1/2 group flexrough various quizzes. The project encompasses two
distinct roles: Admin and User. Admins are granted privileges to manage questions,
perform CRUD operations on user accounts, and elevate users to the Admin role.
Participation:
● Engineered the foundational structure of DB Models and executed migrations.
● Utilized the Sequelize ORM for smooth and organized database migrations.
● Implemented middleware for validation in microservices to ensure data
integrity.
● Created an effective error handling mechanism for improved user experience.
● Engaged in refactoring efforts to optimize codebase for enhanced
performance.
Team: Collaborated in a 2-member Development team and closely coordinated with
a 1-member QA team.
Database: Employed MongoDB for efficient data storage and retrieval.
Tools: Utilized tools including Postman for API testing, JWT for security, WebStorm
as the primary IDE, and Robo Mongo for MongoDB management.Technologies: Leveraged Node.js (Express) to build the backend infrastructure of
the application.
This experience showcases my integral role in constructing a dynamic quiz platform
that empowers users to test their programming language proficiency. I undertook
responsibilities such as database management, middleware implementation, error
handling, and code optimization, collaborating effectively within a small yet agile
development team."
                        />
                        <ExperienceModal
                            title="Web Full stack Developer"
                            subTitle="Ars Systems LLC, Yerevan"
                            result="Jan 2018-Dec 2019"
                            des="Project: Live Chat - Interactive Messaging Platform
Customer: The Outsource Company
Project Description: Live Chat is a dynamic web-based messaging platform that
enables users to engage in both closed and open chat conversations. Users also
have the ability to view each other's profile pictures on their pages, enhancing the
visual aspect of communication.
Participation:
As a Full Stack Developer on the Live Chat project, I took on key responsibilities to
ensure the platform's functionality, performance, and user experience:
● Engineered the foundational structure of DB Models and executed migrations
for seamless data management.
● Implemented endpoint routing to manage the flow of data within the project.
● Developed a Model-View-Controller (MVC) architecture and incorporated
RESTful API design principles.
● Created all necessary services and microservices to support the chat
functionality.
● Designed and implemented a comprehensive error handling mechanism to
enhance user experience and data integrity.
● Developed utility and helper methods to streamline common functionalities
and ensure code reusability.
● Led the development of the UI/UX frontend, crafting engaging and
user-friendly interfaces.
Team: Engaged in a 1-member Software Engineer team, handling both backend and
frontend aspects of the project.
Database: Utilized MySQL as the database to store and manage chat data.
This role in the Live Chat project showcases my ability to contribute to both backend
and frontend development, ensuring a seamless and engaging messaging platform
for users. I actively participated in various aspects of the project, from database
management to implementing RESTful APIs, error handling, and creating intuitive
user interfaces."
                        />
                        <ExperienceModal
                            title="Full stack key Developer"
                            subTitle="Ars Systems LLC, Yerevan"
                            result="Jan 2018-Dec 2019"
                            des="Project: MapLarge - Interactive Map Selling Platform
Customer: The Outsource Company
Project Description: MapLarge is a web-based platform that specializes in selling
maps to various companies. The platform offers a variety of maps tailored to different
functionalities based on business logic and design requirements.
Participation:
As a Frontend Developer on the MapLarge project, I played a significant role in
enhancing and expanding the platform's frontend capabilities:
● Developed more than thirty dynamic UI components, including options, inputs,
inboxes, text fields for descriptions, and range inputs. These components
were essential for testing the user experience and ensuring the platform's
functionality.
● Collaborated in an 8-member Development team, contributing my expertise to
shape the frontend aspect of the application.
● Worked closely with a 2-member QA team to ensure the quality and
performance of the frontend components.
Database: Utilized PostgreSQL to manage and store relevant data.
Tools: Employed WebStorm as the primary integrated development environment
(IDE) for frontend coding, Postman for API testing, and DBWeare for database
management.
Technologies: Leveraged TypeScript to develop robust and maintainable frontend
components, enhancing the user interface and interaction.My role in the MapLarge project demonstrated my proficiency in frontend
development, where I created dynamic UI components that were crucial for user
testing and experience. I effectively collaborated within a large development team,
ensuring the frontend c"
                        />

                        <ExperienceModal
                            title="Backend Developer"
                            subTitle="Steadfast Tech, Yerevan"
                            result="Jan 2020 - Oct 2020"
                            des="Customer: The Germanian Swimming School
Project Description: The Groups Organizer Platform was designed to streamline
group management and related operations for a school setting.
Participation:
As a Backend Developer on the Groups Organizer Platform project, my contributions
played a pivotal role in enhancing the platform's functionality:
● Implemented modules for managing users, groups, and payments.
● Developed transaction handling processes, particularly for the Pay module.
● Created a comprehensive error handling system for smooth user interactions
and data accuracy.
● Implemented two-factor validation for secure login and password reset
processes.
● Developed a service that seamlessly interacted with email addresses.
● Engaged in code reviews to ensure code quality and adherence to standards.
● Collaborated within a 2-member Development team, working alongside a
2-member QA team.
Database: Employed PostgreSQL to efficiently store and manage relevant data.Tools: Utilized tools like WebStorm, Graph tools, Postman, and GitHub for effective
development.
Technologies: Leveraged GraphQL and Node.js (Express) for backend
development, utilizing Apollo Server and TypeORM. This enabled efficient interaction
with data.
This experience showcases my integral role in developing a comprehensive platform
for The Germanian Swimming School. By implementing modules, handling
transactions and payments, enhancing security measures, and engaging in code
reviews, I contributed to the project's success in delivering an efficient and reliable
Groups Organizer Platform tailored to the school's needs."
                        />

                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-4" style={{opacity:"0"}}>
                        <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
                        <h2 className="text-4xl font-bold">Job Experience</h2>
                    </div>
                    <div
                        className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ExperienceModal
                            title="Backend Developer"
                            subTitle="Steadfast Tech, Yerevan"
                            result="Jan 2020 - Oct 2020"
                            des="Project : Blockchain Service Project
Customer: The Outsource Company
Project Description: The Blockchain service project aimed to revolutionize
blockchain technology by introducing innovative features and enhancements.
Participation:
As a Full Stack Developer on the Blockchain Service Project, I was involved in
various critical aspects of the project's development:
● Implemented mutation and query operations to facilitate form interactions.
● Developed transaction handling mechanisms to ensure secure and accurate
data processing.
● Created a robust error handling system to maintain application stability.
● Implemented form validation for registration processes, enhancing data
accuracy.
● Developed custom utility functionalities to streamline common operations.● Conducted comprehensive code reviews to ensure code quality and
adherence to best practices.
● Collaborated within a 3-member Development team, closely working with a
2-member QA team.
Database: Utilized MongoDB to manage and store blockchain-related data.
Tools: Utilized tools like WebStorm, Graph tools, and Robomongo for effective
development.
Technologies: Leveraged GraphQL for efficient data querying and manipulation.
Used Mongoose and Node.js (Express) for backend development, along with Apollo
Server and Apollo Client for enhanced GraphQL functionality. Frontend development
involved React and React-Redux for state management.
This experience showcases my contributions as a Full Stack Developer in enhancing
the capabilities of a blockchain service. Through implementing various features,
enhancing data handling, and ensuring code quality, I actively contributed to the
project's success in delivering an improved and more robust service to the customer."
                        />
                        <ExperienceModal
                            title="Full stack Developer"
                            subTitle="Goodwin(SmartBET), Yerevan"
                            result="Oct 2020 - May 2021"
                            des="Project: Goodwin Bet Gambling - Casino and Live Games Betting Platform
Customer: The BET Gambling Startup
Project Description: Goodwin Bet Gambling is an innovative betting platform that
offers a variety of casino games and live games, including Poker, Black Jack,
Baccarat, and more. Users can engage in real-time betting experiences on various
games of chance.
Participation:
As a Full Stack Developer on the Goodwin Bet Gambling project, I played a crucial
role in enhancing the platform's features and user experience:
● Participated in the development of the Baccarat game, contributing to the
overall diversity of gaming options.
● Developed the statistics table, implementing logic to provide users with
insights into their betting history and outcomes.
● Addressed various issues related to SVG items, socket communication, and
web socket integration. Introduced new events to enhance socket
functionality.
● Engaged in the development of the BLOT and POKER games, working on
both the frontend and backend.● Utilized ReactJS to redesign game interfaces, enhancing user engagement
and visual appeal.
● Restructured the component hierarchy and containers to improve code
organization and maintainability.
Team: Collaborated within a large Dev team of 20 members, alongside a Project
Manager (PM) and a QA team of 4 members.
Database: Leveraged a combination of MySQL and PostgreSQL databases to
manage and store gaming and user data.
Tools: Utilized a range of tools including Webstorm for development, Postman for
API testing, Swagger for API documentation, GitLab for version control, and Jira for
project management.
This experience demonstrates my contribution to a high-stakes betting platform,
where I enhanced user experience through game development, statistics integration,
bug fixes, and frontend redesign. My role as a Full Stack Developer involved both
backend and frontend development, showcasing my adaptability and technical skills
in a dynamic and competitive industry."
                        />
                        <ExperienceModal
                            title="Backend Developer"
                            subTitle="Epam Systems, Yerevan"
                            result="Jan 2018-Dec 2019"
                            des="Project: LBTY-MU - Liberty Mutual Project
Project Roles: Backend Key Developer
Customer: Liberty Mutual
Participation:
As a Backend Key Developer on the LBTY-MU project, I was deeply involved in
various significant aspects of the project's development:
● Conducted comprehensive performance tests for RESTful APIs, ensuring the
backend's efficiency and responsiveness.
● Conducted meticulous code reviews according to SOLID principles,
contributing to code quality and maintainability.
● Developed a Java Spring Boot service, enhancing the backend's functionality
and capabilities.
● Achieved an impressive 80% test coverage for both Java and Nest (Node)
microservices, ensuring robust and reliable functionality.
● Implemented Kafka configurations within the application and Docker
environment, enabling efficient event-driven communication.
● Addressed and resolved approximately 50+ bugs across both Java and Node
services, enhancing system stability.
● Utilized AWS S3 and buckets to store and manage files, enhancing data
management capabilities.
● Introduced improvements to the CI/CD pipeline, particularly regarding
SonarQube implementation for code analysis.
Team: Collaborated within a diverse team, including 4 Frontend Engineers, 4
Backend Engineers, 2 Business Analysts, and 2 QA Engineers.Database: Utilized a combination of DynamoDB and PostgreSQL for efficient data
storage and retrieval.
Tools: Employed tools such as Postman for API testing, WebStorm as the primary
IDE, JMeter for performance testing, AWS for cloud services, and Swagger for API
documentation.
Technologies: Utilized a range of technologies, including Java (Spring) for backend
development, Groovy for scripting, Node.js and Nest.js for server-side JavaScript
development with TypeScript.
This experience highlights my pivotal role in optimizing the LBTY-MU project's
backend functionality. As a Backend Key Developer, I contributed significantly to
performance testing, code reviews, service development, test coverage
improvement, bug fixing, and the implementation of crucial technologies like Kafka
and AWS S3. My expertise played a vital role in delivering a robust and efficient
backend system that met the requirements of the Liberty Mutual project."
                        />

                        <ExperienceModal
                            title="Backend key Developer"
                            subTitle="Epam systems, Yerevan"
                            result="Jan 2020 - Oct 2020"
                            des="Project: WKH-MEMP - Media Management Enhancement Project
Project Roles: Backend Key Developer
Customer: Wolters Kluwer, Business Information and Media
Project Description: The WKH-MEMP project is part of the MEMP group of
projects, focusing on enhancing media management capabilities for Wolters Kluwer.
This initiative aimed to improve the way media content is handled and organized
within the organization.
Participation:
As a Backend Key Developer on the WKH-MEMP project, I was deeply involved in
various critical aspects of the project's development:
● Created a comprehensive videos media service with all necessary endpoints,
enhancing media content management.
● Developed decorator pipes, middlewares, and interceptors for HTTP requests,
ensuring efficient data processing and manipulation.
● Undertook a significant refactoring effort, optimizing 50% of the project's
structure for improved maintainability and scalability.
● Addressed details in the CI/CD pipeline to enhance code analysis processes
and overall project reliability.
● Increased unit test coverage from 41% to an impressive 85% using
SonarQube, bolstering code quality.
● Optimized unit test mocks data to ensure accurate and effective testing
procedures.
● Conducted thorough code reviews to maintain code quality and adherence to
best practices.
Team: Collaborated within a multidisciplinary team, including 4 Frontend Engineers,
2 Backend Engineers, 2 Business Analysts, and 2 QA Engineers.
Database: Utilized DynamoDB for efficient data storage and retrieval.Tools: Employed a variety of tools including Postman for API testing, WebStorm as
the primary IDE, Figma for UI/UX design, AWS for cloud services, and Swagger for
API documentation.
Technologies: Although the project's primary focus was on backend development, it
appears that React (with Redux) was utilized for frontend purposes.
This experience showcases my pivotal role in enhancing media management
capabilities within the WKH-MEMP project. As a Backend Key Developer, I
contributed to critical aspects such as service creation, middleware development,
code refactoring, test coverage improvement, and code reviews. My role was
essential in ensuring a streamlined and efficient media content handling process that
aligned with the organization's needs and standards."
                        />

                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 0.5}}}
                className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
            >
                <div>
                    <div
                        className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ExperienceModal
                            title="Backend Developer"
                            subTitle="Epam Systems, Yerevan"
                            result="Jan 2018-Dec 2019"
                            des="Project: VRIF-GBX5 - Verifone eCommerce Delivery Enhancement
Customer: Verifone Holdings, FS - Payment Processing
Project Description: The VRIF-GBX5 project was initiated to strengthen Verifone's
eCommerce delivery capabilities. It involved a team of 14 developers (8 Frontend &
6 Backend) to enhance the payment processing infrastructure for Verifone's clients.
Participation:
As a Backend Developer on the VRIF-GBX5 project, I played a pivotal role in
implementing and enhancing various aspects of the payment processing system:
● Contributed to merchant onboarding processes, enabling new merchants to
seamlessly join the platform.
● Developed features related to card transaction processing, ensuring secure
and efficient payment handling.
● Participated in implementing dispute management functionalities, providing a
mechanism for resolving payment-related disputes.
● Contributed to the development of financial operations and merchant
settlement procedures, optimizing payment flows.
● Implemented functionalities related to invoicing and reporting, offering clients
transparent insights into their transactions.
Team:Collaborated within a multidisciplinary team, which included Software
Engineers, QA Engineers, and Business Analysts.
Database: Utilized MongoDB for efficient data storage and retrieval.
Tools: Employed a variety of tools including Swagger for API documentation, Docker
Desktop for containerization, Jenkins for continuous integration, AWS for cloud
infrastructure, Postman for API testing, and Atlassian tools for project management.
Technologies: Leveraged Node.js (Hapi) to develop robust and efficient backend
services. Used Docker Compose for managing containerized applications and Redis
for in-memory data caching.
This experience illustrates my role in enhancing Verifone's payment processing
system to ensure smooth merchant onboarding, transaction processing, dispute
resolution, financial operations, settlement procedures, and reporting. As a Backend
Developer, I collaborated within a dedicated team to bolster the platform'scapabilities, delivering reliable and secure payment processing for Verifone's clients."
                        />
                        <ExperienceModal
                            title="Sr. Full stack Developer"
                            subTitle="Golden SB tech, Yerevan"
                            result="Jan 2018-Present"
                            des="Project: Gambling Going on Planning"
                        />
                    </div>
                </div>
                <div>
                    <div
                        className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ExperienceModal
                            title="Full Stack Developer"
                            subTitle="Epam Systems, Yerevan"
                            result="Jan 2018-Dec 2019"
                            des="Project: EPM-RDAM - RD Activities and Education Tracking System
Project Roles: Full Stack Key Developer
Customer: EPAM Systems, Inc., Software & Hi-Tech
Project Description: The EPM-RDAM project was initiated to effectively track and
manage Research and Development (RD)-related activities and education costs
within EPAM Systems' Armenia Office. This project aimed to separate RD activities
from other General Delivery Offices (GDOs) and replace the outdated EPM-FARM
system with a modern solution.
Participation:
As a Full Stack Key Developer on the EPM-RDAM project, I took on a leadership
role and played a significant part in multiple aspects of the project's development:
● Implemented Create, Read, Update, and Delete (CRUD) operations for
various forms, ensuring seamless data management.
● Developed response handling mechanisms and views for these operations,
enriching user interactions.
● Implemented robust error handling processes to ensure a smooth user
experience and data integrity.
● Integrated email verification handling using routers to enhance security.
● Created custom helper hooks to streamline common functionalities and
promote code reusability.
● Implemented translation logic using the react-i18next library, enabling
multi-language support.
● Conducted thorough code reviews to ensure code quality and maintainability.
Team: Collaborated with a diverse team, including 7 Software Engineers, 2 QA team
members, 2 Business Analysts, and 1 UI/UX designer.
Database: Utilized PostgreSQL for efficient data storage and retrieval.
Tools: Employed a range of tools including Postman for API testing, WebStorm as
the primary IDE, Figma for UI/UX design, AWS for cloud services, Swagger for API
documentation, and DBWeare for database management.
Technologies: Leveraged Java (Spring, Hibernate) for backend development,
creating a robust and scalable server-side infrastructure. For the frontend, utilizedReact with Redux for state management, ensuring an interactive and responsive
user interface.
My role as the Full Stack Key Developer in the EPM-RDAM project involved
overseeing and implementing various aspects of the system, from data management
to user interface design. This experience showcases my leadership, technical
expertise, and ability to collaborate within a multidisciplinary team to deliver a
modern solution that addresses specific organizational needs."
                        />
                    </div>
                </div>
            </motion.div>
        </>

    );
};

export default Experience;
