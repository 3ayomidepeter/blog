# Deployment Instructions for Heroku

Follow these steps to deploy the application to Heroku:

1. **Create a Heroku Account:**
   - If you don't have a Heroku account, sign up at [Heroku](https://signup.heroku.com/).

2. **Install the Heroku CLI:**
   - Download and install the Heroku CLI from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

3. **Login to Heroku:**
   - Open your terminal and run the following command to log in to your Heroku account:
     ```sh
     heroku login
     ```

4. **Create a New Heroku App:**
   - In your terminal, navigate to the root directory of your project and run the following command to create a new Heroku app:
     ```sh
     heroku create
     ```

5. **Add a Procfile:**
   - Ensure you have a `Procfile` in the root directory of your project with the following content:
     ```
     web: node index.js
     ```

6. **Specify Node.js Version:**
   - Ensure your `package.json` file includes the `engines` field to specify the Node.js version:
     ```json
     "engines": {
       "node": ">=14.0.0"
     }
     ```

7. **Add Environment Variables:**
   - Add any necessary environment variables for your database connection or other configurations in your `index.js` file.

8. **Deploy to Heroku:**
   - Commit your changes and push your code to Heroku:
     ```sh
     git add .
     git commit -m "Prepare for Heroku deployment"
     git push heroku main
     ```

9. **Open Your App:**
   - Once the deployment is complete, open your app in the browser:
     ```sh
     heroku open
     ```

10. **View Logs:**
    - To view the logs of your Heroku app, run the following command:
      ```sh
      heroku logs --tail
      ```

Your application should now be deployed and running on Heroku.
