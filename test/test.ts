import { Manager } from '../dist/components/Manager.js';
import { strict as assert } from 'assert';

const manager = new Manager();
const tournament = manager.createTournament('Test Tournament');

assert.deepStrictEqual(manager.getTournament(tournament.id), tournament, 'getTournament should return the correct tournament');

assert.throws(
    () => manager.getTournament('invalid-id'),
    new Error('No tournament with ID invalid-id exists'),
    'getTournament should throw an error for an invalid ID'
);
