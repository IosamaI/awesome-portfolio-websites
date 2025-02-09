AOS.init({
  duration: 1000,
  once: true
});

const projectcards = document.querySelector(".projectcards");
const projectSearch = document.getElementById('projectSearch');
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects  = [
  
  {
    title: "python programming language",
    cardImage: "assets/images/project-page/python-programming-language.png",
    description: "Developed a robust system for extracting structured data and plain text from PDF files",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/python-CS50p",
  },

  {
    title: "PDF Image to CSV Converter",
    cardImage: "assets/images/project-page/post-convert-pdf-to-csv.png",
    description: "Developed a robust system for extracting structured data and plain text from PDF files",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "SQL ",
    cardImage: "assets/images/project-page/CS50 SQL.png",
    description: "SQL projects I completed as part of Harvard's CS50SQL.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/CS50SQL",
  },
  {
    title: "Price Tiers Webpage",
    cardImage: "assets/images/project-page/table.png",
    description: "Flappy bird game built using React.js",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Pricing-Table?tab=readme-ov-file",
  },
  {
    title: "Alien Invasion game withe python",
    cardImage: "assets/images/project-page/game.png",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/AlienInvasion_python",
  },
  {
    title: "Design-a-Wikipedia-like-online-encyclopedia",
    cardImage: "assets/images/project-page/Wiki.png",
    description: "The Wiki project is a web-based application designed to function as a simplified version of an online encyclopedia, similar to Wikipedia",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Design-a-Wikipedia-like-online-encyclopedia",
  },
  {
    title: "E-commerce Platform",
    cardImage: "assets/images/project-page/eBay.png",
    description: "eBay-like e-commerce auction platform built using Django",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Design-an-eBay-like-e-commerce-auction-site",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "email client",
    cardImage: "assets/images/project-page/email.png",
    description: "Design a front-end for an email client that makes API calls to send and receive emails",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Design-a-front-end-for-an-email",
  },
  {
    title: "Threads",
    cardImage: "assets/images/project-page/Thteads.png",
    description:
      "Design-a-Threads-like-social-network-website",
    tagimg:
      "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Design-a-Threads-like-social-network-website",
  },
  {
    title: "Movie-Search-API",
    cardImage: "assets/images/project-page/car.png",
    description: "This project is a simple web application that allows users to search for TV shows and movies using the TVmaze API.",
    tagimg:
      "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Movie-Search-API",
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    tagimg:
      "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Photo-Blog-web-page",
    cardImage: "assets/images/project-page/blog.png",
    description: "The Photo Blog project is a simple and visually appealing web page that showcases a collection of images in a blog",
    tagimg:
      "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Photo-Blog-web-page",
  }, 
   {
    title: "Museum of Candy Website",
    cardImage: "assets/images/project-page/candy.png",
    description: "website aims to provide visitors with information about the museum, ticketing options",
    tagimg:
      "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Candy",
  },
  {
    title: "Express-and-MongoDB",
    cardImage: "assets/images/project-page/ee.png",
    description: "This project is a basic web application built using Express.js, MongoDB, and EJS",
    tagimg:"https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/Express-and-MongoDB-",
  },
   {
    title: "Ping Pong Scorekeeper Game",
    cardImage: "assets/images/project-page/ping.jpg",
    description: "A simple, interactive web application that allows two players to track scores for a ping pong game use js",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/IosamaI/-Ping-Pong/tree/main",
  },
];

// function for rendering project cards data
const createProjectCards = (filteredProjects) => {
  let output = '';
  filteredProjects.forEach(({ title, cardImage, description, Previewlink, Githublink, tags }) => {
      output += `
      <div class="col-12 col-md-6 col-lg-4 mb-4 skill-card" 
           data-aos="zoom-in-up"
           data-tags="${tags.join(',')}">
          <div class="card h-100">
              <img src="${cardImage}" class="card-img-top" alt="${title} project screenshot">
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                  <div class="d-flex justify-content-between">
                      ${Previewlink ? 
                          `<a href="${Previewlink}" class="btn btn-primary" target="_blank">Preview</a>` : 
                          `<button class="btn btn-secondary" disabled>Preview</button>`}
                      ${Githublink ? 
                          `<a href="${Githublink}" class="btn btn-dark" target="_blank">GitHub</a>` : 
                          `<button class="btn btn-secondary" disabled>GitHub</button>`}
                  </div>
              </div>
          </div>
      </div>`;
  });
  projectcards.innerHTML = output;
};

// Initial render
createProjectCards(projects);

// Search function
const filterProjects = () => {
  const searchTerm = projectSearch.value.toLowerCase();
  const filtered = projects.filter(project => 
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
  createProjectCards(filtered);
};

// Event listeners
projectSearch.addEventListener('input', filterProjects);