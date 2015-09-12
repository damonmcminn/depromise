### Depromise
It hurts when callbacks executed inside promises throw errors. To avoid the hurt, use a Promise library such as [bluebird](https://github.com/petkaantonov/bluebird) that provides a `.done` method.

`depromise` provides a helper function `success` that takes a callback function of any arity and returns a function that will call the callback with the proper arguments.

### Usage
```javascript
var depromise = require('depromise');
```

#### The usual callback pattern
```javascript
function fnWithCallback(data, next) {

  var onFailure = next;
  var onSuccess = depromise.success(next);

  promisedFunction(data)
    .then(function(result) {

      // do something with result
      return result

    })
    .done(onFailure, onSuccess)

}

fnWithCallback('foo', function(err, result) {

  // err === null
  // result === 'foo'

});
```

#### Callbacks with multiple arguments
Call `depromise.success` with the optional HAS_MULTIPLE_ARGS flag (`true`) and return an array containing the arguments for the callback.
```javascript

function fnWithCallback(data, next) {

  var onFailure = next;
  var onSuccess = depromise.success(next, depromise.HAS_MULTIPLE_ARGS);

  promisedFunction(data)
    .then(function(result) {

      // do something with result
      return [result, 'bar'];

    })
    .done(onFailure, onSuccess)

}

fnWithCallback('foo', function(err, foo, bar) {

  // err === null
  // foo === 'foo'
  // bar === 'bar'

});
```
