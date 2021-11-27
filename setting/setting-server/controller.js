const fsmodules = require("./modules/fsmodules");
const constant = require("./modules/constant");

exports.getConfig = function (req, res) {
  const configJSON = fsmodules.getConfig();
  res.json({
    message: "[get] api/config - Success",
    data: configJSON,
  });
};

exports.setConfig = function (req, res) {
  const reqData = req.body;
  fsmodules.updateConfig(reqData);
  res.send({
    message: "[post] api/config - Success",
  });
};

// function setMarkdown(req, res) {}

exports.setImg = function (req, res) {
  res.send({
    message: "[post] api/uploadImg - Success",
  });
};

// reset
exports.reset = function (req, res) {
  const reqData = req.body;
  fsmodules.reset(reqData);
  res.send({
    message: "[post] api/reset - Success",
  });
};

exports.setNavbarItems = function (req, res) {
  const reqData = req.body; //item lists
  // fsmodules.updateConfigbyKey(reqData, constant.NAVBAR);
  fsmodules.createSidebarName(reqData);
  res.send({
    message: "[post] api/navbar/items - Success",
  });
};

// feature
exports.getFeature = function (req, res) {
  const featureJSON = fsmodules.getConfigbyKey(constant.FEATURE);
  res.json({
    message: "[get] api/feature - Success",
    data: featureJSON,
  });
};

exports.setNavbar = function (req, res) {
  const reqData = req.body;
  fsmodules.updateConfigbyKey(reqData, constant.NAVBAR);
  res.send({
    message: "[post] api/navbar - Success",
  });
};

exports.getNavbar = function (req, res) {
  const navbarJSON = fsmodules.getConfigbyKey(constant.NAVBAR);
  res.json({
    message: "[get] api/navbar - Success",
    data: navbarJSON,
  });
};

exports.setHeader = function (req, res) {
  const reqData = req.body;
  fsmodules.updateConfig(reqData, constant.HEADER);
  res.send({
    message: "[post] api/header - Success",
  });
};

exports.getHeader = function (req, res) {
  const headerJSON = fsmodules.getConfigbyKey(constant.HEADER);
  res.json({
    message: "[get] api/header - Success",
    data: headerJSON,
  });
};
