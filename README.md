# PHASE 1 FINALE PROJECT: E-COMMERCE WEBSITE WITH JSON SERVER

## Prerequisites

- For this phase 1 project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API. The learning goals are 

- Integrate JavaScript and an external API
Debug issues in small- to medium-sized project

### Requirements

- Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIsLinks to an external site.. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

- Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

- Use at least 3 distinct event listenersLinks to an external site. (3 events of different types) that enable interactivity. What this means is that, if you had 3 click events, that would only count as 1 distinct event and you would need to add at least 2 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

- Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

- Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.



### Pre-requisite Data
If you may want to get the json data to use it in a different project feel free to check it out here: 

-  [http://localhost:3000/products](http://localhost:3000/products)

## System Requirements


For you to be able to run this program in your local machine ensure you machine meets the following requirements :

1. Ensure you have an IDE e.g VsCode
2. Ensure you have installed Node in your computer if not follow the link below;

   - For windows: [Nodejs-Installation-Steps:Windows](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/)
   - For Linux: [Nodejs-Installation-Linux](https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu/)
   - For Mac: [Nodejs-Installation-Mac](https://prototype-kit.service.gov.uk/docs/install/node-mac)
  
3. Installed and up-to date json-server, Run the following command in your terminal to install it;
   ```console
    $ sudo npm install json-server
    ```

4. 8BG and above of RAM
5. Intel Corei5 and above processor
   
## Installation

Follow the steps below to install the program to your computer:

- Open your terminal in Ubuntu or the CLI in windows in your machine.
- Clone this repository to your machine by running the following command:
   ```console
    $ git clone 
   ```
- After cloning in the desired folder you can therefore open the project folder by right clicking anywhere within the project folder and choose open in terminal then type the following command on the terminal.

  ```code .```

## Running the program


- To run this program you can click on the link below to get to the deployed website

    [Snap Store E-Commerce Hosted Web Link](https://phase1-project-steel.vercel.app/)

- To run it on your local machine you will need to open the folder containing the project in vscode then in your terminal run the following command
    ```console
        $ json-server db.json
    ```
 
    - Once the server has started you can see the following in your terminal 
    ```console
        Index:
        http://localhost:3000/

        Static files:
        Serving ./public directory if it exists

        Endpoints:
        http://localhost:3000/products
    ```
    - All you have to do now is to go to your html file and the start the server and you'll have run the program.
  
## Author
  
  BETHUEL KHISA
