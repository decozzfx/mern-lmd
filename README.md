## Run Dev Locally

Clone the project

```bash
git clone https://github.com/decozzfx
```

Go to the project directory

Navigate to the backend directory

```bash
cd backend
```

Install Backend dependencies

```bash
npm install or yarn install
```

```bash
cp sample.env .env
# open .env and add your variables
```

Start the API server

```bash
# runs on http://localhost:4004 (default)
npm run dev or yarn dev
```

Navigate to the frontend directory & install dependencies

```bash
cd ../frontend
npm install or yarn install
```

- Create a `.env` file at the root and add the `VITE_API_URL`. This is the URL of the backend API.

```bash
VITE_API_URL=http://localhost:4004
```

Start the dev server

```bash
# runs on http://localhost:5173
  npm run dev or yarn dev
```

## 🛠️ Build

To build either the frontend or backend, run the following command in the respective directory:

```bash
npm run build or yarn build
```

To test the compiled API code, run:

```bash
# this runs the compiled code in the dist directory
npm run start or yan start
```

## Run using Dockerfile

goto inside backend directory, run:

```bash
# this runs the compose to build first
docker build --tag 'backend:0.01' .
docker run -dp 4004:4004 backend:0.01
```

then move to frontend directory, and run :

```bash
# this for running builded image from compose
docker build -t react-nginx-app .
docker run --name react-nginx-app -p 3000:80 -d react-nginx-app
```

Then run the project
open your browser in localhost:3000
