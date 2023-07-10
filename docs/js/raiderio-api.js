/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/raiderio-api.js ***!
  \**************************************/
// Globals
var region = 'us',
  realm = 'stormrage',
  guild = 'commit',
  difficulty = 'mythic';
var raids = ['aberrus-the-shadowed-crucible', 'vault-of-the-incarnates', 'sepulcher-of-the-first-ones', 'sanctum-of-domination', 'castle-nathria', 'nyalotha-the-waking-city'];
var bosses = ['scalecommander-sarkareth', 'raszageth-the-stormeater', 'the-jailer', 'sylvanas-windrunner', 'sire-denathrius', 'nzoth-the-corruptor'];

// Endpoints
// const guildProfile = `https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${guild}&fields=raid_progression%2Craid_rankings`,
// const bossRanking = `https://raider.io/api/v1/raiding/boss-rankings?raid=${raid}&boss=${boss}&difficulty=${difficulty}&region=${region}&realm=${realm}`;

raids.forEach(function (raid, index) {
  var boss = bosses[index];
  var bossRanking = "https://raider.io/api/v1/raiding/boss-rankings?raid=".concat(raid, "&boss=").concat(boss, "&difficulty=").concat(difficulty, "&region=").concat(region, "&realm=").concat(realm);
  fetch(bossRanking).then(function (response) {
    return response.json();
  }).then(function (data) {
    var _data = data.bossRankings;
    _data.forEach(function (entry) {
      if (entry.guild.name == 'Commit') {
        var rankElm = document.querySelector("#".concat(boss, " .rank")),
          dateElm = document.querySelector("#".concat(boss, " .date")),
          killDate = new Date(entry.encountersDefeated[0].firstDefeated).toLocaleDateString('en-us', {
            month: "long",
            day: "numeric",
            year: "numeric"
          });
        rankElm.innerHTML = 'US ' + entry.regionRank;
        dateElm.innerHTML = killDate;
        // console.log(boss+' Kill Date: '+killDate);
      }
    });
  });
  // console.log(raid, boss);
});
/******/ })()
;