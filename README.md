# Template Bottom tabs

Template starter with React Navigation Bottom Tabs

# Overview
The app is made using React Native and deployed/exported using Expo Go. You should first set up the necessary software and tools to program (and review some tutorials if you would like some additional learning or need to get familiar with the tech stack).

Tech Stack (not a formal one):
This will be everything you’ll need to program the app, but you could probably change some things based on preference.
- Visual Studio Code (https://code.visualstudio.com/)
- Command Line/Terminal
- Javascript/Typescript (https://www.w3schools.com/js/)
- HTML (https://www.w3schools.com/html/)
- CSS (https://www.w3schools.com/csSref/sel_class.php)
- React Native (https://reactnative.dev/)
- Expo Go (https://expo.dev/go)
- Node.js (https://nodejs.org/en)

# Installation
This section will walk you through the general steps you’ll need to take to set up your computer for development, although there are some troubleshooting steps I cannot include.
1. Download and install VSC (https://code.visualstudio.com/) or your choice of IDE on your platform. VSC is a very strong choice for file management and plugins you might like.

2. Install Node.js for your system, which will give you the Node Package Manager (npm) and the tools needed to compile the app and install dependencies (https://nodejs.org/en/download/prebuilt-installer).

3. Open the terminal and command line and type ```jsx node --version ``` and ```jsx npm --version ``` to make sure that both Node.js and npm are installed and ready for use. Next, install Expo globally using ```jsx npm install --global expo-cli``` in the command line.


Now you are ready to start the development process. Make sure you have Git installed on your system (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) so you can copy the repository for easy editing and can use VSC Git features.
Clone the app repository from Github: (link)
You should just need to open up the normal Windows Command Line, or whatever terminal you use, to use git clone [repo link] and clone the repository with all the Git features onto your system.
If you are feeling extra spicy and want to code from scratch or make an entirely new app, this is where you can download a separate repository of your liking. I used this one (https://github.com/codingki/react-native-expo-template/tree/master/template-with-bottom-tabs) to create the app.

Navigate to the folder where you have cloned the repository from the terminal. You can keep this step clean on Windows if you type “cmd” into the file path bar as shown below: (you can also use this for easily choosing a folder to clone the repo!)

You know you are in the right folder when you can see “package.json” inside.
Type npm install into the terminal and run the command, which will install all the packages and dependencies in the package.json file. This should be everything to get the app running, but you may run into some errors.
Use npm audit fix or npm audit fix --force until you have no more warnings or vulnerabilities. This should probably remove all the problems, but at least make sure the severe vulnerabilities (in red) are removed.


# Installation

1. Install [node.js](https://nodejs.org/en/)
2. Install Expo

   ```jsx
   npm install --global expo-cli
   ```

3. Download this repo
4. Install deps on your template folder

   ```jsx
   npm install
   ```

5. Start the environtment

   ```jsx
   expo start
   ```

### Rapi UI

![../media/hero.png](../media/hero.png)

These UI components are provided by [Rapi UI](https://rapi-ui.kikiding.space/).
Check the [documentation](https://rapi-ui.kikiding.space/docs/) for usage and more components.

# File Managements

These are the folders and the functionality

```jsx
/src/assets -> for media such as images, etc
/src/components -> for components
/src/navigation -> for React Navigation
/src/screens -> for Screens
```

Created using codingki's React Native Expo Template.
