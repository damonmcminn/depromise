import * as depromise from '../src';

describe('depromise#success', () => {

  it('should return a function', () => {

    expect(depromise.success()).to.be.a.function();

  });

  it('returned function should callback (null, result)', () => {

    function callback(err, result) {
      expect(err).to.be.null();
      expect(result).to.be.true();
    }

    let success = depromise.success(callback);

    success(true);

  });

  it('returned function should callback (null, second, third, ...) if provided HAS_MULTIPLE_ARGS flag', () => {

    function callback(err, second, third, fourth, fifth) {
      expect(err).to.be.null();
      expect(second).to.be.a.string('second');
      expect(third).to.be.a.string('third');
      expect(fifth).to.exist();
    }

    let success = depromise.success(callback, depromise.HAS_MULTIPLE_ARGS);

    success(['second', 'third', 'fourth', 'fifth']);

  });

});
