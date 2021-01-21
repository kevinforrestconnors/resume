import React from 'react';
import { SectionContent } from './section-content';
import { SectionTitle } from './section-title';
import { SectionBullet } from './section-bullet';
import { SectionSubBullet } from './section-sub-bullet';

const parentClassName = "professional-experience-section";

export function ProfessionalExperienceSection() {
    return (
        <div className="professional-experience-section">
            <SectionTitle 
                title="Professional Experience"
                parentClassName={parentClassName}
            >
            </SectionTitle>
            <SectionContent 
                header="Full-Stack Developer - John Deere"
                dates="October 2019 - Present"
                location="Des Moines, IA"
                parentClassName={parentClassName}
            >
                <div className="experience-section__language-blurbs">
                    TypeScript, JavaScript, React, SQL, AWS, CSS
                </div>
                <SectionBullet parentClassName={parentClassName} content="Worked on a team which released a new version of the smart agricultural machine tool for file management and sharing.">
                    <SectionSubBullet parentClassName={parentClassName} content="Developed back-end data transfer protocols and APIs used by the machines, and a React site for file management."></SectionSubBullet>
                    <SectionSubBullet parentClassName={parentClassName} content="Split and migrated existing features from a monorepo to more maintainable microservices."></SectionSubBullet>
                    <SectionSubBullet parentClassName={parentClassName} content="Implemented new features to support new data transfer protocols and data structures."></SectionSubBullet>
                    <SectionSubBullet parentClassName={parentClassName} content="During the conversion and development process, used TypeScript for every repository."></SectionSubBullet>
                </SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Acted as regular scheduled on-call support for production incidents affecting various applications in the John Deere web application ecosystem."></SectionBullet>
            </SectionContent>

            <SectionContent 
                header="Software Developer - Visionary Services"
                dates="Jan  2019 - October 2019"
                location="Des Moines, IA"
                parentClassName={parentClassName}
            >
                <div className="experience-section__language-blurbs">
                    JavaScript, PHP, SQL, CSS
                </div>
                <SectionBullet parentClassName={parentClassName} content="Managed a website used by over 4,900 independent businesses for contracting package shipments through the world's second-largest shipping company.">
                    <SectionSubBullet parentClassName={parentClassName} content="Implemented a new legal agreement for the businesses, along with a queue-based system for third-party vendor management to approve or reject applications."></SectionSubBullet>
                </SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Developed a generic asset management service for internal managerial staff to track and generate reports about company liabilities and assets."></SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Provided website maintenance for medium-to-large companies in the Des Moines area."></SectionBullet>
            </SectionContent>

            <SectionContent 
                header="Junior Web Developer - Fresh Tilled Soil"
                dates="Summer 2015"
                location="Watertown, MA"
                parentClassName={parentClassName}
            >
                <div className="experience-section__language-blurbs">
                    JavaScript, PHP, SQL, CSS
                </div>
                <SectionBullet parentClassName={parentClassName} content="Maintained an iPad application, Enter, that serves as a virtual secretary."></SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Created data visualizations for sales analytics using PHP and JavaScript."></SectionBullet>
            </SectionContent>
        </div>
    );
}