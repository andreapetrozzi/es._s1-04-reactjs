### Description 
We make EpiBooks even better

Start from your previous project, today you will allow users to leave book reviews.
Remember, every comment posted will be visible to everyone.

### API Docs:
Do you have a CRUD endpoint for comments on:
https://striveschool-api.herokuapp.com/api/comments/

This means you can GET, DELETE, POST, PUT data from there.

### IMPORTANT:
You will need to use Authentication headers
(get a new token at https://strive.school/studentlogin if the previous one has expired)

The comment is structured as an object in this way:

{
  "comment": string
  "rates": string,
  "elementId": string
}

Where:
- comment is the text of the comment entered by the user
- rate is the value between 1 and 5
- elementId is the ASIN code of the book

Example:
{
  "comment": "A good book but definitely I don't like many parts of the plot"
  "rates": "3",
  "elementId": "0316438960"
}

### WARNING
Do a GET on https://striveschool-api.herokuapp.com/api/comments/
will return ALL comments to database.

You'll probably be primarily interested in receiving comments for a single book at a time:
to do this you will need to specify the elementId/ASIN of the book in your URL:
https://striveschool-api.herokuapp.com/api/comments/:elementId

Example:
https://striveschool-api.herokuapp.com/api/comments/0316438960
will find the comments of a single book.

### TASKS:

1. Add a "CommentArea" component at the end of "SingleBook".
        When the user clicks on a "SingleBook" (therefore when the selected property becomes true in its state),
        comments should appear (hint: short-circuit operator!).
        
2. "CommentArea" will fetch the reviews for the selected book,
         and save the comments in your status.
         It will also contain two sub-components: "CommentsList" and "AddComment".
         
3. "CommentsList" will show book reviews in a list;
         the reviews array will be passed to it as a prop by the CommentArea component.
         The single review will be displayed using another component, called SingleComment.
         
4. "AddComment" will contain a form to add the text of the review and the rating (from 1 to 5).
         This component will allow the user to POST the new comment on the selected book.
   
5. Add a DELETE button next to each comment.
         Will have to create a request to
         https://striveschool-api.herokuapp.com/api/comments/:commentId
         
6. Create a "Loading" component. This will appear on the page when the request is being processed, but not yet resolved.

7. Create an "Error" component. If something goes wrong with a network request, an error message should appear.


### Terminal commands
- `npm i bootstrap@4.6.1`;
- "npm i react-bootstrap@1.6.6`.

// Refresh the API







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
