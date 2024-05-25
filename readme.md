## Getting Started

This is a skeleton for make mobile apps with react-native.

### Prerequisites

1. node
2. npm
3. icon-set-creator
```sh
    npm i -g icon-set-creator
```

### Installation

1. init git repository
```sh
git init
```
2. find all reactbase_new and replace it with <project_name>
3. change folder name on `android/app/src/main/java/com/reactbase_new` to `android/app/src/main/java/com/<project_name>`
4. Install NPM packages
   ```sh
   npm install
   ```

### Command and Usage

1. generate data model
for generate data model put the json file on `src/data/file.json`
```
npm run generate model <file_name> <model_name>
```
```sh
npm run generate model file file
```

2. generate view
```
npm run generate view <view_name>
```
```sh
npm run generate view SplashScreen
```