export function success(next, HAS_MULTIPLE_ARGS) {

  // sometimes callbacks take three args
  return function(result) {

    // if HAS_MULTIPLE_ARGS flag:
    // create array [error, a, b...]
    // call next with spreading array
    return HAS_MULTIPLE_ARGS ? next(...[null, ...result]) : next(null, result);

  }

}

export const HAS_MULTIPLE_ARGS = true;
