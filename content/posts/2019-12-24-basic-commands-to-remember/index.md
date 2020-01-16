---
path: "/blog/basic-commands-to-remember/"
date: 2019-12-24
published: true
hero: "./hero.jpg"
title: "Basic commands to remember"
url: ""
type: "post"
tech:
  - npm
tags:
  - git
  - npm
  - node
  - gatsby
  - netlify
  - gulp
  - commands
---
## Verify install

### Git
```
git --version
```

### Node
```
node --version
```

### npm
```
npm --version
```

---

## Git

### Create / Check
```
git init
```

### Verify
```
git remote --verbose
```

### Clone
```
git clone https://github.com/user/repository.git
```

### Add
```
git remote add origin https://github.com/user/repository.git
```

### Change
```
git remote set-url origin https://github.com/user/repository.git
```

### Remove
```
git remote remove destination
```

### Update
```
git push -u origin master
```

---

## <a rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/create-react-app">React</a>

### Create
```
npx create-react-app my-app
```

---

## <a rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/npm">npm</a>

### Install
```
npm install npm@latest -global
```

### List
```
npm list
```

#### Outdated
```
npm outdated
```

### Update
```
npm update
```

### Test
```
npm t
```
### Packages (auto)

#### Install local
```
npm install
```

#### Install global
```
npm install --global
```

### Packages (manual)

#### Local
```
npm install <package>
```

#### Global
```
npm install --global </package><package>
```

### Uninstall
```
npm un </package><package>
```

### Cache

#### Verify
```
npm cache verify
```

#### Clear
```
npm cache clean
```
or
```
npm cache clean --force
```

### Run local
```
npm start
````

### Stop local
```
npm stop
````

### Restart local
```
npm restart
````

---

## Audit

### Verify
```
npm audit
```

### Fix
```
npm audit fix
```
or
```
npm audit fix --force
```

---

## <a rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/gatsby-cli">Gatsby CLI</a>

### Install
```
npm install gatsby-cli
```

### Create
... using default biolerplate
```
gatsby new gatsby-site
```
... using minimal biolerplate
```
gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
```

### Run local
```
gatsby develop
```

### Clear cache
```
gatsby clean
```

### Build production
```
gatsby build
```

### Run production build
```
gatsby serve
```

---

## <a rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/netlify-cms">Netlify CMS</a>

### Install
```
npm install netlify-cms
```