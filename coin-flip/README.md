# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Further Study: Coin Flip
Make a new React project with create-react-app, and make Git repositories so you can save your work.

For this part, you will create a coin flipping counter.

The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

Before building anything, think about the structure of your React app. Don’t build this application with a single component: think about how to break your app up into at least two separate components!

Here’s some inspiration:

    _images/coin.gif
### Tests
Write tests for your application as well. At a minimum, you should test that there’s no coin image when the page loads, and that the text below the coin updates properly when the coin lands on heads or tails.

### Testing Randomness

Testing random output can be tricky, since it’s unpredictable. Fortunately, Jest comes with functionality to mock any function you like, including Math.random. One way to handle it is with code like this:

    beforeEach(function() {
      jest
        .spyOn(Math, "random")
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);
    });

    afterEach(function() {
      Math.random.mockRestore();
    });
With this code, Jest will ensure that the first call to Math.random() returns 0.25, and the second call will return 0.75. In this way you can make random output completely predictable within your tests.
