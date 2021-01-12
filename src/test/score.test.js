import * as scoreAPI from '../scoreSystem';
import '@babel/polyfill';

describe('It test the score API.', () => {
  test('the submit POST action works', () => {
    scoreAPI.submitScore('Ceci', 5010)
      .then(data => { expect(data).toBe('Leaderboard score created correctly.'); })
      .then(data => data).catch(() => 'Something went wrong');
  });

  test('obtain GET data', () => {
    scoreAPI.getScore()
      .then(data => { expect(data[2].user).toBe('Marco'); })
      .then(data => data).catch(() => 'Something went wrong');
  });

  test('GET data for scores', () => {
    scoreAPI.getScore()
      .then(data => { expect(data[4].user).toBe(3510); })
      .then(data => data).catch(() => 'Something went wrong');
  });
});