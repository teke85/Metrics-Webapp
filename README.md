<a name="readme-top"></a>

<div align="center" >  
  <h1>React capstone project - Metrics webapp</h1>
  </br>
  </br>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Metrics webapp ](#-metrics-webapp-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
      - [Home page](#home-page)
    - [Details page](#details-page)
  - [🚀 Live Demo ](#-live-demo-)
  - [🚀 Description Video Link ](#-description-video-link-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Metrics webapp <a name="about-project"></a>

**Metrics webapp** is about building a mobile web application to check a list of metrics (numeric values) that you will create making use of React and Redux.

You will select an API that provides numeric data about a topic that you like and then build the webapp around it. The webapp will have several pages:

- one page with a list of items that could be filtered by some parameters; in the example below, it's a list of metrics that can be filtered by the country (imagine a search field to introduce the country name like Italy, Croatia, etc.). This page should be your homepage.
- one page for the item details; in the example, the detail page for Czech Republic cities with number of views.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">Bootstrap</a></li>
    <li><a href="#">React</a></li>
    <li><a href="#">Redux</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Retrieve data from Rest Countries API
- Display country related information

#### Home page

- When the page loads, the webapp shows the list of categories that could be filtered out by some parameter, for example by the category name.
- Along with the category name, you will display some numeric values per category that come from the API.
- When the user clicks (or taps) on a category item, the application navigates to the details page.

### Details page

- In the details page, the webapp retrieves data from the API to show detailed data in the category.
- When the user clicks on the "Back" button (<), the user navigates to the home page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo](https://metricswebapp.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DESCRIPTION VIDEO LINK -->

## 🚀 Description Video Link <a name="live-demo"></a>

- [Description Video Link](https://www.loom.com/share/98e3385a8dee47eeb2014bbbdc039ca3)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

1. Before you go ahead with this React tutorial, please make sure you have:

- Basic understanding of HTML and CSS.
- JavaScript fundamentals (object, array, conditionals etc).
- Familiarity with JavaScript ES6 features (class syntax, arrow functions, object destructuring etc).

2. [Node and npm](https://nodejs.org/en/download/) are installed. Here are the versions I'll be using while making this tutorial:

   ```shell
   $ node --version
   v16.13.2

   $ npm --version
   8.1.2
   ```

   > Installing npm adds two commands to the system—`npm` and `npx`—both of which I'll be using while making this tutorial.

3. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed. Here's the version I'll be using while making this tutorial:

   ```shell
   $ git --version
   git version 2.29.1.windows.1
   ```

4. A [GitHub](https://github.com/signup) account. :octocat:

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/teke85/Metrics-Webapp

```

### Install

Install this project with:

```sh
  cd my-project
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run start
```

### Run tests

To run tests, run the following command:

```sh
  npm test
```

### Deployment

You can deploy this project using:
Render (https://render.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Teke85**

- GitHub: [@teke85](https://github.com/teke85)
- Twitter: [@muttau](https://twitter.com/muttau)
- LinkedIn: [isiteketo mutau](https://www.linkedin.com/in/isiteketo-mutau-736894241/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Implement some UX improvements: include transitions and/or animations, etc.
- Implement additional pages in the website (each with a route in the SPA): about me, references, etc.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, please give it a star ⭐

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I highly appreciated [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio) for his excellent design. 
I would like to thank all reviewers and testers.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
