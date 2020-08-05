import { hello } from '../src/index';

test('hello is function', () => {
    expect(typeof hello).toBe('function');
});
