/*
 Navicat Premium Data Transfer

 Source Server         : sqlite-demo.db
 Source Server Type    : SQLite
 Source Server Version : 3035005
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3035005
 File Encoding         : 65001

 Date: 11/11/2022 17:47:29
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for atlist801
-- ----------------------------
DROP TABLE IF EXISTS "atlist801";
CREATE TABLE "atlist801" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "at_key" CHARACTER NOT NULL,
  "eq" CHARACTER,
  "at_param" CHARACTER,
  "guideid" integer,
  "docid" INTEGER,
  "modeid" INTEGER,
  "productid" INTEGER,
  "versionid" INTEGER,
  "autoupdate" integer,
  "userenable" integer,
  "systemenable" integer,
  "createtime" DATE,
  "ext" CHARACTER,
  "isdelete" integer
);

-- ----------------------------
-- Table structure for configbase
-- ----------------------------
DROP TABLE IF EXISTS "configbase";
CREATE TABLE "configbase" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "comport" CHARACTER
);

-- ----------------------------
-- Table structure for docentry
-- ----------------------------
DROP TABLE IF EXISTS "docentry";
CREATE TABLE "docentry" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "moduleid" INTEGER,
  "elementid" INTEGER,
  "contenttype" CHARACTER,
  "contendata" CHARACTER,
  "versionid" INTEGER,
  "createtime" DATE,
  "isdelete" integer
);

-- ----------------------------
-- Table structure for element
-- ----------------------------
DROP TABLE IF EXISTS "element";
CREATE TABLE "element" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "positionx" NUMBER,
  "positiony" NUMBER,
  "elementtype" integer,
  "elementwidth" NUMBER,
  "elementheght" NUMBER,
  "elementlevel" integer,
  "elementstyle" JSON,
  "cereatetime" DATE,
  "isdelete" integer,
  "ext" CHARACTER
);

-- ----------------------------
-- Table structure for guide
-- ----------------------------
DROP TABLE IF EXISTS "guide";
CREATE TABLE "guide" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "versionid" INTEGER,
  "positionx" NUMBER,
  "positiony" NUMBER,
  "elementid" INTEGER,
  "contendata" CHARACTER,
  "iffollowing" integer NOT NULL DEFAULT 1,
  "ifclose" integer NOT NULL DEFAULT 1,
  "ifnext" integer NOT NULL DEFAULT 1,
  "ifsaveuserconfig" integer NOT NULL DEFAULT 1,
  "ifalwaysshow" integer NOT NULL DEFAULT 1,
  "logicid" INTEGER
);

-- ----------------------------
-- Table structure for logic
-- ----------------------------
DROP TABLE IF EXISTS "logic";
CREATE TABLE "logic" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "prevtype" integer,
  "previd" INTEGER,
  "nexttype" integer,
  "nextid" INTEGER,
  "ifrepeat" integer NOT NULL DEFAULT 0,
  "cereatetime" DATE,
  "isdelete" integer
);

-- ----------------------------
-- Table structure for module
-- ----------------------------
DROP TABLE IF EXISTS "module";
CREATE TABLE "module" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "modulename" CHARACTER,
  "moduletype" CHARACTER,
  "elementid" integer,
  "guideid" integer,
  "docid" INTEGER,
  "productid" INTEGER,
  "versionid" INTEGER,
  "createtime" DATE,
  "isdelete" integer,
  "ext" CHARACTER
);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS "product";
CREATE TABLE "product" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "productname" CHARACTER,
  "producttype" CHARACTER,
  "productdesc" CHARACTER,
  "productext" integer,
  "createtime" DATE,
  "isdelete" integer,
  "versionid" INTEGER,
  "docid" INTEGER,
  "ext" CHARACTER
);

-- ----------------------------
-- Table structure for sqlite_sequence
-- ----------------------------
DROP TABLE IF EXISTS "sqlite_sequence";
CREATE TABLE "sqlite_sequence" (
  "name",
  "seq"
);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "name" CHAR(50) NOT NULL,
  "age" INT
);

-- ----------------------------
-- Table structure for version
-- ----------------------------
DROP TABLE IF EXISTS "version";
CREATE TABLE "version" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "versionname" CHARACTER,
  "versiontype" integer,
  "createtime" DATE,
  "isdelete" integer
);

-- ----------------------------
-- Auto increment value for atlist801
-- ----------------------------
UPDATE "sqlite_sequence" SET seq = 50 WHERE name = 'atlist801';

-- ----------------------------
-- Auto increment value for configbase
-- ----------------------------

-- ----------------------------
-- Auto increment value for docentry
-- ----------------------------

-- ----------------------------
-- Auto increment value for element
-- ----------------------------
UPDATE "sqlite_sequence" SET seq = 1 WHERE name = 'element';

-- ----------------------------
-- Auto increment value for guide
-- ----------------------------

-- ----------------------------
-- Auto increment value for logic
-- ----------------------------

-- ----------------------------
-- Auto increment value for module
-- ----------------------------

-- ----------------------------
-- Auto increment value for product
-- ----------------------------

-- ----------------------------
-- Auto increment value for user
-- ----------------------------
UPDATE "sqlite_sequence" SET seq = 13 WHERE name = 'user';

-- ----------------------------
-- Auto increment value for version
-- ----------------------------

PRAGMA foreign_keys = true;
