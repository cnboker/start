---
author: NO VALUE SET
ms.author: NO VALUE SET # Microsoft employees only
ms.date: 4/17/2020
# A simple template for small feature specifications
---
# 内容

## 显示分支

- `git branch -a`

## 创建分支

- `git branch nextUI`

## 迁出分支

- `git checkout nextUI`

## 分支上添加内容,commit 内容

- bababa

## 远程提交分支

- `git push --set-upstream origin nextUI`

## Merge 分支

- `git checkout master`
- `git merge nextUI`

## 删除分支
#### remove remote branch
- `git push origin :accounting`

- `git branch -d nextUI`

## 获取远程分支

- `git checkout --track origin/nextUI`
