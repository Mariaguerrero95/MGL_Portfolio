import "../scss/components/Main.scss";
import { useState } from "react";

function Main() {
    const [activeTab, setActiveTab] = useState("description");

    const renderContent = () => {
        switch (activeTab) {
            case "description":
                return (
                    <p>
                        I am an enthusiastic and detail-oriented coder with a keen interest in
                        front-end development and web design. I am passionate about creating
                        user-friendly, responsive websites and improving user experiences. I am
                        looking for work opportunities where I can apply my skills in HTML, CSS,
                        JavaScript, and React but am open to work on back-end solutions, such as
                        mySQL and expressJS. I am a fast learner, always eager to stay up to date
                        with the latest industry trends and technologies, and I thrive in
                        collaborative environments where I can contribute to meaningful projects
                        and grow professionally.
                    </p>
                );
            case "education":
                return (
                    <div>
                        <h3>FULL STACK WEB DEVELOPMENT BOOTCAMP - ADALAB</h3>
                        <p>
                            Sep. 24 - Dec. 24<br />
                            FRONTEND: HTML5, CSS3, JavaScript and React<br />
                            BACKEND: Node.js, mySQL, Express.js<br />
                            VERSION CONTROL & COLLABORATION:<br />
                            Git and GitHub: Repository management and team collaboration<br />
                            Pair programming: Active collaboration with other developers to solve
                            problems in real time<br />
                            Tools & Methodologies: Git, Agile (Scrum)
                        </p>
                        <h3>HIGHER DEGREE IN MARKETING AND PUBLICITY - ESP University</h3>
                        <p>
                            Sep. 16 - Jul. 18<br />
                            Developed a strong foundation in consumer behavior, advertising
                            strategy, and brand management. Specialized in digital marketing tools
                            and analytics to measure campaign effectiveness.
                        </p>
                        <h3>BRAND MANAGEMENT COURSE - London Business School</h3>
                        <p>
                            Sep. 20 - Oct. 24<br />
                            Focused on aligning business objectives with brand behavior to drive
                            customer loyalty and brand equity. Studied best practices in brand
                            positioning, storytelling, and strategic market differentiation.
                        </p>
                    </div>
                );
            case "work":
                return (
                    <div>
                        <h3>ASSISTANT PROJECT DEPARTMENT AT LEYTON</h3>
                        <p>Jan. 24 - Jun. 24</p>
                        <h3>
                            RECEPCIONIST, WAITRESS AND FRONT-OF-HOUSE STAFF AT VARIOUS HOTELS
                            AROUND AUSTRALIA
                        </h3>
                        <p>
                            Oct. 22 - Oct. 23<br />
                            Stradbroke Beach Hotel, Stanley Hotel, and Arkarooola Wilderness Sanctuary.<br />
                            Responsibilities included customer service, till operations, order taking, and food
                            pass coordination.
                        </p>
                        <h3>RECEPCIONIST AT SANTANDER BANK SPAIN</h3>
                        <p>Dec. 21 - Jul. 22</p>
                        <h3>RECEPCIONIST AT ELIGE WORK PLACE - Business Center</h3>
                        <p>Jan. 20 - Jun. 20</p>
                        <h3>HOSTESS</h3>
                        <p>2016 - 2019<br />Hostess and customer service in events and congresses with different agencies.</p>
                    </div>
                );
            case "skills":
                return (
                    <div>
                        <h3>LANGUAGES</h3>
                        <p>
                            Spanish: Native<br />
                            English: Fluent C1
                        </p>
                        <h3>INTERNATIONAL EXPERIENCE</h3>
                        <p>
                            Lived in Australia<br />
                            Currently living in Italy<br />
                            Open to relocation
                        </p>
                        <h3>SKILLS SUMMARY</h3>
                        <p>
                            Front-end Developer skills (HTML, SASS, JavaScript, React)<br />
                            Back-end Developer skills (mySQL, expressJS)<br />
                            Social media management<br />
                            Office and Photoshop pack<br />
                            Leadership skills
                        </p>
                        <h3>ADDITIONAL INFORMATION</h3>
                        <p>
                            Tennis player with experience in local tournaments<br />
                            Bachelor's Degree in Photography
                        </p>
                        
                    </div>
                );
            default:
                return <p>Seleccione una sección para ver el contenido</p>;
        }
    };

    return (
        <div className="main-container">
            <header>
                <h1>MARÍA GUERRERO LOBO</h1>
                <h2>WEB DEVELOPER</h2>
            </header>
            <nav>
                <ul>
                    <li onClick={() => setActiveTab("description")}>Description</li>
                    <li onClick={() => setActiveTab("education")}>Educational History</li>
                    <li onClick={() => setActiveTab("work")}>Work Experience</li>
                    <li onClick={() => setActiveTab("skills")}>About me</li>
                </ul>
            </nav>
            <section className={`content ${activeTab === "description" ? "centered" : "aligned-left"}`}>
                {renderContent()}
            </section>
        </div>
    );
}

export default Main;
