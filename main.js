const { app, BrowserWindow } = require("electron");

function initBot() {
  const { DiscordBotArduino } = require("./DiscordbotArduino");
  const Arduino1 = new DiscordBotArduino({
    token: "ODEyNDU3Mjk2NTU0MzYwODMy.YDBB0g.RdNLbCWOzkKaTQvojc1P9QuZcFQ",
    servos: {
      myWheelSeervo: 10, // servo pin
      myPyramidServo: 9,
    },
    capacitive: {
      1: () => "🕊", // send
      2: () => "😬",
      3: () => "😬",
    },
    codes: {
      "🔄": async ({ myWheelSeervo }) => {
        myWheelSeervo.sweep();
      },
      "🔄": async ({ myPyramidServo }) => {
        myPyramidServo.min();
      },
      "🔄🔄": async ({ myWheelSeervo, myPyramidServo }) => {
        myPyramidServo.max();
        myWheelSeervo.max();
      },
    },
  });

  const Arduino2 = new DiscordBotArduino({
    token: "othertoken",
    servos: {
      helloServo: 10, // servo pin
      myPyramidServo: 9,
    },
    capacitive: {
      1: () => "🛩", // send
      2: () => "😬",
    },
    codes: {
      "🔄": async ({ helloServo }) => {
        helloServo.sweep();
      },
    },
  });
}

app.whenReady().then(initBot);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
