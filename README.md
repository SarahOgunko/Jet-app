# Jet app

This project fetches and displays restaurant data from the Just Eat API based on a given UK postcode. It focuses on displaying restaurant information, such as name, cuisines, rating, and address. The data is displayed in a simple web interface using React.

## Setup Instructions

1. Make sure you have the following installed on your machine:

Node.js 

npm 

- this can be checked by running the following commands 

```bash
node -v
npm -v
```
If Node.js and npm are not installed, include a link to download Node.js which also installs npm.

2. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone git@github.com:your-username/Jet-app.git
```

3. Install Dependencies

Navigate into the project directory and install the required dependencies:

```bash
npm install
```

4. CORS Setup

To avoid CORS (Cross-Origin Resource Sharing) issues when making requests to the Just Eat API, you need to set up a CORS proxy.

 Use a Public CORS Proxy (CORS Anywhere)
To get started quickly, you can use a public CORS proxy such as CORS Anywhere. This allows you to bypass CORS restrictions without setting up your own proxy server.

You will need to request temporary access to the CORS proxy by visiting the following URL before making any requests: https://cors-anywhere.herokuapp.com/corsdemo

After requesting access, the proxy will allow your app to make the necessary API calls.

5. Start the Application

Run the following command to start the development server:

```bash
npm start
```

## Assumptions

- I assumed that the structure of the API response would remain consistent, specifically that the data.restaurants array would always be present, and that the fields name, cuisines, rating, and address would exist for each restaurant.

- I assumed that the requirement to display only 10 restaurants meant limiting the display to the first 10 results provided by the API, regardless of any specific ordering or filtering criteria.

- Since the API has CORS restrictions when accessed from the browser, I used a CORS proxy (cors-anywhere) to bypass these restrictions. I assumed this was acceptable for the assessment, but for a production environment, a more secure and permanent solution would be required.


## Improvments 

- Minimal error handling is present. If the API call fails, the app either displays a spinner indefinitely or crashes without giving the user meaningful feedback.Am improvemnet would be to display user-friendly error messages based on the type of failure

- Adding unit using libraries like Jest and React Testing Library would help ensure that the application is working correctly and prevent future regressions.

- The UI is functional but can be improved for a more engaging experience.

- Currently, the application uses a hardcoded postcode, which means users cannot change the postcode without modifying the code. To improve this, a dynamic postcode search feature should be added, allowing users to enter a postcode and fetch updated restaurant listings. Input validation should also be implemented to ensure that only valid postcodes trigger API requests


