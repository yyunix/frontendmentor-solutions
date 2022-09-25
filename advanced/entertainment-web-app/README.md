# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X).

![Design preview for the Entertainment web app coding challenge](./preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [My final thought](#my-final-thought)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
### The challenge

- General
  - [x] The navigation menu should be fixed to the left for larger screens. Use the "Desktop - Home" page in the design as a visual reference.
- Home
  - [x] The trending section should scroll sideways to reveal other trending shows
  - [x] Any search input should search through all shows (i.e. all movies and TV series)
- Movies
  - [x] This page should only display shows with the "Movie" category
  - [x] Any search input should search through all movies
- TV Series
  - [x] This page should only display shows with the "TV Series" category
  - [x] Any search input should search through all TV series
- Bookmarked Shows
  - [x] This page should display all bookmarked shows from both categories
  - [x] Any search input should search through all bookmarked shows

### Links

- Solution URL: [Solution to Deployed Site - client side only](https://github.com/yyunix/frontendmentor-solutions/tree/master/advanced/entertainment-web-app)
- Solution URL: [Servier Side Solution](https://github.com/yyunix/frontendmentor-solutions/tree/entertainment-web-app-serverless/advanced/entertainment-web-app)
- Live Site URL: [Vercel](https://entertainment-web-app-yyunix36.vercel.app/)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [Redux-toolkit](https://redux-toolkit.js.org/) - Global state management

For the server side solution:
- [MongoDB](https://www.mongodb.com/) - Database

### What I learned

- I learned how to create endpoints using the built-in Next.js api
- Unfortunately, I wasn't able to deploy the final app to Vercel due to serverless functions being timed out
- I ended up stripping off the server side code which removed the authentication functionality and updating the bookmark in the database
- For my initial(server side) solution, please see refer to [this Github repo](https://github.com/yyunix/frontendmentor-solutions/tree/entertainment-web-app-serverless/advanced/entertainment-web-app)


### My final thought
- I enjoyed working with Next.js but I probably won't use their api because of the deployment issue I faced. 
- I will use a separate backend for my next projects if I have to.
- I truly enjoy using TailwindCSS and the VSC plugin for Tailwind.


## Author

- Website - [Yujeong Yun](https://yyunix.dev)