var expect = require("chai").expect;
var index = require("../index");
var assert = require("assert");
var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:3001");

var request = require("request");

describe("Cancel orders status by owner", function () {
    it("Cancel orders status by owner", function (done) {
        server
            .post("/orders/manage-orders")
            .send({ orderId: 2 })
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});

describe("Restaurants by item name", function () {
    it("Restaurants by item name", function (done) {
        server
            .post("/restaurants/restaurantsbyItemName")
            .send({ itemName: "chicken" })
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});

describe("Delete item by owner", function () {
    it("Delete item by owner", function (done) {
        server
            .post("/restaurants/deleteitem")
            .send({ orderId: 2 })
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});

describe("View item by owner", function () {
    it("View item by owner", function (done) {
        server
            .post("/restaurants/viewitem")
            .send({ orderId: 2 })
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});

describe("Manage orders by owner", function () {
    it("Manage orders by owner", function (done) {
        server
            .post("/orders/manage-orders")
            .send({ orderStatus: "preparing", orderId: 2 })
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});