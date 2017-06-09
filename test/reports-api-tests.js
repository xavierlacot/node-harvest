'use strict';

const assert = require('assert');
const common = require('./common');

const harvest = common.harvest;

describe('The Reports API', function() {
  describe('Get all time entries logged to a project for a given timeframe', function() {
    it('should implement the timeEntriesByProject method', function() {
      assert.equal(typeof harvest.reports.timeEntriesByProject, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.reports.timeEntriesByProject(1, {}, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
  describe('Get all time entries logged by a user for a given timeframe', function() {
    it('should implement the timeEntriesByCurrentUser method', function() {
      assert.equal(typeof harvest.reports.timeEntriesByUser, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.reports.timeEntriesByUser(1, {}, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
  describe('Get all expenses entries to a project for a given timeframe', function() {
    it('should implement the expensesByProject method', function() {
      assert.equal(typeof harvest.reports.expensesByProject, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.reports.expensesByProject(1, {}, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
  describe('Get all expense entries logged by a user for a given timeframe', function() {
    it('should implement the expensesByUser method', function() {
      assert.equal(typeof harvest.reports.expensesByUser, 'function');
    });
    it('should should return an error when valid ids', function() {
      harvest.reports.expensesByUser(1, {}, function(err, res, entries) {
        assert(typeof err.message === 'string');
      });
    });
  });
});
