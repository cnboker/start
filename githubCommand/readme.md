# git command tutorial
## create respoirity
```javascript
mkdir /myproject
cd myproject
git init
git remote add origin https://github.com/cnboker/myproject.git
```
## add file
```javascript
touch readme.md
git status
```
## commit file
```javascript
git add readme.md
git commit -m "add readme.md"
git remote -v
git push origin master
```
## caching your github password
```javascript
git config --global credential.helper wincred
```

## Adding your project to GitHub
> Open github.com and create a Repo. coppy the path to the .git for later use.
> using the termial, navigete to the location where your vscode project
```javascript
git init
git remote add origin https://github.com/to/origin.git
git add.
git commit -m "inital commit"
git push origin master
```

## To remove folder/directory only from git repository and not from the local try 3 simple commands
```js
git rm -r --cached folderName
git commit -m "remove folder"
git push origin master
```
add .gitignore file, add line
```js
/folderName
```

## .gitignore is not work
```js
git rm -r -cached .
git add .
git commit -m ".gitignore is now working"
```
