const ascii = `Welcome, I'm Saad this is my portfolio 🤚🏼`;

export const resume = {
  name: "Saad",
  ascii,

  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/place/Casablanca",

  about:
    "I’m a <strong>CS student</strong> and <strong>just a begginger right now in development</strong>, daily <a href='https://fedoraproject.org/' target='_blank' class='underline break-all' style='color: #a2c9eb'>Fedora</a> user and <strong>GNU/Linux enthusiast</strong> exploring system programming to deepen my expertise.",

  languagesSummary:
    "Using <strong>TypeScript</strong> for type safety, <strong>JavaScript</strong> for flexibility not a senior in them just a vibe coder in that moment.",

  runtimesSummary:
    "Experienced with <strong>Node.js</strong> in Whatsapp bot development, <strong>Deno</strong>, in websites development.",

  skills: [
    "JavaScript",
    "TypeScript",
    "Node",
    "Bun",
    "Deno",
    "Linux",
    "Gnome",
    "Git",
  ],

  contact: {
    email: "hyodu8@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hyodu",
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/xeSaad",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saad-v-03a5b8372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
    "Diving into <strong>Linux Kernel</strong> with <strong>Fedora</strong>, <strong>Arch</strong>, and <strong>nixOS</strong> to master systems and configuration and understanding more about OS, and make my skills more better in web development inchaalah .",

  projects: [
    {
      title: "Winter",
      active: true,
      description: "Website teach u JavaScript basics.",
      links: [
        {
          type: "Website",
          href: "https://winter.deno.dev/",
        },
        {
          type: "Source",
          href: "https://github.com/Hyodu/Winter",
        },
      ],
    },
    {
      title: "Lunar",
      active: true,
      description: "Telegram bot helps Moroccan students to discover all the informations about the Moroccan universities.",
      links: [
        {
          type: "BoT",
          href: "https://t.me/bfubot",
        },
        {
          type: "Source",
          href: "https://github.com/Hyodu/Lunar",
        },
      ],
    },
    {
      title: "Moon",
      active: false,
      description: "Islamic Whatsapp bot teach u more about Islam religion.",
      links: [
        {
          type: "Source",
          href: "https://github.com/Hyodu/Moon",
        },
      ],
    },
  ],
} as const;

declare global {
  namespace Lume {
    interface Data {
      resume: typeof resume;
    }
  }
}
