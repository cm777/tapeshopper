var test = require('tape');
var iAmDog = require(process.argv[2]);
var sinon = require('sinon');

test('iAmDog', function (t) {

	var spy = sinon.spy(console, 'log');

	iAmDog();

	// t.plan(3);
    t.ok(spy.withArgs('Woof!').calledOnce);
    t.ok(spy.firstCall.calledWith('Woof!'));
    t.notOk(spy.withArgs('!').calledOnce);
    spy.restore();
	t.end();
});
