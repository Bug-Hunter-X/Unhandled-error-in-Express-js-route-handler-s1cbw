const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(userId) || parseInt(userId) < 0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... (rest of the user retrieval logic)
  // Example:  Simulate fetching user data
  const userData = {
    id: userId,
    name: `User ${userId}`
  };
  res.json(userData);
});
app.listen(3000, () => console.log('Server listening on port 3000'));