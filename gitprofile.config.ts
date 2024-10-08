// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HanselSob', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['HanselSob/cannabis-retail-trends', 'HanselSob/county-level-population-by-race-ethnicity', 'HanselSob/chinook-tableau-visualizations'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      /*
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
      */
    },
  },
  seo: {
    title: 'Portfolio of Hansel Soberao',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'hansel-soberao',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '786-468-6848',
    email: 'hansel.sob@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/viewerng/viewer?url=https://github.com/HanselSob/resume/raw/main/HanselSob_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SFTP',
    'AS2',
    'JavaScript',
    'React.js',
    'Node.js',
    'SSH',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'SSL',
    'FTP',
    'Splunk',
    'PuTTy',
    'SEEBURGER BIS Platform',
    'ServiceNow',
    'WinSCP',
    'FileZilla',

  ],
  experiences: [
    {
      company: 'American Express',
      position: 'Technology Associate',
      from: 'August 2020',
      to: 'August 2023',
      companyLink: 'https://www.americanexpress.com/',
    },
    {
      company: 'Pizza Hut',
      position: 'Customer Service Representative',
      from: 'June 2018',
      to: 'February 2020',
      companyLink: 'https://www.pizzahut.com/',
    },
  ],
  certifications: [
    {
      name: 'Certified File Transfer Professional',
      body: 'CFTP is a vendor-independent file transfer training programme that certifies knowledge on FTP practices.',
      year: 'December 2023',
      link: 'https://cftpcert.com/#/online-courses/3bfa4321-c574-476f-9152-c915be8fa6b2',
    },
    {
      name: 'Google Project Management: Professional Certificate',
      body: 'This program includes over 140 hours of instruction across 6 courses with assessments and real-world scenarios.',
      year: 'August 2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/Y8SDW90S10Y2',
    },
  ],
  educations: [
    {
      institution: 'Florida International University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Miami Dade College',
      degree: 'Associate of Arts',
      from: '2018',
      to: '2021',
    },
  ],
  publications: [
    /*
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    */
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    /*
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
    */
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
