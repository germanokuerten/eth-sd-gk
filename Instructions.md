CREATING PROJECT:

### Intro:

1. Create an empty folder + drag and drop into new VS code window
2. in the terminal (inside folder), write: npm create-react-app ./
    (make sure you got node installed)
3. don't worry about .git folder.
4. node modules contain all dependencies
5. Public folder contains index.html, we hook entire application through
6. src, most important folder. Where we create all of our React Components.

7. delete all of src (source) folder, and create new folder and files from scratch.
8. So create new src folder.
9. then create index.js file.
    - import React from 'react'
    - import ReactDOM from 'react-dom' (allow us to hook our react app to index.html)
    - ReactDOM.render(<App />, document.getElementById('root'))
    - import App from './App' (we don't have this file, but we'll create it soon)

9. inside of src create new file App.js
    - rafce (es7 snippets by dsznajder) (create react functional component).
    - then just create an <h1> tag and say GPT-3, to test on localhost.
    - npm start (on terminal to test on localhost)

10. install dependency (only one, minimal dependencies).
    - npm install react-icons
    (we are turning the figma design into a compelling website).
    - "soon filled, with assets, color, background... look and feel amazing".

### Folder and File structure:

11. Let's create basic folder and file structure for entire project.
    - inside src, create components folder
    - inside components, create article, brand, cta, feature, navbar
    - each component will have 2 files (1 correspondent component)
        - inside article folder create Article.jsx and article.css (styles for that component)
            - inside Article.jsx create a new functional component (rafce)
            - inside Article.jsx import article.css
                command: import './article.css
        - then repeat the process to all the other folders in components folder. (brand, cta, feature and navbar).
        
        