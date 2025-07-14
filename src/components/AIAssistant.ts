import { Tournament } from './Tournament.js';

export class AIAssistant {
    private tournament: Tournament;

    constructor(tournament: Tournament) {
        this.tournament = tournament;
    }

    public async processCommand(command: string): Promise<string> {
        const parts = command.split(' ');
        const action = parts[0].toLowerCase();

        switch (action) {
            case 'createtournament':
                const tournamentName = parts.slice(1).join(' ');
                this.tournament.name = tournamentName;
                return `Tournament "${tournamentName}" created.`;
            case 'addplayer':
                const playerName = parts.slice(1).join(' ');
                this.tournament.createPlayer(playerName);
                return `Player "${playerName}" added.`;
            case 'start':
                this.tournament.start();
                return 'Tournament started.';
            default:
                return "I'm sorry, I don't understand that command.";
        }
    }
}
