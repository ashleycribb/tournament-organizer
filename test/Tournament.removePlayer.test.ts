import { Tournament } from '../src/components/Tournament';

describe('Tournament.removePlayer', () => {
    it('should remove a player from a swiss tournament', () => {
        const tournament = new Tournament('test', 'Test Tournament');
        tournament.settings = {
            stageOne: {
                format: 'swiss',
                rounds: 3,
            },
        };
        const player1 = tournament.createPlayer('Player 1');
        const player2 = tournament.createPlayer('Player 2');
        const player3 = tournament.createPlayer('Player 3');
        const player4 = tournament.createPlayer('Player 4');
        tournament.start();
        tournament.removePlayer(player1.id);
        expect(tournament.players.find(p => p.id === player1.id).active).toBe(false);
    });
});
