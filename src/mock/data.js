import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Scott Luxton', // e.g: 'Name | Developer'
  lang: 'English', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Scott Luxton',
  subtitle: 'Awesome guy (enter title here)',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I enjoy working in collaborative team environments where my adaptive and imaginative thinking is valued. A role on a team where I have the opportunity to help inspire others would excite me, and I enjoy connecting with key stakeholders and working towards a common goal.',
  paragraphTwo: 'My strongest interests include health, physical activity, travel and community; I’ve been told that I am easy going, adaptable, and effective in pressure situations.  I am looking forward to meeting a team or organization with similar shared values where my ideas are celebrated and I can make a difference.',
  // paragraphThree: 'blah testing blah third paragraph',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'InceptionU ',
    info: 'We focus on full stack MERN developments featuring react components and sprinkle in some other technologies as well',
    info2: 'Agile work practices and regular SCRUM sessions help us to put all of our essential skills training to use in a collaborative team environment',
    info3: 'six month full stack development program',
    url: 'https://www.inceptionu.com/',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Business Development',
    info: 'Proven success with over ten years of business development and account management experience',
    info2: 'Specialist in supply chain management, transportation, and logistics',
    url: '',
    
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Eleanor Luxton Historical Foundation',
    info: 'In my role as director I have participated in board activities including the beaver lodge restoration and bison belong projects.',
    info2: 'Our foundation is focused on the preservation and responsible promotion or the history and ecology of Bannf and the bow valley region',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'scott.luxton1313@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/scott-luxton-a9679649',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ScottLuxton',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
