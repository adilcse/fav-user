# React Native App README

## Description
This is a React Native app that features a login screen and a dashboard screen with bottom navigation. The dashboard screen consists of two tabs: Home and Favorite. The Home tab displays a list of users retrieved from the Random User API, allowing users to mark them as favorites. The Favorite tab shows the list of users marked as favorites.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Technical Specifications](#technical-specifications)
- [Screenshots](#screenshots)

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.

## Usage
1. Open the app on your device or emulator.
2. On the login screen, enter the following credentials:
   - Email: reactnative@jetdevs.com
   - Password: jetdevs@123
3. Tap the "Login" button to log in.
4. After successful login, you will be directed to the dashboard screen with two tabs: Home and Favorite.
5. In the Home tab, you will see a list of users loaded from the Random User API. Scroll down to load more users (pagination), and pull down to refresh the list.
6. Each user item in the list displays a profile picture, name, and additional details (optional). You can mark a user as a favorite by tapping the favorite icon on the top right corner of the item.
7. Switch to the Favorite tab to view your list of favorite users.
8. In the Favorite tab, you have the option to mark users as unfavorite by tapping the corresponding option.

## Features
- Login screen with email and password fields.
- Dashboard screen with bottom navigation and two tabs: Home and Favorite.
- Home tab:
  - Displays a list of users loaded from the Random User API.
  - Supports pagination for loading more users.
  - Allows pull-to-refresh functionality.
  - Each user item includes a profile picture, name, and optional additional details.
  - Provides the ability to mark users as favorites.
- Favorite tab:
  - Displays a list of favorite users.
  - Provides the option to mark users as unfavorite.

## Dependencies
The app utilizes the following dependencies:
- React Native
- Redux
- React hooks
- Random User API (https://randomuser.me/api/?results=10)

## Technical Specifications
- The entire codebase is written in TypeScript for improved type safety and developer productivity.
- Redux is used for state management.
- React hooks are utilized for managing component state and lifecycle.
- The Random User API is used to fetch a list of users for the Home tab.
- Additional information about the Random User API can be found at https://randomuser.me/.

## Screenshots
<img src="https://firebasestorage.googleapis.com/v0/b/chatwithchat2.appspot.com/o/Screenshot_20230606-181504.png?alt=media&token=35d9105c-9917-4b1b-90d3-ad609ba639a5" alt="Login Screen" width="300px">
<img src="https://firebasestorage.googleapis.com/v0/b/chatwithchat2.appspot.com/o/Screenshot_20230606-181516.png?alt=media&token=4d8b99b9-2b66-4893-9e35-cf9670b6022b" width="300px" alt="Login Screen">
<img src="https://firebasestorage.googleapis.com/v0/b/chatwithchat2.appspot.com/o/Screenshot_20230606-181826.png?alt=media&token=da195c19-4e1d-478b-999a-338e5592f2fc" width="300px" alt="Home Tab">
<img src="https://firebasestorage.googleapis.com/v0/b/chatwithchat2.appspot.com/o/Screenshot_20230606-181809.png?alt=media&token=696f8f58-702e-4ddf-8a21-649170f26bcd" width="300px" alt="Home Tab">
<img src="https://firebasestorage.googleapis.com/v0/b/chatwithchat2.appspot.com/o/Screenshot_20230606-182644.png?alt=media&token=0091b5ab-0479-4c21-b81f-d0ff5c9d376f" width="300px" alt="Home Tab">
<img src="https://firebasestorage.googleapis.com/v0/b/chatwithchat2.appspot.com/o/Screenshot_20230606-181812.png?alt=media&token=f3b088c2-b396-4d80-8ed4-fe4d72931f1e" width="300px" alt="Favorite Tab">
<img src="https://firebasestorage.googleapis.com/v0/b/chatwithchat2.appspot.com/o/Screenshot_20230606-181819.png?alt=media&token=6d2cf27f-e45d-45e1-9ba3-6fd54b4ef7ef" width="300px" alt="Favorite Tab">