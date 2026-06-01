const PROJECTS = [
  {
    title: "PaperZero",
    tag: "Michigan Data Science Team",
    image: "assets/img/paperzero.png",
    stack: ["Python"],
    desc: `
        ML research project tackling 2D origami inverse design for <a
        href="https://mdst.club/" target="_blank" rel="noopener">MDST</a> W26. In
        a 3-person sub-group, I co-developed the AlphaZero-style Monte Carlo Tree
        Search solution, building the ResNet encoder, node structures, and training
        pipeline. The architecture outperformed all baseline benchmarks, maintaining
        stable IoU scores as target complexity scaled.
        `,
    links: [
      {
        label: "More Details",
        href: "https://mdst-club.notion.site/PaperZero-2e3c107f9e95818a8d9bd9b095ba5b03",
      },
      {
        label: "GitHub",
        href: "https://github.com/MichiganDataScienceTeam/W26-PaperZero",
      },
    ],
  },
  {
    title: "Ada",
    tag: "Personal Project",
    image: "assets/img/ada.png",
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    desc: `
        AI-powered chatbot built using Cloudflare Workers and Llama 3.3. I created
        the serverless backend, using Cloudflare KV storage to implement a sliding-
        window memory system that persists 20 chat turns. I also configured wrangler
        to manage environment bindings and stream markdown responses for real-time
        interaction.
        `,
    links: [
      { label: "Live App", href: "https://cf-ai-ada.eugehm.workers.dev/" },
      { label: "GitHub", href: "https://github.com/eugehm/cf_ai_ada" },
    ],
  },
  {
    title: "Escape the Midwest",
    tag: "EECS 298 Final Project",
    image: "assets/img/escape-the-midwest.png",
    stack: ["Unity", "Blender", "Piskel"],
    desc: `
        3D platformer built in Unity for <a href="https://www.eecs298.com/"
        target="_blank" rel="noopener">EECS 298</a> at the University of Michigan.
        I modeled all 3D assets, designed custom textures, and recorded original
        audio. I also extended the game's foundational course framework by writing
        and modifying scripts to implement custom camera behaviors, hazard systems,
        and unique gameplay mechanics.
        `,
    links: [
      { label: "Play", href: "https://eugehm.itch.io/escape-the-midwest" },
      { label: "GitHub", href: "https://github.com/eugehm/escape-the-midwest" },
    ],
  },
  {
    title: "CLEP Finder Portal",
    tag: "JPMC Code for Good Hackathon",
    image: "assets/img/clep-finder-portal.png",
    stack: ["React"],
    desc: `
        Web platform built for Modern States to centralize nationwide CLEP exam data
        at the JPMorgan Chase Code for Good Columbus 2025 Hackathon. Working in a 7-
        person team, I developed the administrator front-end, implemented domain-based
        role detection and secure login logic across three user dashboards, and
        structured the final presentation.
        `,
    links: [
      { label: "GitHub", href: "https://github.com/cfgcolumbus25/Team-13" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=hBNWvJwfSjs" },
    ],
  },
  {
    title: "Big Houses",
    tag: "UMich MHacks Hackathon",
    image: "assets/img/big-houses.png",
    stack: ["Python", "HTML", "CSS"],
    desc: `
        Web platform for University of Michigan students to find off-campus housing,
        built during the MHacks 2025 Hackathon to replace fragmented social media
        leads. Working in a team of 4, I designed the core front-end interfaces
        (including the index, login, and explore pages), created the project logo,
        and produced the final video demonstration and presentation.
        `,
    links: [
      { label: "GitHub", href: "https://github.com/lsabrina51/bigHouses" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=XzP5vBUmMv8" },
    ],
  },
  {
    title: "Cor Draconis",
    tag: "WolverineSoft Studio",
    image: "assets/img/cor-draconis.png",
    stack: ["Unity"],
    desc: `
        City-building RPG developed by a 19-person production team during <a
        href="https://wolverinesoftstudio.notion.site/" target="_blank"
        rel="noopener">WolverineSoft Studio</a> W25. I worked on an event-driven
        settings system using a persistent singleton to sync UI configurations
        across scenes. I also helped design the tutorial system and custom particle
        effects for building assets.
        `,
    links: [
      {
        label: "Play",
        href: "https://wolverinesoftstudio.notion.site/Cor-Draconis-25e654a5c2b78094a62ad1b8c40467b7",
      },
      {
        label: "GitHub",
        href: "https://github.com/eugehm/portfolio-files/tree/main/cor-draconis",
      },
      { label: "Demo", href: "https://www.youtube.com/watch?v=flxr_Fu5tl4" },
    ],
  },
  {
    title: "Defenders of the Dune",
    tag: "WolverineSoft Studio",
    image: "assets/img/defenders-of-the-dune.jpg",
    stack: ["Unity", "Figma"],
    desc: `
        Real-time strategy game developed by a 17-person production team during <a
        href="https://wolverinesoftstudio.notion.site/" target="_blank" rel="noopener"
        >WolverineSoft Studio</a> F24. I took the Skill Tree system from mockup to
        full in-engine functionality, writing singletons to handle unlock states and
        purchase logic. I also implemented event-driven UI managers to update skill
        nodes, branch prerequisites, and player currency.
        `,
    links: [
      {
        label: "Play",
        href: "https://wolverinesoftstudio.notion.site/Defenders-of-the-Dune-147654a5c2b7803897adede2fdc3c217",
      },
      {
        label: "GitHub",
        href: "https://github.com/eugehm/portfolio-files/tree/main/defenders-of-the-dune",
      },
      { label: "Devblog", href: "https://eugehm.github.io/devblog/" },
    ],
  },
  {
    title: "Dream Synthesizer",
    tag: "WolverineSoft Studio",
    image: "assets/img/dream-synthesizer.jpg",
    stack: ["Unity", "Piskel"],
    desc: `
        2D platformer featuring item crafting and Metroidvania-like progression,
        created by an R$D team of 6 during <a
        href="https://wolverinesoftstudio.notion.site/" target="_blank" rel="noopener"
        >WolverineSoft Studio</a> S24. I designed core UI elements and tilesets and
        programmed the logic for inventory syncing, armor health adjustments, and
        contact-damage combat. I also created the state-based enemy patrol and chase
        mechanics.
        `,
    links: [
      {
        label: "Play",
        href: "https://superdude11235.itch.io/dream-synthesizer",
      },
      {
        label: "GitHub",
        href: "https://github.com/eugehm/portfolio-files/tree/main/dream-synthesizer",
      },
    ],
  },
  {
    title: "Blight Speed",
    tag: "Michigame Jam",
    image: "assets/img/blight-speed.jpg",
    stack: ["Blender"],
    desc: `
        First-person endless runner created by a team of 5 for the joint Spartasoft-
        WolverineSoft July 2024 Michigame Jam. I modeled, textured, and animated the
        3D first-person glove assets and configured the environment's visual layout.
        `,
    links: [
      { label: "Play", href: "https://kilarivi.itch.io/blight-speed" },
      {
        label: "GitHub",
        href: "https://github.com/eugehm/portfolio-files/tree/main/blight-speed",
      },
    ],
  },
];
