# MERN Practice

Mongo + Fastify + React + Node

## Create frontend (React) project

```
npx create-react-app frontend --template typescript
...
```

## Create backend (Fastify) project

[ref](https://www.fastify.io/docs/latest/TypeScript/)

```
mkdir backend
cd backend
npm init -y
npm i fastify fastify-static pino-pretty mongoose dotenv
npm i -D typescript @types/node @types/mongoose
npx tsc --init
npm i -D concurrently nodemon
...
```

# Quickstart with Gitpod

Step by step tutorial about how to start using Gitpod on MERN Practice project.

### 1. Sign in to GitHub
Click `Sign in`.
![sign_in](img/sign_in.png)
![sign_in_2](img/sign_in_2.png)

### 2. Fork the MERN-practice repository
Click `Fork`.
![fork](img/fork.png)
If you have other organizations, please select your own account.
![fork_2](img/fork_2.png)
And then you will see the fork message under the repository title.
![fork_3](img/fork_3.png)

### 3. Go to [https://gitpod.io](https://gitpod.io)
![gitpod](img/gitpod.png)

### 4. Log in Gitpod with GitHub account
Click `Login`
![gitpod_2](img/gitpod_2.png)
Click `Continue with GitHub`
![gitpod_3](img/gitpod_3.png)
Check your account is correct.
![gitpod_4](img/gitpod_4.png)

### 5. Create workspace with git repository URL
Open a new tab of browser, and type in `https://gitpod.io/#https://github.com/{YOUR_GITHUB_ACCOUNT}/MERN-practice`.
![gitpod_5](img/gitpod_5.png)
After processing, the page will jump to Gitpod editor.
![gitpod_6](img/gitpod_6.png)
![gitpod_7](img/gitpod_7.png)


### 6. Grant git privilege to Gitpod
Back to the [https://gitpod.io](https://gitpod.io), and click `Settings`.
![gitpod_8](img/gitpod_8.png)
Select `Integrations` and then `Edit Permissions`.
![gitpod_9](img/gitpod_9.png)
Check `public_repo`, which will grant Write privilege of your public git repository to Gitpod, and then click `Update Permissions`.
![gitpod_10](img/gitpod_10.png)

### (Optional) Change your Gitpod theme to Visual Studio dark theme
Press `F1` in Gitpod editor and select `Preferences: Color Theme`.
![gitpod_11](img/gitpod_11.png)
Select `Dark (Visual Studio)` (or other themes you like).
![gitpod_12](img/gitpod_12.png)
![gitpod_13](img/gitpod_13.png)

### 7. Create own branch
First check your current branch: `git status`.
```console
git status
```
![branch](img/branch.png)

Create local branch: `git checkout -b {YOUR_ACCOUNT_OR_NAME}_dev`, e.g.
```console
git checkout -b ym_dev
git status
```
![branch_2](img/branch_2.png)

Create remote branch and link: `git push -u origin {SAME_AS_YOUR_LOCAL_BRANCH}`, e.g.
```console
git push -u origin ym_dev
git status
```
![branch_3](img/branch_3.png)

After above steps, you can find your own branch in GitHub.
![branch_4](img/branch_4.png)

### 8. Push your changes
After coding, if you want to push your changes, first check your current branch and changed files: `git status`.
```console
git status
```
![push](img/push.png)

Add all changes: `git add .`, and then commit: `git commit -m "{SOME_MEANINGFUL_COMMENT}"`.
```console
git add .
git commit -m "add gitpod tutorial"
```
![push_2](img/push_2.png)

Push to remote repository: `git push`, and check the commit log: `git log`
```console
git push
git log
```
![push_3](img/push_3.png)
