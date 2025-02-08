AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  
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
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
