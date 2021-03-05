//To add to list of projects, just keep incrementing this lists ids and each project must have the following sections: id, title, byline, body, role, stack. Links can conditionally appear or not.
//Stack must be correct to the letter and there cant be duplicate technologies in an item, or there will be a (non-fatal) key error for tag displays
//links must follow the following convention: [Name desired on button, the link itself beginning with https://]

export const Projects = {
  1: {
    id: 1,
    title: "Gohort",
    byline: "Trip planning, simplified",
    body:
      "Gohort is a collaborative trip planning tool that makes group planning as easy as pressing a button. It's still under construction, but you can see project updates on its page.",
    role:
      "I am currently building out some feature sets as part of a small team that adheres to an agile/scrum methodology to push code.",
    stack: [
      "Javascript",
      "Python",
      "Django",
      "Django Rest Framework",
      "React",
      "Redux",
      "PostgreSQL",
      "Docker",
      "Blueprint",
      "Jest",
      "Tailwind",
      "Google Cloud",
    ],
    links: [
      ["Gohort Website", "https://www.gohort.com/"],
      ["Gohort App", "https://app.gohort.com"],
    ],
  },

  2: {
    id: 2,
    title: "Agua Vida",
    byline: "Make water treatment accessible to everyone",
    body:
      "AGUA VIDA is a series of applications designed to help train rural water operators based in rural areas in Peru on chlorination formulas. These formulas are often complex (I helped write a 100+ page manual on them!). In a world where waterborne illnesses are still a leading cause of death, I decided to use technology to make chlorination knowledge more accessible.",
    role: "I am the sole developer and this is a personal project.",
    stack: ["Java", "Javascript", "Vue", "VueX", "Google Play"],
    links: [
      ["Android App", "https://github.com/steveschannel/AguaVida"],
      ["Web App", "https://steveschannel.github.io/avwebapp/"],
      ["Github Android", "https://github.com/steveschannel/AguaVida"],
      ["Github Webapp", "https://github.com/steveschannel/avwebapp"],
    ],
  },

  3: {
    id: 3,
    title: "Peace Corps Misc",
    byline: "Water and Sanitation Information",
    body:
      "During my time in the Peace Corps I managed several documentation efforts for my post, as well as creating different training materials to be used by other volunteers. From presentations to books, I helped create materials that stay in use to this day, and I continue to collaborate on a part-time basis to help my former post.",
    role:
      "This is work that I did in conjunction with program managers of the WASH program in Lima.",
    stack: ["Adobe Creative Cloud"],
    links: [],
  },

  4: {
    id: 4,
    title: "Coalesce",
    byline: "Find a sole-mate",
    body:
      "This is a 'donation network' where I envision people that have one leg/arm can find someone in their exact same size, with the opposite leg still present, in order to foster a common donating relationship should the opportunity present itself.",
    role:
      "I am the sole developer and this is a personal project I started during a hackathon",
    stack: [
      "Django",
      "Graphene",
      "GraphQL",
      "Docker",
      "GIS",
      "GeoDjango",
      "PostGIS",
      "Git",
      "Python",
      "Javascript",
    ],
    links: [
      ["Coalesce Github", "https://github.com/steveschannel/coalesce-api"],
    ],
  },

  5: {
    id: 5,
    title: "Random Card Game",
    byline: "Pick a card",
    body:
      "This was a fairly involved programming challenge given to me by Uplift. I spent a fair amount of time on it, and users can create their own decks of any length, and then choose one of them to play a randomized game where the api serves 5 random cards from the decks. Users win if there is an ace among the cards. The games can also be rigged depending on whether or not the selected deck has an ace.",
    role:
      "I am the sole developer and this is a personal project I started during a hackathon",
    stack: [
      "Django",
      "Graphene",
      "GraphQL",
      "Docker",
      "Javascript",
      "Python",
      "Apollo Client",
      "Git",
    ],
    links: [["Game Github", "https://github.com/steveschannel/card-game"]],
  },
  // 6: {
  //   id: 6,
  //   title: "Misc",
  //   byline: "Programming challenges",
  //   body:
  //     "This is a 'donation network' where I envision people that have one leg/arm can find someone in their exact same size, with the opposite leg still present, in order to foster a common donating relationship should the opportunity present itself.",
  //   role:
  //     "I am the sole developer and this is a personal project I started during a hackathon",
  //   stack: [
  //     "Django",
  //     "Graphene",
  //     "GrapQL",
  //     "Docker",
  //     "GIS",
  //     "GeoDjango",
  //     "PostGIS",
  //     "Git",
  //   ],
  //   links: [["Github collection", "https://www.gohort.com/"]],
  // },
};

export const Ids = Object.keys(Projects).map((id) => parseInt(id));
