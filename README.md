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
If Node.js and npm are not installed downlaod here, (https://nodejs.org/en).

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

4. Start the Proxy Sever 

Before starting the application, ensure you have the proxy server running. In a separate terminal window, navigate to the project directory and run the following command:

```bash
node server.js
```

5. Start the Application

Once the proxy server is running, you can start the development server with the following command:

```bash
npm start
```

## Assumptions

- I assumed that the structure of the API response would remain consistent, specifically that the data.restaurants array would always be present, and that the fields name, cuisines, rating, and address would exist for each restaurant.

- I assumed that the requirement to display only 10 restaurants meant limiting the display to the first 10 results provided by the API, regardless of any specific ordering or filtering criteria.

- The app previously relied on a CORS proxy (cors-anywhere) to bypass CORS restrictions when making API requests. However, this is no longer necessary as I have implemnet a proxy server (server.js) to handle requests and avoid CORS issues.


## Improvments 

-  Currently, the application does not validate the user-provided postcode before making the API request. An improvement would be to add postcode validation to ensure that only valid postcodes trigger API requests. This would prevent unnecessary requests to the API with incorrect or incomplete postcodes, enhancing the user experience and preventing potential errors.

- Adding unit testing using libraries like Jest and React Testing Library would help ensure that the application is working correctly and prevent future regressions.

- The UI is functional but can be improved for a more engaging experience.