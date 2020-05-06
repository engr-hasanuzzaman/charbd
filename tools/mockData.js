const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 3,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 2,
    category: "HTML5",
  },
];

const authors = [
  {
    id: 1,
    name: "Cory House",
  },
  {
    id: 2,
    name: "Scott Allen",
  },
  {
    id: 3,
    name: "Dan Wahlin",
  },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// advertisements
const advertisements = [
  {
    id: 1,
    title: "Get 20 discount on your favorite Cloth",
    description: "Get 20 discount on your favorite Cloth",
    price: "200 BDT",
    img:
      "https://images.all-free-download.com/images/graphiclarge/online_shopping_banner_hand_holding_card_bags_icons_6830791.jpg",
  },
  {
    id: 2,
    title: "Get 40 discount on your favorite Cloth",
    description: "Get 20 discount on your favorite Cloth",
    price: "2000 BDT",
    img:
      "https://images.all-free-download.com/images/graphiclarge/online_shopping_banner_hand_holding_card_bags_icons_6830791.jpg",
  },
  {
    id: 3,
    title: "Get 10 discount on your favorite Cloth",
    description: "Get 20 discount on your favorite Cloth",
    price: "3500 BDT",
    img:
      "https://images.all-free-download.com/images/graphiclarge/online_shopping_banner_hand_holding_card_bags_icons_6830791.jpg",
  },
  {
    id: 4,
    title: "Get 25% discount on your favorite Cloth on Mogbazar Arong",
    description: "Get 25% discount on your favorite Cloth on Mogbazar Arong",
    price: "3500 BDT",
    img:
      "https://images.all-free-download.com/images/graphiclarge/online_shopping_banner_hand_holding_card_bags_icons_6830791.jpg",
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  advertisements,
};
