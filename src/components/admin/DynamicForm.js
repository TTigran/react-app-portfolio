import React from 'react';
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperiencForm";
import VolunteeringForm from "./forms/VolunteeringForm";
import ProjectsForm from "./forms/ProjectsForm";
import AboutForm from "./forms/AboutForm";
import MediaForm from "./forms/MediaForm";
import HomeForm from "./forms/HomeForm";
import FeaturesForm from "./forms/FeaturesForm";
import ContactForm from "./forms/ContactForm";


function DynamicForm({value}) {

    const getForms = (value) => {
        switch (value) {
            case "Education":
                return <EducationForm/>;
                break;
            case "Volunteering":
                return <VolunteeringForm/>;
                break;
            case "Experience":
                return <ExperienceForm/>;
                break;
            case "Projects":
                return <ProjectsForm/>;
                break;
            case "About":
                return <AboutForm/>;
                break;
            case "Media":
                return <MediaForm/>;
                break;
            case "Features":
                return <FeaturesForm />;
                break;
            case "Project":
                return <ProjectsForm />;
                break;
            case "Contact":
                return <ContactForm />;
                break;
            case "Home":
                return <HomeForm/>;
                break;
        }
    }


    return <div>
        <br/>
        <h1 style={{fontSize: "30px"}}>{value} ... </h1>
        <br/>
        {getForms(value)}
    </div>
}

export default DynamicForm;