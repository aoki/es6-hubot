// Description:
//  Example scripts for you to examine and try out.
//
// Commands:
//   hubot today  - Return today at random.
// Notes:
//  They are commented out by default, because most of them are pretty silly and
//  wouldn't be useful and amusing enough for day to day huboting.
//  Uncomment the ones you want to try and experiment with.
//
//  These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = function (robot) {
  robot.hear(/hello/i, function (res) {
    res.send("ES5!!");
  });
};
