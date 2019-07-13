const inquirer = require("inquirer");
const cmd = require("node-cmd");

// Cli Model
const cliModel = require("../cliModel");
const installOption = cliModel.installOption;

// CLI Install Commands
const { reactRouterObj } = require("../cliModel/install-commands");

const prompt = inquirer.createPromptModule();

const reactRouter = () => {
  prompt(installOption).then(({ decision }) => {
    if (decision === "Install") {
      cmd.get(`${reactRouterObj.install}`, (err, data, stderr) => {
        if (err) throw err;
        else console.log(data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been installed successfully!"
      );
    } else if (decision === "Uninstall") {
      cmd.get(`${reactRouterObj.uninstall}`, (err, data, stderr) => {
        if (err) throw err;
        else console.log(data);
      });
      console.log(
        "Packages: react-router & react-router-dom has been uninstalled successfully!"
      );
    }
  });
};

module.exports = reactRouter;