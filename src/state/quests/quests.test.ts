import { Quest } from '../AppState';

const questsJson = require('./quests.json');

describe('quests', () => {
    it('quests should be valid', () => {
        let quests: Quest[] = questsJson;
        expect(quests.length).toBeGreaterThan(0);

        quests.forEach(q => {
            expect(q.name).not.toBeNull();
            expect(q.name.length).toBeGreaterThan(0);
            expect(q.tasks.length).toBeGreaterThan(0);
            q.tasks.forEach(t => {
                expect(t.name).not.toBeNull();
                expect(t.name.length).toBeGreaterThan(0);
                expect(t.amount).toBeGreaterThan(0);
            });
            q.goodies.forEach(g => {
                expect(g.amount).toBeGreaterThan(0);
                if (g.type === 'stock') {
                    expect(g.stockName).not.toBeFalsy();
                    expect(g.stockName!.length).toBeGreaterThan(0);
                }
            });
        });
    });
});
