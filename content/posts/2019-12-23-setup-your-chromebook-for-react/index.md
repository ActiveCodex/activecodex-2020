---
path: "/blog/setup-your-chromebook-for-react/"
date: 2019-12-23
published: true
hero: "./hero.jpg"
title: "Setup your Chromebook for React"
url: ""
type: "post"
tech:
  - Chomebook
  - npm
tags:
  - chromebook
  - setup
  - react
  - git
  - nodejs
  - development
---
I've read and watching many methods on how to do this, but I didn't want to:

- Turn on **<a rel="noopener noreferrer" target="_blank" href="https://www.chromium.org/chromium-os/chromiumos-design-docs/developer-mode">Developer Mode</a>** and enable **<a rel="noopener noreferrer" target="_blank" href="https://github.com/dnschneid/crouton">Crouton</a>**
- Install **<a rel="noopener noreferrer" target="_blank" href="https://termux.com/">Termux</a>** and use Secure Shell to get around tricky file permissions

There might be many pros & cons using the above approaches but I didn't understand the risks my Chromebook was put into, and if it actually was necessary for what I wanted to do.

At this point, I just needed something that had minimum risk, worked and allowed me to start coding without doing much configurations.

---

## Turn on Linux support

1. Navigate to **Chrome OS settings** and turn on **Linux (Beta)**.
2. This will download the necassary files and install Linux, this could take couple of minutes.

Once this is done, a **Terminal** app will appear in your Launcher.

This will also create a **Linux files** folder within your Files, this is usefull as it restricts the Terminal access to all your files.

## Install Node.js with npm

Execute the followings:

1. Remember or note down the latest stable version number of <a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en/">Node.js</a>.
2. Install / update your packages
  ```
  sudo apt-get update && sudo apt-get dist-upgrade
  ```
3. Install the curl utility
  ```
  sudo apt-get install curl gnupg -y
  ```
4. Install node.js (remember to replace the version number **12** to the version number obtained before)
  ```
  curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  ```
  ```
  sudo apt-get install -y nodejs
  ```

<a rel="noopener noreferrer" target="_blank" href="https://github.com/nodesource/distributions/blob/master/README.md#debinstall">More information</a>

## Confirm install

Run the folllowing codes to confirm the installation, it should return the version number for each.

1. Git
  ```
  git --version
  ```
2. Node
  ```
  node --version
  ```
3. npm
  ```
  npm --version
  ```

## Install Visual Studio Code

1. Download the **.deb 64 bit** of <a rel="noopener noreferrer" target="_blank" href="https://code.visualstudio.com/download">Visual Studio Code</a>.
2. Right-click on the file and select **Install with Linux (Beta)**.

Once the installation is done, you'll find the familiar Visual Studio Code icon in your Launcher.

## Create a React project

There are many React biolerplates that you can start with, but for now we'll use the popular **create-react-app**.

1. This will download a default biolerplate project and create it within a folder labelled **my-app**, you can rename this to your likings
  ```
  npx create-react-app my-app
  ```
2. Go into **my-app** folder
  ```
  cd my-app
  ```
3. Start a local server within the folder / current React project
  ```
  npm start
  ```

To stop your local server, you can close the Terminal, but I prefer to stop it manually by press **Ctrl+C**.

More information available on <a rel="noopener noreferrer" target="_blank" href="https://github.com/facebook/create-react-app">Create React App</a>.
