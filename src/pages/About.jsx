import React from "react";
import Layout from "../layout/Layout";
import { HeaderTitle } from "../components";

const About = () => {
  return (
    <Layout>
      <div className="py-10 ">
        <HeaderTitle headerTitle={"John Doe"} />
        <div className="flex flex-col items-center sm:p-3 ">
          <img
            src="src/assets/images/Image9.png"
            alt="John Doe"
            className="w-96  object-cover rounded-3xl mb-6 "
          />

          <div className="sm:ml-10">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2">About Me</h2>
              <p>
                As a passionate and experienced UI designer, I am dedicated to
                creating intuitive and engaging user experiences that meet the
                needs of my clients and their users. I have a strong
                understanding of design principles and proficiency in design
                tools. Comfortable working with cross-functional teams to bring
                projects to fruition, I am confident in my ability to create
                designs that are both visually appealing and functional. I am
                always looking for new challenges and opportunities to grow as a
                designer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2">Skills</h2>
              <ul className="list-disc ml-6">
                <li>
                  Extensive experience in UI design with a strong portfolio
                </li>
                <li>Proficiency in design tools like Adobe Creative Suite</li>
                <li>
                  Excellent visual design skills and understanding of layout
                </li>
                <li>Ability to create wireframes and prototypes</li>
                <li>Strong communication and collaboration skills</li>
                <li>Experience in user research and gathering insights</li>
                <li>Proficiency in HTML, CSS, and JavaScript</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2">Experience</h2>
              <ul className="list-disc ml-6">
                <li>5 years of experience as a UI designer</li>
                <li>Led the design of a successful e-commerce website</li>
                <li>
                  Created wireframes and prototypes for a mobile banking app
                </li>
                <li>Conducted user research and usability testing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">Education</h2>
              <ul className="list-disc ml-6">
                <li>Bachelor's degree in Graphic Design</li>
                <li>Certified User Experience Designer (CUED)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
