// migrations/<timestamp>-insert-sample-users.js
module.exports = {
  async up(db, client) {
    // Insert sample data into the 'users' collection
    await db.collection('users').insertMany([
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123', // Note: Hash passwords in real applications
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'password123', // Note: Hash passwords in real applications
      },
    ]);
  },

  async down(db, client) {
    // Remove the sample data from the 'users' collection
    await db.collection('users').deleteMany({
      email: { $in: ['john.doe@example.com', 'jane.smith@example.com'] },
    });
  },
};
