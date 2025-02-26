# ScaffInit

## Project Description
Struggling to create a well-organized backend folder structure?

**ScaffInit** is a CLI tool built with JavaScript that helps developers quickly bootstrap a structured backend setup. It automates the creation of directories and generates public APIs, making it easy for developers to manage and import files efficiently.

## Who Is This Project For?
This project is intended for developers who struggle to create a well-structured backend for their applications.

## Project Dependencies
Before using **ScaffInit**, ensure you have the following installed:

- **Node.js** v18 and up
- **Git** (optional, for cloning the repository)


## Instructions for using scaffinit

### Install scaffinit

1. Clone the git repository
```sh
git clone https://github.com/iamisthill/scaffinit.git
cd scaffinit
```

2. Install the project globally
```sh
npm install -g .
```

## Usage
### Scaffold a backend project
1. Navigate to your new directory
2. Run the following command:
``` scaff```
This will automatically scaffold a backend folder structure for you.
### Generated Structure
After running scaff, your project will have the following structure:
```
project/
│── app/
│   ├── index.js
│── controllers/
│   ├── index.js
│── middlewares/
│   ├── index.js
│── routers/
│   ├── index.js
│── models/
│   ├── index.js

```
Each directory serves a specific purpose:
- app/ – Contains core application logic.
- controllers/ – Handles request logic.
- middlewares/ – Stores middleware functions.
- routers/ – Defines API routes.
- models/ – Manages database schemas and models.

## Uninstall
1. To remove scaffinit, run the following command:
```sh
npm uninstall -g scaffinit
```
2. To verify that it has been removed, run:
```sh
npm ls -g --depth=0
```

## Contributing guidelines
Currently, this repository does not have a contribution guideline. However, if you wish to contribute:
- Fork the repository.
- Create a new feature branch.
- Submit a pull request with a detailed description.

## Additional documentation

For more information:

* [Organizing your Express.js project structure for better productivity](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)
* [How CLIs in Node.js actually work](https://eytanmanor.medium.com/how-clis-in-node-js-actually-work-c26f913a335e)
* [Node.js file stats](https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats)

## Terms of use

**scaffinit** is licensed under [MIT License](LICENSE.md).

