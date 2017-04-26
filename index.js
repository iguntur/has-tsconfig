'use strict';
module.exports = fp => require('fs').existsSync(
	require('path').resolve(fp || process.cwd(), 'tsconfig.json')
);
