COSMOSDAS
#PROJECT NAME 

A browser-based astro photo website that gives inspiration to the young and charming future astro photographers .

## How to Run This Project Locally

If you want to download this project and run it on your own machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and npm installed on your computer.

### 1. Clone the Repository
Open your terminal and run the following command to download the code:
\`\`\`bash
git clone https://github.com/your-username/nasa-apod.git
\`\`\`
*(Note: Replace `your-username` with your actual GitHub username)*

### 2. Navigate to the Project Directory
\`\`\`bash
cd nasa-apod
\`\`\`

### 3. Install Dependencies
This project uses Vite. Install the necessary node modules by running:
\`\`\`bash
npm install
\`\`\`

### 4. Setup the NASA API Key
By default, the project might use a `DEMO_KEY` which is highly rate-limited by NASA. 
1. Get your own free API key from [api.nasa.gov](https://api.nasa.gov/).
2. Open `src/main.js`.
3. Replace the `DEMO_KEY` on line 1 with your new key: `const API_KEY = 'YOUR_KEY_HERE';`

### 5. Start the Development Server
Run the following command to start Vite's local server:
\`\`\`bash
npm run dev
\`\`\`
Your terminal will give you a local host link (usually `http://localhost:5173/`). Click it to view the project in your browser!

### 6. Build for Production (Optional)
If you want to build the final static files for deployment, run:
\`\`\`bash

## running the code 
you can run the code in your vs code with the command
npm run dev 


## credits
i used gemini to debug the code adn help me when i got stuck and i used hackclub's guide to help me get this project running, i used nasa apod api 

##you can use this code how ever you want just dont forget to give me credit ;)

npm run build
\`\`\`
