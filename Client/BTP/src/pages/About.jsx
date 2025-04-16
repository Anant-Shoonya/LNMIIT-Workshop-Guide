import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Page Title */}
      <div className="about-header">
        <h1 className="about-title">About MME</h1>

        <p className="about-subtitle">
          Dedicated to fostering innovation, excellence, and leadership in Mechanical and Mechatronics Engineering.
        </p>
      </div>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="section-text">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-content">
            Our vision is to be a global leader in Mechanical and Mechatronics Engineering education, research, and innovation. We envision a future where our graduates are at the forefront of technological advancements, driving sustainable solutions for the challenges of tomorrow. Our department aims to be a hub of excellence, inspiring students and faculty to achieve their highest potential and make meaningful contributions to industry, academia, and society at large. By fostering a culture of curiosity and continuous improvement, we strive to shape the next generation of engineers who will lead with integrity and vision.          </p>
        </div>
        <img src="/assets/vision.jpg" alt="Vision" className="section-image" />
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <img src="/assets/mission.jpg" alt="Mission" className="section-image" />
        <div className="section-text">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-content">
          Our mission is to foster excellence and innovation by integrating theoretical knowledge with practical application. We empower students and faculty to pursue groundbreaking research and develop solutions to complex engineering challenges. Our education emphasizes technical expertise, ethics, and leadership, preparing students for a dynamic global landscape. Strong industry partnerships ensure our programs remain relevant and impactful, while a commitment to sustainability instills environmental awareness and responsibility. Together, we shape future-ready engineers poised to contribute meaningfully to society and industry.
          </p>
        </div>
      </section>

      {/* Program Outcomes Section */}
      <section className="po-section">
        <h2 className="section-title">Program Outcomes (POs)</h2>
        <ul className="po-list">
          <li><strong>PO1 – Engineering knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and engineering specialization to the solution of complex engineering problems.</li>
          <li><strong>PO2 – Problem analysis:</strong> Identify, formulate, research literature, and analyze engineering problems to arrive at substantiated conclusions using first principles of mathematics, natural, and engineering sciences.</li>
          <li><strong>PO3 – Design/development of solutions:</strong> Design solutions for complex engineering problems and design system components, processes to meet the specifications with consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
          <li><strong>PO4 – Conduct investigations of complex problems:</strong> Use research-based knowledge including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
          <li><strong>PO5 – Modern tool usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
          <li><strong>PO6 – The engineer and society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
          <li><strong>PO7 – Environment and sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
          <li><strong>PO8 – Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
          <li><strong>PO9 – Individual and team work:</strong> Function effectively as an individual, and as a member or leader in teams, and in multidisciplinary settings.</li>
          <li><strong>PO10 – Communication:</strong> Communicate effectively with the engineering community and with society at large. Be able to comprehend and write effective reports documentation. Make effective presentations, and give and receive clear instructions.</li>
          <li><strong>PO11 – Project management and finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team. Manage projects in multidisciplinary environments.</li>
          <li><strong>PO12 – Life-long learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
        </ul>
      </section>

      {/* HOD Message Section */}
      <section className="hod-message-section">
        <div className="hod-message-content p-1">
          <div className="hod-text flex space-x-20">
            <img
              src="/assets/hod-message.jpg"
              alt="Message from the HOD"
              className="section-image-hod rounded-md"
            />
            <div>
              <h2 className="section-title">Message from the HOD</h2>
              <br />
              <p className="section-content">
                Dear Students, Faculty Members, and Stakeholders,
                <br />
                Welcome to the Department of Mechanical and Mechatronics Engineering at our esteemed institution. As the Head of the Department, I take immense pride in leading a team of dedicated faculty and talented students. Together, we aim to foster a vibrant academic environment that nurtures creativity, innovation, and excellence.
                <br />
                At our department, we focus on blending theoretical knowledge with practical applications to prepare our students for the ever-evolving challenges of the engineering world. Our curriculum is meticulously designed to instill technical expertise, critical thinking, and problem-solving skills while emphasizing ethical practices and social responsibility.
                <br />
                We also place a strong emphasis on research and innovation, encouraging our students and faculty to engage in cutting-edge projects that address real-world challenges. Our state-of-the-art facilities and robust industry partnerships ensure that our graduates are not only job-ready but also equipped to become leaders and change-makers in their respective fields.
                <br />
                I invite you to explore the numerous opportunities that our department offers and to join us in our mission to shape the future of engineering. Let us work together to achieve new milestones and make meaningful contributions to society.
                <br />
                Best regards,
                <br /><br />
                Dr. Deepak Rajendra Unune
                <br />
                Head of the Department
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
