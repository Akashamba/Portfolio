// const grad1 = "linear-gradient(to bottom, rgb(22, 17, 24) 1%, rgb(22, 22, 172))"
const grad1 = "linear-gradient(to bottom, #2528fd, #017e97)";
const grad2 = "linear-gradient(to bottom, #017e97,  #09bc8a)";
const grad3 = "linear-gradient(to bottom, #09bc8a,#4ab438)";
const grad4 = "linear-gradient(to bottom, #4ab438, #017e97)";
const grad5 = "linear-gradient(to bottom, #017e97, rgb(22, 17, 24))";

export const content = {
  sections: {
    experience: {
      sectionHeader: "Experience",
      items: [
        {
          mainHeading: "Graduate Research Assistant",
          subHeading: "Concordia University",
          subsubHeading: "Sep 2022 - Aug 2024",
          description:
            "As a funded graduate researcher in the Algorithms and Complexity Lab, my thesis focused on efficient broadcasting algorithms for networks containing intersecting cliques, including windmill graphs and block graphs. I developed polynomial-time solutions for NP-hard problems, advancing information dissemination in complex graph structures.",
          link: [
            "Master's Thesis: Broadcasting in graphs containing intersecting cliques",
            "https://spectrum.library.concordia.ca/id/eprint/994411/",
          ],
        },
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Basik Marketing: The Esports Club",
          subsubHeading: "Feb 2022 - Aug 2022",
          description:
            "As a Software Engineering Intern at The Esports Club, I built a custom tournament bracketing system using React and Next.js, optimized UI development with Tailwind CSS and Storybook, streamlined collaboration, and crafted user-friendly tools for organizers.",
        },
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Nokia Solutions and Networks",
          subsubHeading: "Oct 2020 - Jan 2021",
          description:
            "During my internship at Nokia, I developed a React-based inventory management app, streamlined warehouse operations by 40%, designed real-time data visualizations with Charts.js, and contributed to maintaining clean, efficient team workflows.",
        },
      ],
      options: {
        // backgroundImage: "linear-gradient(to top, #4481eb 0%,hsl(195, 99.20%, 50.60%) 100%)",
        backgroundImage: grad1,
        backgroundColor: "rgb(0,150,181)",
      },
    },
    projects: {
      sectionHeader: "Projects and Publications",
      items: [
        {
          mainHeading: "Broadcasting in Stars of Cliques",
          description:
            "At IWOCA 2024, I presented an O(n⋅logn) algorithm for optimizing broadcast time in Star of Cliques networks. This work proved algorithmic optimality, introduced binary-based techniques for tracking unaddressed vertices, and demonstrated its significance in efficient message dissemination. Published in Ischia, Italy.",
          link: [
            "Published Paper",
            "https://link.springer.com/chapter/10.1007/978-3-031-63021-7_37",
          ],
        },
        {
          mainHeading: "Plagiarism Detector",
          description:
            "For my COMP 6651 project, I built a Python-based plagiarism detection tool that integrates n-gram tokenization, cosine similarity, and Levenshtein Distance to accurately detect text similarities. This hybrid approach enhances both efficiency and accuracy in identifying potential plagiarism.",
          link: [
            "GitHub",
            "https://github.com/Akashamba/COMP6651-Plagiarism-Detector",
          ],
        },
        {
          mainHeading: "Coronavirus Tracker",
          description:
            "I built a React-based web app to monitor Covid-19, featuring live updates and location-based data. It leverages the covid19india.org API and uses Charts.js to provide clear, interactive visualizations of the pandemic's spread.",
          link: ["Web App", "https://coronavirus-tracker-live.netlify.app"],
        },
        {
          mainHeading: "SSO Authentication System",
          description:
            "As part of a team, I contributed to the development of a Single Sign-On authentication system using government IDs and biometric cross-referencing for secure user verification. The system is patented with the German Patent and Trademark Office.",
          link: [
            "Patent certificate",
            "https://drive.google.com/file/d/1TFlC6xAzcwiONRcXzoJSf6gm8ATKjbNh/view",
          ],
        },
        {
          mainHeading:
            "Exploration of Performance of Dynamic Branch Predictors",
          description:
            "During my undergraduate capstone project, I led a team to implement and evaluate five dynamic branch prediction strategies using SimpleScalar, analyzing accuracy, MPKI, and IPC. Mentored by Dr. Shounak Chakraborty from the Norwegian University of Science and Technology. Published at ICICICT 2022.",
          link: [
            "Published Paper",
            "https://ieeexplore.ieee.org/abstract/document/9917915",
          ],
        },
        {
          mainHeading: "ElasticERL: Equipment History Report Listing",
          description:
            "For my COMP 6481 project, I created ElasticERL, a dynamic Java-based data structure that switches between expandable arrays and AVL trees, optimizing memory and performance for managing and sorting equipment history reports efficiently.",
          link: ["GitHub", "https://github.com/Akashamba/COMP6481-ElasticERL"],
        },
      ],
      options: {
        backgroundImage: grad2,
        backgroundColor: "rgb(95,167,134)",
      },
    },
    certifications: {
      sectionHeader: "Certifications",
      items: [
        {
          mainHeading: "Web Development Specialization",
          description: "Taught by the University of Michigan on Coursera",
          link: [
            "Certificate",
            "https://www.coursera.org/verify/specialization/CQ6DZNM49XE4",
          ],
        },
        {
          mainHeading: "Neural Networks and Deep Learning",
          description: "Taught by Andrew Ng on Coursera",
          link: [
            "Certificate",
            "https://www.coursera.org/account/accomplishments/verify/JW9WJW83DNZJ",
          ],
        },
        {
          mainHeading: "Object-Oriented Design",
          description: "Taught by the University of Alberta on Coursera",
          link: [
            "Certificate",
            "https://www.coursera.org/account/accomplishments/verify/3BH3R5PRBBQZ",
          ],
        },
        {
          mainHeading: "Toastmasters Speech Contest",
          subHeading: "Winner",
          link: [
            "Certificate",
            "https://drive.google.com/file/d/12mS2e8EUY8-dlsaTanbAPBYAMcT8UPPa/view?usp=sharing",
          ],
        },
        {
          mainHeading: "Idea Presentation Contest",
          subHeading: "Second Place",
          description:
            "Presented an idea for a Motion Microscope to detect Covid-19. Discussed a no-contact method for mass detection of Coronavirus in a large crowd.",
          link: [
            "Certificate",
            "https://drive.google.com/file/d/1cYdpu472JywsFOiKQIpg4ud1Jv7QvXAx/view?usp=sharing",
          ],
        },
        {
          mainHeading: "Head Boy",
          description: "Elected as Head Boy by Faculty during Grade 12.",
        },
      ],
      options: {
        // backgroundImage: "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
        backgroundImage: grad3,
        // backgroundColor: "rgb(0,150,181)",
      },
    },
  },
  order: ["experience", "projects", "certifications"],
};
