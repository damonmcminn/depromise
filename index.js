function fail(next) {

  return function(err) {
    next(err);
  }

}

function success(next) {

  return function(result) {
    next(null, result);
  }

}

module.exports = {

  fail: fail,
  success: success

};
