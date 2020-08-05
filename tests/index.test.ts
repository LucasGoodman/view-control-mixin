import { viewControlMixin, viewControlGetter } from '../src/index';

test('viewControlMixin is function', () => {
    expect(typeof viewControlMixin).toBe('function');
});

test('viewControlGetter is function', () => {
    expect(typeof viewControlGetter).toBe('function');
});
