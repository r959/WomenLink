const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/womenlink', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB Models
const BusinessOwner = mongoose.model('BusinessOwner', new mongoose.Schema({
  name: String,
  customers: Number,
}));

// API: Get all business owners
app.get('/api/owners', async (req, res) => {
  const owners = await BusinessOwner.find();
  res.json(owners);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
