import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  smartknower,
  ciya,
  zht,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Developer",
    icon: creator,
  },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Tailwind",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAiCAMAAAA9FerRAAAARVBMVEX///84vfgvu/gjufgSt/fu+P7U7v1oyflix/na8P2L1Pqj3PvK6v3y+v665PxIwfhyzPpWxPmx4fya2fuB0Prm9f4Asveh2y9VAAABXUlEQVQ4jZWV25aDIAxFSxJAEFG8zP9/6qRUWw2sSs+jZms45PJ4VDVEb0elxs5HXY+oyllCUFmA1JlWbqWd2lmyQxOXUAkBuAauA8mxKNxyCz7/UMC35EaAMK3TSPCV7CU4UXqZqD0JMp7CbBSc/vt8ygiTyL+jEhUnPH9Jq2u6MM4bP3aecJHgNQNJKuTCQK4NKM15fCebL2eokVQkWpMt6qiN42PjBUW4z/PQnNiTLKQ0VwK0M8ZV20+H3q+r70Pl7WyBkEVg57YuylrenZt7198TWZsS1gE2OeBEObd6PhQ3lW1fb0FueS5AlCUiyU1ygX3xMcRFzporORSGjXS0YBCFidMnSqMcko5OOXSyAY/pNpOSP/SXYphk13d9MGFRiHJWyDNLEl6+QZJcIUnux23YIHK65Yyb1keUV9q2AVjDeesANJc8S/cp9xh3Wep/WZBPbSYEU9TZW/80TwrZnrh1gAAAAABJRU5ErkJggg==",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Flutter",
        image:
          "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },

      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "Appwrite",
        image: "https://appwrite.io/images/logos/appwrite.svg",
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Kotlin",
        image:
          "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
      {
        name: "Jetpack Compose",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5wggXFTVLF0t58SuNrl4mii6x96w0CN3ef84eLfYUDImc4GBwxv-vWGufrmiDhSHXb6_9_PQz_sh8hdbt5oruCKFNxCl2QUdhzzUAZNNQVIiIZzXq58zkwtfohLsOAUqxArZ_XXYw-No/s1600/JetpackCompose_logo.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://git-scm.com/images/logo@2x.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Vercel",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAqCAMAAADRRmi8AAAAY1BMVEX///8AAAAaGhrq6ur5+fkqKirPz8+urq7h4eGSkpIwMDDS0tKampo3Nzft7e20tLRWVla/v79bW1vz8/Nra2uLi4vY2NikpKQ8PDwjIyPIyMhNTU14eHhjY2NGRkZBQUGAgID1VHDUAAAA3UlEQVRIie2R23LCIBCG+bMkkAMQiUFt1fj+T1mWpDMqmc70qr3gu9jl9MECQhQKhf+II45Sy6eUMVE+huOabhxH7O8+5+MtEDg36DkEqVTc/SC1FeF04AmObf3uWQDn1PIXIS5HQnfGh4RH0+ITEFeM6HbEWxThuEVwDnJciHwl4CeLeFJPUNTDDe9ij8R2D7Sirkx3v8tYtwalBaYzi8rEehXn9X3AdrCDZTE+FzkvcZ2aU1aqwoZNPS75AZiQRN0Bg9AGeIhhefHktwe/8wU/MKPaQPM7s1Ao/D1fOSkHsB8gERUAAAAASUVORK5CYII=",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Figma",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developer Intern",
    company_name: "Smartknower",
    icon: smartknower,
    iconBg: "#383E56",
    date: "Feb 2022 - April 2022",
    points: [
      "Oversaw the development of an e-commerce application with a team of 2 developers resulting in an estimated 20% increase in customer acquisition.",
      "Deployed Firebase’s real-time database and storage features to improve user experience by 40% and ensure security by implementing Firebase authentication resulting in a 50% reduction in security-related complaints.",
    ],
  },
  {
    title: "Android Developer Trainee",
    company_name: "Ciya Technologies",
    icon: ciya,
    iconBg: "#E6DEDD",
    date: "March 2021 - April 2022",
    points: [
      "Engineered a location-based application that transmitted user location to the server every 45 minutes, even when the device was in sleep mode.",
      "Diagnosed and resolved bugs on a regular basis leading to a 20% reduction in crashes and troubleshooting 30+ current issues.",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Zylicon Hackdev Technologies",
    icon: zht,
    iconBg: "#383E56",
    date: "June 2023 - Sept 2023",
    points: [
      "Contributed to the development of Heka Healthy You Android app, which has accumulated over 500+ downloads and maintaining an impressive 4.9-star rating on the Google Play Store.",
      "Conducted extensive compatibility testing across 50 device models on various Android versions to ensure seamless operation and optimal performance.",
      "Optimized app performance by eliminating deprecated packages, enhancing visual aesthetics, and seamlessly improving user experience by adding transition animation resulting in a 30% improvement in response time.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
