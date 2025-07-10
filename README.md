
# Create a folder and open in VS Code
mkdir project-name
cd project-name
code .

# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Connect to GitHub repository
git remote add origin <your-repo-link>

# If branch is not main, rename it
git branch -M main

# Push code to GitHub
git push -u origin main

# If you had created a README file while making repository on GitHub
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Resolved conflicts"
git push -u origin main

# Common Error: index.lock
# If error shows 'Unable to create .git/index.lock'
# Run the below command to fix it
Remove-Item -Force .git\index.lock

# For future updates, just run
git add .
git commit -m "your message"
git push
                                                
                                                
                                                
                                                
                                                
                                                 ✅Inception✅ 

1)  what is HTML Element?
✅ Answer:  A normal HTML tag which is directly shown in the browser when a webpage loads as part of the Real DOM.

2) what is React Element?
✅ Answer:  A React Element is a JavaScript object that describes the UI. It is converted into an HTML element by the render() method and displayed in the browser as part of the Real DOM.

3) What does the render() method do in React?

✅ Answer: The render() method converts a React Element (JavaScript object) into an HTML tag and displays it in the browser as part of the Real DOM.
  render() method replace everything inside the root with whatever we passed in inside React

4) Does Browser understand HTML,CSS,JavaScript and React?
➡️ Yes, browser directly understands HTML because HTML is the main language to build webpages.

➡️ No, browser doesn’t directly know CSS. But when we link CSS with HTML, browser applies those styles on the webpage.

➡️ Yes, browser understands JavaScript because every browser has a JavaScript engine(like google chrome has v8) to run JS code.

➡️ No, browser doesn’t understand React directly. We include/bring/import/inject React in our project (using CDN or npm), and React converts its code into normal JavaScript which browser can understand.

5)  Does the order of <script> tags matter in HTML?
 
a)  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src='./app.js'></script>

b)   <script src='./app.js'></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Ans) Yes, order matters.
     Because app.js uses React and ReactDOM. If they are not loaded first, it gives:
     Uncaught ReferenceError: React is not defined.

5)  what is use of crossorigin in script?
➡️ We use crossorigin so that the browser can safely load scripts from other websites (like CDN) without security issues.

6) what is CDN?
➡️ CDN (Content Delivery Network) is a network of servers around the world that deliver files (like JS, CSS, images) faster to users.
➡️ Instead of loading files from your server, the browser gets them from the nearest CDN server.


Why this is important to use CDN?
➡️ faster loading 
➡️ less buffering
➡️ Handling more viewers
➡️ saves Bandwidth

Example : when we watch utube videos , so the video data is coming from the nearby server which helps the video load faster and stream smoothly.

7) Explain React.development.js and React.devlopment.js
1) react.development.js
This is the React core library ( creating element is the core of react).
React creates and manages the component( like button or form).

2) react-dom.development.js
This is the React DOM library which is useful for DOM operation.
React DOM takes the component and render it on the webpage.

8) ✅ Question:
👉 Why do we use crossorigin in CDN script files but not in local script files like app.js?

✅ Answer:
👉 “App.js is a local file. It has the same origin. The browser loads it from the internal server, so no crossorigin is required.”

👉 “CDN files are external files. They have a different origin (cross-origin). The browser loads them from an external server, so crossorigin is required to load the external file safely without any security issues.”

“Local file = same origin = no crossorigin needed.
External file = cross origin = crossorigin needed.”


9) what are CORS?
👉 CORS (Cross-Origin Resource Sharing) is a browser security feature that controls how a website can request data from another website (external server) safely.
It allows or blocks cross-origin requests based on rules set by the server.

 10) Why browser needs crossorigin for scripts but not always for images?
 ✅ Answer:) Scripts can run code so need crossorigin for safety. Images don’t run code, so no crossorigin is needed in most cases."


                                             
                                             ✅Igniting our app✅ 

React is making our app fast but to an extent there are a lot of packages which we need to make our app fast.

what is npm?
npm is a standard repository that manages all the packages which we install ,include in our project.

These packages are also known as dependencies.project depends a lot of dependencies.
npm take care version of package in package.json

1) npm init

we have to answer few questions about our project or we can accept the default values.
Now Package.json will be installed.

package.json : It is the configuration for npm.it is created/install when we run the command npm init.


✅ 1️⃣ npm init

Creates a new file 📄 called package.json in your project folder.
package.json:
No dependencies/packages yet.
It lists the packages that need to be installed in the future.

✅ 2️⃣ npm install -D parcel

Adds Parcel to devDependencies in package.json.
Downloads Parcel and all its required packages.
Creates a folder 📂 called node_modules and saves all downloaded packages there.
Creates a new file 📄 package-lock.json to lock the exact versions of all downloaded packages.

NodeModules
Node Modules fetches all the code of all the dependencies into our system.Node module is a collection dependencies.
Node modules is kind of database where all the packages exists.

📦 package.json
What it does? → Lists which packages are needed for the project.
Why we need it? → So npm/yarn knows what to install and we can continue working on the project.

why do we need package.json?

🔒 package-lock.json
What it does? → Locks the exact version of installed packages.These packages are being installed from node modules.
Why we need it? → To make sure all developers use the same package versions and avoid bugs due to version differences.


we have written HTML file , css file ,javascript file.Our code is not ready to push to production.so we need bundler to make ready our app for production.

what is Bundler?
Bunder bundles the app,packages the app properly so that it can be pushed/send/shipped to production.
Bundler configure/ignite our app.we will use Parcel as a Bundler.

How to get Bundler Parcel into our app?
Command : npm install -D parcel

There are 2 types of dependencies/packages
1) Dev dependency : it is required in development phase ( when we are developing our app)
2) Normal dependency ; it is required in production phase ( when our app is ready to push to production)

"integrity"
  sha512- :Sometimes application is working on the dev machine but it is not working on the prod machine.Package-lock.json keeps hash to ensures the exact same code runs in development and production.


 Caret (^) : It locks the major version and only allows minor and patch updates.
 Examples : ✅ 1.3.0 (minor) 
            ✅ 1.2.5 (patch)
            ❌ 2.0.0 (major)

tilde(~) : It locks minor version and only allows patch updates.
Examples : ✅ 1.2.4 (patch)
           ✅ 1.2.9
           ❌ 1.3.0 (minor)
           ❌ 2.0.0 (major)

 2.5.7
| | |
| | └── PATCH
| └───── MINOR
└──────── MAJOR

🔗 Transitive Dependencies
When a package you install depends on another package, and that package depends on yet another package, these indirect dependencies are called transitive dependencies.

📦 Example:
Our project depends on Parcel.
Parcel depends on other packages.
Those packages may depend on more packages.
👉 All these indirect dependencies are transitive dependencies for our project.

.gitignore makes sure certain files don’t go into Git/GitHub or production.

we can put package.json and package-lock.json into git because both maintains a node of all the dependencies what our project needs.

If we have package.json and package-lock.json so we can recreate node_modules if if it is deleted by command npm install so we will put node_modules into .gitignore. 
whatever we can regenerate ,no need to put on git,git shoulf have essential things.

                   let ignite our app
we will use parcel as a bundler to ignite our app

Command : npx parcel index.html

npm -> install a package
npx -> execute a package

Note : CDN links is not a recommended way to get React and ReactDOM into our project. Another way to get React in our project is npm

Command : npm install react
          npm install react-dom

Now these files/packages are installed and save in node_modules so we will import it from there

Now import React and React-dom into our project(App.js)

import React from "react"; ( these files are importing from node_modules)
import ReactDOM from "react-dom/client";  ( these files are importing from node_modules)

But after importing React and React-dom,it still give an error
Error : Browser scripts(app.js) cannot have import or exports so we add type="module" in script

 <script type="module" src="App.js"></script>
  “type="module" supports imports and exports, so we can load React and other modern JS modules in our project.”

1)  what is Parcel bundler ?✅ 
Ans)  Parcel is a bundler and it takes HTML , CSS and JavaScript code and bundles them together and send it to the browser to run code.

2) why do we use parcel in React projects?
Because the browser doesn’t understand JSX. Parcel uses tools like Babel to convert JSX to JavaScript, bundles files, and runs the app.


1) Dev Build
2) Local server ( Host app to server)
3) HMR = Hot Module Replacement : Parcel automatically refresh our page
4) Parcel uses a file watching Algorithms -written in C++
5) Caching : faster builds : Parcel is giving faster development experience due to caching
6) Parcel do image optimisation
7) Minification
8) Bundling
9) Compressing the file into smaller file so that they can be shipped to production
10) consistent hashing
11) code splitting
12) Differential bundling - support older browsers
13) Diagnostic
14) Error Handling
15) HTTPs
16) Tree shaking -remove unused code

Along with React ,we need packages,dependencies which help to make production ready large scale app


4) What happens when you type npx parcel index.html?

✅ Answer:
npx is used to execute a npm package parcel and its source file is index.html

1️) Creates a development build (bundles your HTML, CSS, JS for the browser)
2️) Starts a local development server at http://localhost:1234 where you can see your app live.
3) Watches your code for changes and auto-refreshes the browser.

5) What is the difference between npm install parcel and npx parcel?
Ans) npm install parcel installs Parcel in the project folder.
     npx parcel runs Parcel without installing it permanently.


6)  What is Development Build?
Ans) ✅ It runs on a development server (local server).
     ✅ It is used for testing and debugging during development.
     ✅ Files are not optimized, so they are larger and easier to debug.
     ✅ It runs on localhost:1234.
     ✅ Command: npx parcel index.html

7)   What is Production Build?
Ans) ✅ It runs on a production server (remote server).
     ✅ It is used for deployment and for running the app for real users online.
     ✅ Files are optimized and minified, ready for production.
     ✅ It is deployed on a live server.
     ✅ Command: npx parcel build index.html

      Local server (development server) is where we test our website on our own computer.
      Production server (remote server) is where real users open the website on the internet after we upload it.


7) ✅ Why does Parcel use port 1234?

Ans ) It’s the default port Parcel uses for its dev server. You can also change it if needed.

8) what is dist folder and Parcel Cache folder?
✅ Parcel Cache: It is a temporary folder where Parcel stores all the processed files. It optimizes and bundles them and avoids reprocessing the same files again for faster builds.

✅ Dist Folder: The dist folder contains production-ready, optimized files that can be deployed on a live server.
Parcel saves production ready files into dist folder and now browser can took thses fils to tun the app.

👉 Parcel uses cache for speed (with HMR) and creates the dist folder for deployment.


✅ Q: Why should we put package.json and package-lock.json on Git but not node_modules, dist and .parcel-cache?

Ans:We put package.json and package-lock.json on Git because they store all project dependencies and allow others to install the exact same setup.

We don’t put node_modules, dist and .parcel-cache because:
✅ node_modules can be regenerated using npm install.
✅ dist and .parcel-cache are temporary/auto-generated files created by Parcel during build (npx parcel index.html).

Only essential files should be tracked in Git. Auto-generated folders are ignored to keep the repository clean and lightweight.


Conclusion 

1) npm init 
2) npm intsall -D parcel 
--remove main file from package.json
3) npx parcel index.html 
now remoce cdn links and get react from npm using below commands
npm install react
npm install react-dom 
Now import it in script file
add type='module' in script file 
4) npx parcel index.html
4) npx parcel build index.html

how much engineering goes behind the scenes when u build production ready application



