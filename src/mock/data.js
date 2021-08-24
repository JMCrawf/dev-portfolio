import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'James Crawford | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my dev portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'James Crawford',
  subtitle: `I'm the Developer you need.`,
  cta: 'Learn More.',
};

// ABOUT DATA
export const aboutData = {
  paragraphOne:
    'I have recently obtained a bachelor degree in computer science. Im currently studying web development via Udemy. Additionally, i have experience in web design.',
  paragraphTwo:
    'I live in a rural town in South Australia. I have a pet cat called "Mish". My goal is to get hired as a front-end developer and grow in the field. Other interests include watching movies, gaming and music.',
  paragraphThree: '',
  resume: 'https://www.inversebloom.com/assets/resume.3f18a7044c9062d53a50dee80f445d05.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Face Recognition App',
    info: `This app uses face detection functionality provided by Clarifai. The front
                    end uses react, the back end - express.js. User
                    data is stored in a postgres database with encrypted passwords. Front and back end points are both deployed on Heroku.`,
    info2: '',
    url: 'https://face-recognition-enhanced.herokuapp.com/',
    repo: 'https://github.com/JMCrawf/face-recognition-enhanced', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Graphics Portfolio',
    info: `A simple site that showcases some of the graphic work i have done over the years. The majority of the
                    designs were produced with illustrator. 3D work created in Maya. `,
    info2: '',
    url: 'https://jmcrawf.github.io/graphics-portfolio/',
    repo: 'https://github.com/JMCrawf/graphics-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Adventure Site',
    info: `In this project my aim was to produce an example landing page for a hypothetical 
                    adventure site. Much of the code was HTML, CSS with a little Javascipt.`,
    info2: '',
    url: 'https://jmcrawf.github.io/Adventure-Company/',
    repo: 'https://github.com/JMCrawf/Adventure-Company', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested? Please dont hesitate in contacting me.',
  btn: 'Email Me',
  email: 'mailto:crawfjm@live.com.au',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Jim_Crawf',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/james-michael-crawford',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JMCrawf/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
