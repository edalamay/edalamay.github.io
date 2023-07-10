// Globals
const region = 'us',
	  realm = 'stormrage',
	  guild = 'commit',
	  difficulty = 'mythic';

const raids = [
	'aberrus-the-shadowed-crucible',
	'vault-of-the-incarnates',
	'sepulcher-of-the-first-ones',
	'sanctum-of-domination',
	'castle-nathria',
	'nyalotha-the-waking-city'
];
const bosses = [
	'scalecommander-sarkareth',
	'raszageth-the-stormeater',
	'the-jailer',
	'sylvanas-windrunner',
	'sire-denathrius',
	'nzoth-the-corruptor'
];

// Endpoints
// const guildProfile = `https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${guild}&fields=raid_progression%2Craid_rankings`,
// const bossRanking = `https://raider.io/api/v1/raiding/boss-rankings?raid=${raid}&boss=${boss}&difficulty=${difficulty}&region=${region}&realm=${realm}`;

raids.forEach((raid, index) => {
	const boss = bosses[index];
	const bossRanking = `https://raider.io/api/v1/raiding/boss-rankings?raid=${raid}&boss=${boss}&difficulty=${difficulty}&region=${region}&realm=${realm}`;

	fetch(bossRanking)
	.then((response) => response.json())
	.then((data) => {
		let _data = data.bossRankings;
		_data.forEach((entry) => {
			if (entry.guild.name == 'Commit') {
				let rankElm = document.querySelector(`#${boss} .rank`),
					dateElm = document.querySelector(`#${boss} .date`),
					killDate = new Date(entry.encountersDefeated[0].firstDefeated).toLocaleDateString('en-us', {month:"long",day:"numeric",year:"numeric"});
				rankElm.innerHTML = 'US '+entry.regionRank;
				dateElm.innerHTML = killDate;
				// console.log(boss+' Kill Date: '+killDate);
			} 
		});
	});
	// console.log(raid, boss);
});



