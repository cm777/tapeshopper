var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify accepts strings, CAPS, char', function (t) {
	t.equal(fancify('Wat up'), '~*~Wat up~*~', 'should wrap the string with ~*~');
	t.equal(fancify('Wat up', true), '~*~WAT UP~*~', 'optional converts string to upper case');
	t.equal(fancify('Wat up', false, '$'), '~$~Wat up~$~', 'optional special character');
	t.end();
});
