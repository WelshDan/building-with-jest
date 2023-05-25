const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const { describe } = require('yargs');
const { game } = require("../game");

moduleNameMapper: {
    // 'absolute-path': 'relative-path'
    '../game'; '/tests/games.test.js/',
},

/**
 * @jest-environment jsdom
 */
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        exportAllDeclaration("score" in game).toBe(true);
    });
});