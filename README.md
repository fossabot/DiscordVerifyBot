[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Foneabxv3all%2FDiscordVerifyBot.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Foneabxv3all%2FDiscordVerifyBot?ref=badge_shield)


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a bot token [discord developers](https://discord.com/developers)
2. Clone the repo
   ```sh
   git clone https://github.com/oneabxv3all/DiscordVerifyBot.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your  token & channel id & prefix in `main.js`
 
   ```js
        4      const prefix = "."
                               ^
        22     if (command == 'verify' && message.channel.id === 'channel id'){
                                                                      ^^^^
        48     client.login('your token');
                                ^^^^^
   ```





### Built With
* [node.js](https://nodejs.dev/)
* [discord.js](https://discord.js.org/)
* [node-fetch](https://www.npmjs.com/package/node-fetch)




### developer team
* [oneabxv3all](https://github.com/oneabxv3all)



## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Foneabxv3all%2FDiscordVerifyBot.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Foneabxv3all%2FDiscordVerifyBot?ref=badge_large)