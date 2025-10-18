export const FILTERS = [
  {
    name: "All Projects",
    active: true,
    id: 0,
  },
  {
    name: "Reactjs",
    active: false,
    id: 1,
  },
  {
    name: "Typescript",
    active: false,
    id: 2,
  },
  {
    name: "Nextjs",
    active: false,
    id: 3,
  },
  {
    name: "Tailwind CSS",
    active: false,
    id: 4,
  },
  {
    name: "Nodejs",
    active: false,
    id: 5,
  },
  {
    name: "Mongodb",
    active: false,
    id: 6,
  },
  {
    name: "MUI",
    active: false,
    id: 7,
  },
  {
    name: "Javascript",
    active: false,
    id: 8,
  },
  {
    name: "Jquery",
    active: false,
    id: 9,
  },
  {
    name: "My SQL",
    active: false,
    id: 10,
  },
  {
    name: "PHP",
    active: false,
    id: 11,
  },
  {
    name: "React Native",
    active: false,
    id: 12,
  },
  {
    name: "Expo Go",
    active: false,
    id: 13,
  },
  {
    name: "React Native Paper",
    active: false,
    id: 14,
  },
  {
    name: "Redux",
    active: false,
    id: 15,
  },
  {
    name: "Styled Components",
    active: false,
    id: 16,
  },
  {
    name: "Express",
    active: false,
    id: 17,
  },
  {
    name: "Zustand",
    active: false,
    id: 18,
  },
  {
    name: "AI",
    active: false,
    id: 19,
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Yenza Prep",
    description:
      "Yenza Prep is an innovative online learning platform built for Grade 6 & 7 students. It combines interactive quizzes, assessments, and exercises with personalized learning paths tailored to each learner’s interests and strengths. Students also gain access to career insights to help guide their future choices.",
    role: "Frontend Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
      {
        id: 6,
        name: "Mongodb",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 18,
        name: "Zustand",
      },
    ],
    tag: "",
    access: "Public for schools",
    link: "https://app.yenzaprep.com/en/auth/login",
    image: "/yenzaprep.png",
  },
  {
    id: 7,
    name: "Holiday Apartments",
    description:
      "Holiday Apartments is your go-to booking platform for delightful short-term rentals. Following the footsteps of Airbnb and Booking.com, they provide an array of listings across South Africa, ensuring you find the perfect accommodation for your stay.",
    role: "Frontend Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 7,
        name: "MUI",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 10,
        name: "My SQL",
      },
      {
        id: 15,
        name: "Redux",
      },
    ],
    tag: "",
    access: "Public",
    link: "https://www.holidayapartments.co.za/",
    image: "/holidayapartments.png",
  },
  {
    id: 2,
    name: "PlaylistGenius",
    description:
      "PlaylistGenius stands as the pioneering playlist generator, utilizing AI to craft personalized playlists tailored to the user's criteria. Perfect for DJs and music enthusiasts, it includes features like exporting to YouTube and Spotify, merging two or more playlists, and creating playlists based on mood, BPM, genre, and more.",
    role: "Full-stack Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 6,
        name: "Mongodb",
      },
      {
        id: 19,
        name: "AI",
      },
    ],
    tag: "",
    access: "Public",
    link: "https://www.playlistgenius.app/",
    image: "/playlistgenius.png",
  },
  {
    id: 3,
    name: "Host Agents for Owners",
    description:
      "Host Agents for Owners is a React Native app designed for property owners to manage their properties with ease. This app is a testament to my expertise in React Native, showcasing my ability to create user-friendly interfaces and seamless functionality.",
    role: "Mobile Developer",
    stack: [
      {
        id: 12,
        name: "React Native",
      },
      {
        id: 13,
        name: "Expo Go",
      },
      {
        id: 14,
        name: "React Native Paper",
      },
    ],
    tag: "",
    access: "Private",
    link: "https://play.google.com/store/apps/details?id=com.virtual_designs.hostagentsforowners01",
    image: "/hosta_agents_for_owners.png",
  },
  {
    id: 4,
    name: "Host Agents for Property Hosts",
    description:
      "My inaugural venture into React Native, Host Agents for Managers, stands as a testament to my early expertise. Tailored primarily for company employees engaged in property management, this versatile app is accessible on both Android and iOS platforms. Seamless fusion of functionality and user-friendly design.",
    role: "Mobile Developer",
    stack: [
      {
        id: 12,
        name: "React Native",
      },
      {
        id: 13,
        name: "Expo Go",
      },
      {
        id: 14,
        name: "React Native Paper",
      },
    ],
    tag: "",
    access: "Private",
    link: "https://play.google.com/store/apps/details?id=com.virtual_designs.hostagentsforpropertyhosts01",
    image: "/hostagentsformanagers.png",
  },
  {
    id: 5,
    name: "ActivityHub",
    description:
      "ActivityHub is your premier platform for curated tours and activities. Nestled in the heart of Cape Town, ActivityHub has been dedicated to providing clients with the finest vacation experiences and more. Explore the wonders of South Africa, where each activity is crafted to make your journey truly memorable.",
    role: "Frontend Developer",
    stack: [
      {
        id: 8,
        name: "Javascript",
      },
      {
        id: 9,
        name: "Jquery",
      },
      {
        id: 10,
        name: "My SQL",
      },
      {
        id: 11,
        name: "PHP",
      },
    ],
    tag: "",
    access: "Public",
    link: "https://activityhub.co.za/",
    image: "/activityhub.png",
  },
  {
    id: 6,
    name: "Host Agents Red (backend)",
    description:
      "In response to the company's vision for an enhanced business system, I spearheaded the transformation of their antiquated PHP backend to a modern React.js version. This revamped system integrates with their existing PHP/Laravel API, facilitating secure and efficient data transfer.",
    role: "Frontend Developer",
    stack: [
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 11,
        name: "PHP",
      },
      {
        id: 10,
        name: "My SQL",
      },
      {
        id: 15,
        name: "Redux",
      },
    ],
    tag: "",
    access: "Private",
    link: "",
    image: "/hostagentsredbacked.png",
  },
  {
    id: 8,
    name: "GuideMe Tours",
    description:
      "GuideMe Tours is a distinguished platform specializing in luxurious and private tours throughout Cape Town. Currently, I am fully engaged as a Fullstack developer, tasked with taking this project from inception to completion. Leveraging my expertise in UI/UX design and software engineering.",
    role: "Full-stack Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 5,
        name: "Nodejs",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 6,
        name: "Mongodb",
      },
      {
        id: 15,
        name: "Redux",
      },
    ],
    tag: "Coming soon",
    access: "Public",
    link: "",
    image: "/guidemetours.png",
  },
  {
    id: 9,
    name: "Tyson Monteiro - Portfolio",
    description:
      "This platform is a personal showcase I meticulously developed to provide a glimpse into my work for potential customers, recruiters, and anyone interested in learning more about me. Here you can explore my journey and discover where I stand as a developer.",
    role: "Full-stack Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
      {
        id: 15,
        name: "Redux",
      },
    ],
    tag: "",
    access: "Public",
    link: "https://tysonmonteiro.vercel.app/",
    image: "/tysonmonteirowebsite.png",
  },
  {
    id: 10,
    name: "Invoice App",
    description:
      "A simple yet powerful invoice app, crafted as a challenge from frontendmentor.io. This creation stands as a testament to my prowess in React Context, showcasing intricate user interface design with styled components, and a seamless implementation of CRUD functionalities.",
    role: "Full-stack Developer",
    stack: [
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 16,
        name: "Styled Components",
      },
    ],
    tag: "",
    access: "Public",
    link: "https://simpleinvoicedemo.netlify.app/",
    image: "/invoiceapp.png",
  },
];
