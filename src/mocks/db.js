const autoCompleteSearchDash = require("./data/searchResults.json");
const profile = require("./data/db.json");
 
const posts = require("./data/posts.json");
const dashBoard = require("./data/dashBoard.json");
const features = require("./data/features.json");
const activity = require("./data/activity.json");
const createPost = require("./data/createPost.json");
const imageUpload = require("./data/imageUpload.json");
const getInterestsFromUser = require("./data/interests.json");
const ranBlogs = require("./data/checkoutBlogs.json");
const ranPosts = require("./data/randomPosts.json");
 
module.exports = () => ({
  profile,
  autoCompleteSearchDash,
  posts,
  dashboard,
  features,
  activity,
  createPost,
  imageUpload,
  getInterestsFromUser,
  ranBlogs,
  ranPosts
});
