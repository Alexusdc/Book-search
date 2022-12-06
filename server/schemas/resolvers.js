const resolvers = {
  Query: {
    me: async () => {
      return User.find().sort({ createdAt: -1 });
    }
  }
};