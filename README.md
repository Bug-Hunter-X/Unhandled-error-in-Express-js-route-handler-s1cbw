# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling when dealing with invalid input parameters.

## The Bug
The `bug.js` file contains an Express.js route handler that retrieves a user's information based on their ID.  However, it lacks error handling for cases where the `userId` is invalid (e.g., not a number, out of range). This can result in application crashes or unexpected behavior.

## The Solution
The `bugSolution.js` file provides a corrected version of the route handler. It includes error handling to gracefully handle cases where the `userId` is invalid.  This prevents application crashes and provides informative error responses to the client.

## How to reproduce the bug
1. Clone the repository.
2. Run `npm install` to install express.
3. Run `node bug.js`.
4. Make a request to `/users/abc` (invalid userId).

## How to fix the bug
1. Review the code in `bugSolution.js`.
2. Implement similar error handling in your own Express.js applications to improve robustness and reliability.