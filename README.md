## Run Locally

Clone the project

```bash
git clone https://github.com/decozzfx
```

Go to the project directory

```bash
cd decozzzzzzz
```

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

## Run using Docker compose

```bash
# this runs the compose to build first
docker compose build
```

```bash
# this for running builded image from compose
docker compose up
```
