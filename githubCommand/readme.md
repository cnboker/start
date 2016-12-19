// create respoirity
mkdir /myproject
cd myproject
git init
git remote add origin https://github.com/cnboker/myproject.git
// add file
touch readme.md
git status
git add readme.md
git commit -m "add readme.md"
git remote -v
git push origin master

