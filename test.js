import test from 'ava';
import m from './';

test(t => {
	t.false(m());
	t.false(m(__dirname));
	t.false(m('./fixtures/bar'));
	t.true(m('./fixtures/foo'));
});
