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
![Login Screen](https://drive.google.com/file/d/11HsTk91uE5fbR7s24onWPDe59bz_EDi6/view?usp=drive_link)
![Login Screen](https://drive.google.com/file/d/11KygfFTw78U7VP85PtpXZ3BmRqRW-4ep/view?usp=drive_link)
![Home Tab](https://drive.google.com/file/d/117WrGrT34Eos5zsJgOkqVlqyy6Y-ekck/view?usp=drive_link)
![Home Tab](https://drive.google.com/file/d/11Wewv6W0cMisklk3zlMiLp5bSE0N9vgF/view?usp=drive_link)
![Home Tab](https://drive.google.com/file/d/1164vttNT4TstxBvkJnrplho5FUP59XI1/view?usp=drive_link)
![Home Tab Loading](https://drive.google.com/file/d/10uebvJW8zF3Nw19na98RUvU6XapsZvdj/view?usp=drive_link)
![Favorite Tab](https://drive.google.com/file/d/10zjxA7_h4-vfp8Z5s0qY4E2anVi0kcCT/view?usp=drive_link)
![Favorite Tab](https://drive.google.com/file/d/10xNGnsa2PKZfFjC2iHQQXxCBvN7_u9oX/view?usp=drive_link)