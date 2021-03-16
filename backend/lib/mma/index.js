
/*

  MMA API in NodeJS
  -----------------

  Copyright: (c) 2015 Andrew Valish
  License: BSD, see LICENSE for more details

*/

var sherdog = require('sherdog');
var googleIt = require('google-it');

//-------------------------------------------------------+
//  Get Fighter Profile Data
//  mma.getFighter("Jon Jones", callback(data));
//-------------------------------------------------------+

var fighter = function (query, callback) {

  //----------------------------------+
  //  JSON object for Fighter
  //----------------------------------+
  var fighter = {
    name: "",
    nickname: "",
    association: "",
    age: "",
    birthday: "",
    hometown: "",
    nationality: "",
    location: "",
    height: "",
    weight: "",
    weight_class: "",
    wins: {
      total: 0,
      knockouts: 0,
      submissions: 0,
      decisions: 0,
      others: 0
    },
    losses: {
      total: 0,
      knockouts: 0,
      submissions: 0,
      decisions: 0,
      others: 0
    },
    fights: []
  };

  //-----------------------------------------------+
  //  Query Google Search for Fighter Profiles
  //  https://github.com/PatNeedham/google-it
  //-----------------------------------------------+

  let sherdog_url = null;
  googleIt({ 'only-urls': true, query: query + ' sherdog' }).then(results => {
    for (var i = 0; i < results.length; i++) {
      if (results[i].link.indexOf('sherdog.com/fighter') > -1) {
        sherdog_url = results[i].link;
        break;
      }
    }
    if (sherdog_url) {
      sherdog.getFighter(sherdog_url, data => {
      fighter.name = data.name;
      fighter.nickname = data.nickname;
      fighter.association = data.association;
      fighter.age = data.age;
      fighter.birthday = data.birthday;
      fighter.hometown = data.locality;
      fighter.nationality = data.nationality;
      fighter.height = data.height;
      fighter.weight = data.weight;
      fighter.weight_class = data.weight_class;
      fighter.wins = data.wins;
      fighter.losses = data.losses;
      fighter.fights = data.fights;
      callback(fighter);
      });
    } else {
      fighter = null;
      callback(fighter);
    }
  }).catch(e => {
    console.error(e);
  })
};

module.exports.fighter = fighter;