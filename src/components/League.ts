import { Team } from './Team.js';
import { Match } from './Match.js';

export class League {
    public name: string;
    public teams: Team[] = [];
    public schedule: Match[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTeam(team: Team): void {
        this.teams.push(team);
    }

    createSchedule(): void {
        // TODO: Implement schedule creation logic
    }
}
