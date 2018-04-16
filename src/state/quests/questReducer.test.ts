import questReducer from './questReducer';

describe('questReducer', () => {
    it('should return init state', () => {
        let initState = questReducer(undefined, { type: 'init' });
        expect(initState).not.toBeNull();
    });
});