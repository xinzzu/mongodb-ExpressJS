const express = require('express');
const mongoose = require('mongoose');
const mahasiswaRouter = require('./routers/mahasiswarouters');
const userRouter = require('./routers/users');
const cors = require('cors');
const app = express();
const port = 3000; // Adjust the port as needed

app.use(cors());

const corsOptions = {
  origin: "https://sekar-frontendbackend.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// Connect to MongoDB
mongoose
  .connect('mongodb+srv://azis:1234@cluster0.qejy4pl.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/api/', mahasiswaRouter);
app.use('/api/', userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
