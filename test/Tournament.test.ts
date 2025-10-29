import { Tournament } from '../src/components/Tournament';

describe('Tournament', () => {
  it('should deep merge settings', () => {
    const tournament = new Tournament('test', 'Test Tournament');
    tournament.settings = {
      scoring: {
        win: 3,
      },
    };
    expect(tournament.scoring.win).toBe(3);
    expect(tournament.scoring.loss).toBe(0);
  });
});
