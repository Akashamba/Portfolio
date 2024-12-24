// const grad1 = "linear-gradient(to bottom, rgb(22, 17, 24) 1%, rgb(22, 22, 172))"
const grad1 = "linear-gradient(to bottom, #2528fd, #017e97)"
const grad2 = "linear-gradient(to bottom, #017e97,  #09bc8a)"
const grad3 = "linear-gradient(to bottom, #09bc8a,#4ab438)"
const grad4 = "linear-gradient(to bottom, #4ab438, #017e97)"
const grad5 = "linear-gradient(to bottom, #017e97, rgb(22, 17, 24))"


export const content = {
  sections: {
    experience: {
      sectionHeader: "Experience",
      items: [
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Basik Marketing: The Esports Club",
          subSubHeading: "Feb 2022 - Aug 2022",
          description: "Achieved a 20% performance boost by developing and integrating a custom JavaScript bracketing system supporting formats like single/double elimination and round robin. Partnered with backend teams for scalability and enhanced code maintainability using the Context API."
        },
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Nokia Solutions and Networks",
          subSubHeading: "Oct 2020 - Jan 2021",
          description: "Optimized warehouse operations by 40% through the development of a React.js-based inventory management system. Simplified warehouse operations with real-time data visualizations using Charts.js. Boosted team collaboration by providing feedback on code and coordinating tasks in a GitLab environment."
        }
        ],
      options: {
        // backgroundImage: "linear-gradient(to top, #4481eb 0%,hsl(195, 99.20%, 50.60%) 100%)",
        backgroundImage: grad1,
        backgroundColor: "rgb(0,150,181)",
      },
    },
    projects: {
      sectionHeader: "Projects",
      items: [
        {
          mainHeading: "Broadcasting in Stars of Cliques",
          description: "Developed an O(n · log n) algorithm to optimize broadcast time in 'Star of Cliques' networks. Proved algorithmic optimality and explored applications in polynomial solutions for other graph structures. Published at IWOCA 2024 in Ischia, Italy.",
          link: [
            "Published Paper",
            "https://link.springer.com/chapter/10.1007/978-3-031-63021-7_37"
          ]
        },
        {
          mainHeading: "Single Sign-On Authentication System",
          description: "Proposed a Single Sign-On Authentication System that uses government IDs to authenticate users, incorporating biometric cross-referencing to enhance security. Patent issued by the German Patent and Trademark Office.",
          link: [
            "Patent Certificate",
            "https://drive.google.com/file/d/1TFlC6xAzcwiONRcXzoJSf6gm8ATKjbNh/view?usp=sharing"
          ]
        },
        {
          mainHeading: "Exploration of Performance of Dynamic Branch Predictors",
          description: "Achieved up to 98.2% branch prediction accuracy by implementing and evaluating five popular strategies using a simulation framework developed in SimpleScalar. Published findings at ICICICT 2022.",
          link: [
            "Published Paper",
            "https://ieeexplore.ieee.org/abstract/document/9917915"
          ]
        },
        {
          mainHeading: "Plagiarism Detection Tool",
          description: "Designed a Python-based plagiarism detection tool using n-gram tokenization, cosine similarity, and Levenshtein Distance algorithms to improve detection accuracy.",
          link: [
            "GitHub Repository",
            "https://github.com/Akashamba/COMP6651-Plagiarism-Detector"
          ]
        },
        {
          mainHeading: "ElasticERL: Equipment History Report Listing",
          description: "Implemented ElasticERL, a dynamic ADT in Java that optimizes performance and memory usage by adaptively switching between expandable arrays and AVL trees based on data size.",
          link: [
            "GitHub Repository",
            "https://github.com/Akashamba/COMP6481-ElasticERL"
          ]
        }
      ],
      options: {
        backgroundImage: grad2,
        backgroundColor: "rgb(95,167,134)",
      },
    },
    technicalSkills: {
      sectionHeader: "Technical Skills",
      items: [
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Basik Marketing: The Esports Club",
          subSubHeading: "Feb 2022 - Aug 2022",
          description: "Achieved a 20% performance boost by developing and integrating a custom JavaScript bracketing system supporting formats like single/double elimination and round robin. Partnered with backend teams for scalability and enhanced code maintainability using the Context API."
        },
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Nokia Solutions and Networks",
          subSubHeading: "Oct 2020 - Jan 2021",
          description: "Optimized warehouse operations by 40% through the development of a React.js-based inventory management system. Simplified warehouse operations with real-time data visualizations using Charts.js. Boosted team collaboration by providing feedback on code and coordinating tasks in a GitLab environment."
        }
        ],
      options: {
        backgroundImage: grad5,
        backgroundColor: "#fff",
      },
    },
    education: {
      sectionHeader: "Experience",
      items: [
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Basik Marketing: The Esports Club",
          subSubHeading: "Feb 2022 - Aug 2022",
          description: "Achieved a 20% performance boost by developing and integrating a custom JavaScript bracketing system supporting formats like single/double elimination and round robin. Partnered with backend teams for scalability and enhanced code maintainability using the Context API."
        },
        {
          mainHeading: "Software Engineer Intern",
          subHeading: "Nokia Solutions and Networks",
          subSubHeading: "Oct 2020 - Jan 2021",
          description: "Optimized warehouse operations by 40% through the development of a React.js-based inventory management system. Simplified warehouse operations with real-time data visualizations using Charts.js. Boosted team collaboration by providing feedback on code and coordinating tasks in a GitLab environment."
        }
        ],
      options: {
        backgroundImage: "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
        backgroundColor: "#4481eb",
      },
    },
    interests: {
      sectionHeader: "Interests",
      items: [
        {
          mainHeading: "Algorithms and Graph Theory",
          description:
            "My current research interests are in combinatorics of networks and broadcasting algorithms.",
        },
        {
          mainHeading: "Languages, Tools, and Frameworks",
          description:
            "Python, Java, Javascript, React, Node.js, Flask, git, GitHub, Visual Studio Code, Jupyter Notebooks, Figma, LaTex",
        },
        {
          mainHeading: "Software Engineering",
          description:
            "I am an enthusiastic software engineer with experience in web development",
          // particularly frontend development using React.
        },
        // {
        //   mainHeading: "Machine Learning",
        //   description:
        //     "I am a passionate machine learning engineer. Problems involving Natural Language Processing (NLP) pique my interest.",
        // },
        {
          mainHeading: "UI/UX Design",
          description:
            "I am an enthusiastic UI/UX designer. I have experience in designing user interfaces and experiences for web and mobile applications.",
        },
      ],
      options: {
        backgroundImage: grad3,
        backgroundColor: "#667eea",
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
        backgroundImage: grad4,
        // backgroundColor: "rgb(0,150,181)",
      },
    },
  },
  order: [
    "experience",
    "projects",
    "interests",
    "certifications",
    "technicalSkills",
  ],
};
