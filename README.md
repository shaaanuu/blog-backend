# Blog Backend

This is the backend for a blog application, built using Node.js, Express and MongoDB

## Features

- RESTful API for blog posts
- CRUD operations
- MongoDB for data storage
- Environment variable support

## Technologies Used

- Node.js
- Express
- MongoDB

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (local or cloud)
- A `.env` file with the MongoDB URI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shaaanuu/blog-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add your MongoDB URI:
   ```env
   MONGO_URI=mongodb://your_mongo_uri
   ```

### Running the Server

Start the development server:

```bash
npm run dev
```

The server will be running on `http://localhost:5000`.

## API Endpoints

### Blog Posts

- **GET /posts**: Get all blog posts
- **GET /posts/:id**: Get a single blog post by ID
- **POST /posts**: Create a new blog post
- **PUT /posts/:id**: Update a blog post by ID
- **DELETE /posts/:id**: Delete a blog post by ID

## License

This project is licensed under the ISC License.
