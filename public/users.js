/*
 Navicat Premium Data Transfer

 Source Server         : heroku_mern_personal
 Source Server Type    : MongoDB
 Source Server Version : 50008
 Source Host           : localhost:27017
 Source Schema         : db_portfolio

 Target Server Type    : MongoDB
 Target Server Version : 50008
 File Encoding         : 65001

 Date: 28/04/2022 12:37:37
*/


// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("db_portfolio");
db.getCollection("users").insert([ {
    _id: ObjectId("619352ada4c164cd82588107"),
    id: "$2a$12$ZQyk68ADIkOYPYYitjUDiupHmWJTS2rZ0xHa3UdU0acw9el1A4pBC",
    name: "Utif Milkedori",
    email: "utifmd@gmail.com",
    password: "$2a$12$qgZpsP0pY9UBgJ7Q9yJ/N.3K7YsY2ewgyczjHo7X9/3Y.cXjQINtq",
    active: true,
    invalidAttempt: NumberInt("13"),
    lastSignedIn: ISODate("2021-11-16T06:30:31.013Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();
