const { Client, MessageEmbed } = require("discord.js");
const { Notification } = require("electron");
const { Board, Led } = require("johnny-five");

const TOKEN = "***";

class DiscordBotArduino {
  constructor({token = TOKEN}) {
    this.token = token;
    this.client = new Client();

    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    this.client.login(token);

    this.board = new Board();
    this.board.on("ready", this.onBoardReady.bind(this));
  }

  onBoardReady() {
    
  }

  onReady() {
    console.log("I am ready!");
  }

  onMessage(message) {

    if (message.content.includes("🕊")) {
        


    }
  }
}

module.exports = { DiscordBotArduino };
