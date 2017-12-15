var assert = require('assert')

describe('Array', function(){
	
	describe('#indeOf()', function(){
		it('Return -1 if element can not be searched', function(){
			assert.equal(-1,[1,2,3].indexOf(0))
		})
	})
})
