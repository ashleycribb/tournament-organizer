import { Manager } from '../src/components/Manager';

describe('Manager', () => {
  it('should create a tournament and get it', () => {
    const manager = new Manager();
    const tournament = manager.createTournament('Test Tournament');
    expect(manager.getTournament(tournament.id)).toBe(tournament);
  });

  it('should throw an error when getting a non-existent tournament', () => {
    const manager = new Manager();
    expect(() => manager.getTournament('invalid-id')).toThrow(
      'No tournament with ID invalid-id exists'
    );
  });

  it('should reload a tournament with the correct settings', () => {
    const manager = new Manager();
    const tournament = manager.createTournament('Test Tournament');
    tournament.settings = {
      status: 'complete',
      scoring: {
        win: 3,
      },
    };
    const reloadedTournament = manager.reloadTournament(tournament);
    expect(reloadedTournament.status).toBe('complete');
    expect(reloadedTournament.scoring.win).toBe(3);
    expect(reloadedTournament.scoring.loss).toBe(0);
  });
});
