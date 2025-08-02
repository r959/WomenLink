const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/womenlink', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BusinessOwner = mongoose.model('BusinessOwner', new mongoose.Schema({
  name: String,
  customers: Number,
}));

const data = [
  { name: 'Owner A', customers: 14 },
  { name: 'Owner B', customers: 9 },
  { name: 'Owner C', customers: 21 }
];

BusinessOwner.insertMany(data).then(() => {
  console.log('Sample data inserted');
  mongoose.disconnect();
});
