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