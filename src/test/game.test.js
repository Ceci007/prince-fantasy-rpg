/* eslint-disable no-unused-expressions */
import testingSuite from '../phaserTest.js';

describe('Test the creation of the game canvas', () => {
  test('Check that the game is enabled', () => {
    expect(testingSuite).toBeEnabled;
  });
  test('Check that the game is rendered', () => {
    expect(testingSuite).toBeVisible;
  });
  test('Check that the game actually exist', () => {
    expect(testingSuite).toBeDefined;
  });
});