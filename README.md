# eatnsplit

An intuitive React application designed to help friends track shared dining expenses and split restaurant bills effortlessly.

## Project Overview

`eatnsplit` provides an interactive interface for maintaining friend balances, adding new dining companions, and calculating splits with proportional expenses. Built with modern React and declarative state management.

## Features

- **Friends List & Balance Tracking**: View who owes money, who is owed, and friends with settled balances.
- **Add Friend Flow**: Dynamically register new contacts with custom or random avatar URLs.
- **Bill Calculation**: Calculate shared expenses, specify individual contributions, and determine payment responsibility.
- **Visual Status Badges**: Clear color coding for debts (red) and credits (green).

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x, 18.x, or later)
- [npm](https://www.npmjs.com/) (version 8.x or later)

## Installation/Build

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/AntonioHellin/eatnsplit.git
   cd eatnsplit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

Start the development server:
```bash
npm start
```
The application will run locally at `http://localhost:3000`.

To run test suites:
```bash
npm test
```
