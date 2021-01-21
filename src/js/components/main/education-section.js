import React from 'react';
import { SectionBullet } from './section-bullet';
import { SectionContent } from './section-content';
import { SectionTitle } from './section-title';

const parentClassName = "education-section";

export function EducationSection() {
    return (
        <div className="education-section">
            <SectionTitle 
                title="Education"
                parentClassName={parentClassName}
            >
            </SectionTitle>
            <SectionContent 
                header="B.A, Computer Science, Linguistics Concentration"
                dates="2014 - 2018"
                location="Grinnell College"
                parentClassName={parentClassName}
            >   
                <SectionBullet parentClassName={parentClassName} content="Won 1st place in inaugural Hackathon."></SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Studied abroad in Budapest, Hungary at Aquincum Institute of Technology."></SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Member of Gourment Cuisine Society, Food Recovery Network, the Grinnell tennis team, and the club ultimate team."></SectionBullet>
            </SectionContent>
            <SectionContent 
                header="Undergraduate Research - Evolutionary Computation"
                dates="Summer 2018"
                location="Grinnell College"
                parentClassName={parentClassName}
            >   
                <div className="education-section__project-title">
                    Artificial Life in Games for Intuitive Evolution Education
                </div>
                <SectionBullet parentClassName={parentClassName} content="Used C# to implement artificial life models of fish populations and lifecycles."></SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Modded the video game Stardew Valley with this artificial ocean model,
                simulating fishery collapse to educate players about dynamic life systems."></SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Contributed to the open-source modding community on NexusMods.com."></SectionBullet>
            </SectionContent>
            <SectionContent 
                header="Undergraduate Research - Program Synthesis"
                dates="Summer 2016"
                location="Grinnell College"
                parentClassName={parentClassName}
            >   
                <div className="education-section__project-title">
                    Semi-Automated Program Synthesis
                </div>
                <SectionBullet parentClassName={parentClassName} content="Extended Emacs to serve as a GUI for our advisor's program synthesizer."></SectionBullet>
                <SectionBullet parentClassName={parentClassName} content="Integrated the synthesizer into this Emacs extension
                to allow developers to use the synthesizer in a semi-automated manner."></SectionBullet>
            </SectionContent>
        </div>
    );
}

