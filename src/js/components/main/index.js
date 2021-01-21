import React from 'react';
import {ProfessionalExperienceSection} from "./professional-experience-section";
import {EducationSection} from "./education-section";

export function MainContent() {
    return (
        <div>
            <ProfessionalExperienceSection></ProfessionalExperienceSection>
            <EducationSection></EducationSection>
        </div>
    )
}