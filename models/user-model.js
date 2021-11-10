module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          username: String,
          email: String,
          phone_number: String,
          template_messages: String
        }
      )
    );
  
    return User;
  };