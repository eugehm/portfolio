// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-portfolio",
    title: "Portfolio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/portfolio/";
    },
  },{id: "projects-big-houses",
          title: 'Big Houses',
          description: "University of Michigan MHacks Hackathon",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/big-houses/";
            },},{id: "projects-blight-speed",
          title: 'Blight Speed',
          description: "Michigame Jam",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/blight-speed/";
            },},{id: "projects-clep-finder-portal",
          title: 'CLEP Finder Portal',
          description: "JPMorgan Chase Code for Good Hackathon",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/clep-finder-portal/";
            },},{id: "projects-cor-draconis",
          title: 'Cor Draconis',
          description: "WolverineSoft Studio",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/cor-draconis/";
            },},{id: "projects-defenders-of-the-dune",
          title: 'Defenders of the Dune',
          description: "WolverineSoft Studio",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/defenders-of-the-dune/";
            },},{id: "projects-dream-synthesizer",
          title: 'Dream Synthesizer',
          description: "WolverineSoft Studio",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/dream-synthesizer/";
            },},{id: "projects-escape-the-midwest",
          title: 'Escape The Midwest',
          description: "EECS 298 Final Project",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/escape-the-midwest/";
            },},{id: "projects-paperzero",
          title: 'PaperZero',
          description: "Michigan Data Science Team",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/paperzero/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/portfolio/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%75%67%65%6E%69%61.%68%65%72%6E%61%6E%64%65%7A%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/eugehm", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/eugehm", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
