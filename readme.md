# Commit - A Wow Raiding Guild Website

Wanted to play with some new JS ideas and concepts, and figured making a website for a WoW raiding guild I'm a part of was a fun place to start.
Created some simple branding, and then set up this site. Site includes API's from Twitch, Raider.io, and Warcraft Logs.

## Installation

Open the directory in terminal and run:

```bash
npm i
```

## Build Process
Current setup utilizes [Webpack](https://webpack.js.org/) and [Laravel-Mix](https://laravel-mix.com/), with [Browser-sync](https://www.npmjs.com/package/browser-sync) for local development.
To spin up a dev env, just run:
```bash
npm run watch
```
And to run a prod build, you can run:
```bash
npm run prod
```

## Fetch WCL API Data
I'd really like this to be automated, but I'm dumb. So locally, you can just run the following command to refresh all the WCL data:
```bash
npm run getLogs
```

## Updating WCL API for a new season
I have a couple items in place that need to be manually updated for a new season. The first is the WCL API curl command. Inside this command is a zoneID that needs to be updated. The ID exists only on WCL, but should be avaliable once the raid hits PTR. For example, in 10.2, the current raid is Amirdrassil. Here's the link from WCL with the zoneID at the end:
```https://www.warcraftlogs.com/zone/rankings/35```

In this instance, the zoneID is `35`. Grab that ID, and update **both** curl postfields. You'll also want to nuke any existing `reportData_X.json` files in `docs/js`.

Next update to make is in the `resources/js/warcraftlogs-api.js` file. Update the array of `progBosses` as well as the `activeBoss` and `activeRaid` fields. You'll also need to grab a new unix timecode for the `raidLaunchUnix` field. Generate a unix timestamp for the raid's launch data [using this handy website.](https://www.unixtimestamp.com/)

## Contributing
Send me a message on Discord, and I'll look into it!
@edalamay

## License
[MIT](https://choosealicense.com/licenses/mit/)