const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// beyondExpect роутер
const {
  getBeyondExpectData,
  postBeyondExpectData
} = require("../controllers/beyondExpectDataController")

router.route("/beyondExpect").get(getBeyondExpectData).post(postBeyondExpectData);

module.exports = router;

// registration роутер
const {
  getRegistrationData,
  postRegistrationData
} = require("../controllers/registrationDataController")

router.route("/registration").get(getRegistrationData).post(postRegistrationData);

//blog роутер
const {
  getBlogData,
  postBlogData
} = require("../controllers/blogDataController")

router.route("/blog").get(getBlogData).post(postBlogData);

//footer роутер
const {
  getFooterData,
  postFooterData
} = require("../controllers/footerDataController")

router.route("/footer").get(getFooterData).post(postFooterData);
