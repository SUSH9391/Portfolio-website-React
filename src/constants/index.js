import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A dedicated undergraduate student seeking an entry-level position at an organization where I can apply my skills, gain hands-on experience, and contribute as a full-stack Python developer. Eager to collaborate with a dynamic team and make meaningful contributions to projects while enhancing my technical and professional expertise.`;

export const ABOUT_TEXT = `I have expertise in Full-Stack Python development, enabling me to build end-to-end web applications with robust backend and interactive frontend components. Additionally, I have experience in AI/ML projects, including data preprocessing, model development, and deployment. With a strong passion for data science, I am continuously enhancing my skills in statistical analysis, machine learning algorithms, and big data processing to solve real-world problems. My goal is to leverage these capabilities to drive data-driven insights and innovative solutions. `;

export const EXPERIENCES = [
  {
    year: "Sep. 2024 - Oct. 2024",
    role: "Intern",
    company: "Unified Mentors",
    description: `Understood the broad concept of machine learning and created a simple project to predict whether a patient has heart disease.`,
    technologies: ["Machine Learning"],
  },
  {
    year: "May. 2024",
    role: "Intern",
    company: "Cloud Institutions",
    description: `Gained insightful knowledge about various types of cloud instances in use, created a simple Java project, and
                  containerized it using Docker.`,
    technologies: ["Java", "Docker", "J2EE", "J2SE"],
  },

  {
    year: "2023",
    role: "Machine Learning Intern",
    company: "Unifirst Robotics",
    description: `Gained experience on building generative AI models and and performed data analysis using tableau  `,
    technologies: ["Tableau", "Python", "Microsoft Power-BI"],
  },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    image: project1,
    description:
      "A fully functional website build using react along with vite framework simple and filled with creativity.",
    technologies: ["HTML", "CSS", "React", "Vite", "Framer-motion", "Javascript"],
  },
  {
    title: "Login/Signup template",
    image: project2,
    description:
      "A website created using Full-stack technologies to demonstrate the functionality of MERN stack",
    technologies: ["Express", "MongoDB", "NodeJS", "React"],
  },
  {
    title: "Machine Learning based web application",
    image: project3,
    description:
      "This project integrates machine learning, HTML, and Tesseract-OCR in Python to build a web application. Users can upload images of handwritten text, which the system processes to extract and display the text in a textbox for editing or documentation.",
    technologies: [ "Tesseract-OCR", "Python" ,"Streamlit"],
  },
  {
    title: "Resort Management System",
    image: project4,
    description:
      "This project involves creating a dynamic website using PHP to generate and manage interactive content.It integrates MySQL for efficient data storage, retrieval, and management, enabling seamless server-side functionality",
    technologies: ["php", "CSS", "MySQL"],
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka ",
  phoneNo: "+91 8073542847 ",
  email: "sushmitha_baliga_b@outlook.com",
};
