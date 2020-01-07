module.exports = async () => {
  const Tweet = require("./models/Tweet");
  const User = require("./models/User");

  User.hasMany(Tweet, { as: "Tweets", foreignKey: 'UserId' });
  Tweet.belongsTo(User, { as: "User", foreignKey: "userId" });
  
  const errHandler = err => {
    console.error("Error: ", err);
  };

  const user = await User.create({
    username: "alexdmc6",
    password: "123456789"
  }).catch(errHandler);

  const tweet = await Tweet.create({
    contents: "This is a tweet by user alexmdc6",
    userId: user.id
  }).catch(errHandler);

  const users = await User.findAll({
    where: { username: user.username },
    include: [ { model: Tweet, as: "Tweets" } ]
  }).catch(errHandler);

  console.log("\n\n**************************\nAslexdmc6 and his Tweets = ", users);
};
