function fail(next) {

  return function(err) {
    next(err);
  }

}

function success(next) {

  // sometimes callbacks take three args
  return function(result, third) {
    next(null, result, third);
  }

}

module.exports = {

  fail: fail,
  success: success

};
