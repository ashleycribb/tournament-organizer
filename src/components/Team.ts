import { Player } from './Player.js';

export class Team {
    public name: string;
    public players: Player[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }
}
