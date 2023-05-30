# GoGreen-365

A green initiative by passionate youths

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)


## Project Overview

GoGreen 365 is a web app developed to empower individuals in Singapore to make daily choices that have a positive impact on the environment. As the team behind GoGreen 365, we believe that every small action counts when it comes to protecting our planet and by engaging in sustainable activities, you can do your part to contribute to the collective effort of combating climate change.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Krueless/GoGreen-365.git
   
2. From the root directory, toggle to the frontend and backend folders to install the necessary dependencies:
  
   ```bash
   cd frontend
   npm i
   cd ..
   cd backend
   npm i
  
## Usage
1. Set up .env file in the backend folder

2. We will need to set up a MongoDB_URI in order to access the MongoDB database. Refer to the following guide:

   Set up a MondoDB Atlas account: https://www.mongodb.com/docs/atlas/getting-started/
   
   Connect to MongoDB Atlas (via Node.js driver): https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/
   
   
3. Upload the MongoDB_URI into the .env file. It should have the following format:
```bash
   MONGODB_URI = mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true
```


