const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../../cliModel/index");
const installOption = cliModel.installOption;

// Cli Install Commands
const { unstatedObj } = require("../../cliModel/install-commands");
const { unstated } = unstatedObj;

const { unstatedObjYarn } = require("../../cliModel/install-commands-yarn");
const { unstatedYarn } = unstatedObjYarn;

const prompt = inquirer.createPromptModule();

module.exports = class Unstated {
  installOrUninstall(packageInstaller) {
    prompt(installOption).then(({ decision }) => {
      if (decision === "Install") {
        this.install(packageInstaller);
      } else {
        this.uninstall(packageInstaller);
      }
    });
  }

  install(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        cmd.get(`${unstated.install}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        console.log(
          "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated"
        );
        console.log("Package: Unstated has been installed!");
        break;

      case "Yarn":
        cmd.get(`${unstatedYarn.install}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        console.log(
          "Check out more on how to get started with unstated on the following link https://github.com/jamiebuilds/unstated"
        );
        console.log("Package: Unstated has been installed!");
        break;
    }
  }

  uninstall(packageInstaller) {
    switch (packageInstaller) {
      case "NPM":
        cmd.get(`${unstated.uninstall}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        console.log("Package: Unstated has been uninstalled!");
        break;

      case "Yarn":
        cmd.get(`${unstatedYarn.uninstall}`, (err, data, stderr) => {
          err ? console.log(err) : console.log(stderr, data);
        });
        console.log("Package: Unstated has been uninstalled!");
        break;
    }
  }
};