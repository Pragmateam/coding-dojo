* **Format:** Mob Programming
* **Kata:** From Callback to Promise
* **Where:** [TabCorp](https://www.tabcorp.com.au/)
* **When:** 19/04/2017 & 26/04/2017

<img src="https://cloud.githubusercontent.com/assets/2061821/25463486/ff38db80-2b39-11e7-986e-61b4f9dc064b.png" width="520px" />

<img src="https://cloud.githubusercontent.com/assets/2061821/25463491/0463ac7a-2b3a-11e7-8f92-a665753fb46a.png" width="520px" />

## Kata: From Callback to Promise

### Description:

Refactoring real code from TabCorp changing Callbacks to Promise using [Mocha](https://mochajs.org/), [Node.js](https://nodejs.org/en/) and [CoffeeScript](http://coffeescript.org/).

### Lessons learned:

1. Testing negative scenarios, you need to reject the promise inside `.then` and writing your expectation inside `.catch`:

```coffeescript
it 'returns an error', ->
  myObject.myPromise(parameter)
    .then -> Promise.reject 'This is not happyily ever after :('
    .catch (err) ->
      err.should.be.exactly someError
```

Before using Callback:

```coffeescript
it 'returns an error', (done) ->
  myObject.myFunction parameter, (err) ->
    err.should.be.exactly someError
    done()
```

and we don't need to use `done` since Mocha knows how to handle a Promise. If you are not using CoffeeScript, you need to `return` the promise - which CoffeeScript does for us by default.

2. For positive scenarios, you just need to use `.then`:

```coffeescript
it 'does something', ->
  myObject.myPromise(parameter).then ->
    sinon.assert.notCalled someObject.action
```

Before using Callback:

```coffeescript
it 'does something', (done) ->
  myObject.myFunction parameter, (err) ->
    should.not.exist err
    sinon.assert.notCalled someObject.action
    done()
```

again, we don't need to use `done` and we don't need to write an expectation for `err` object since inside `.then` we don't have an error.

3. In the implementation side, we can try always to write our promises in a way that it tells us an story aiming to have one-liners; extract functions and give them descriptive names:

```coffeescript
exports.myPromise = (user) ->
  validateUser(user)
    .then -> registerUser user
    .then -> sendEmailToUser user
    .catch notifyErrors
```

Using callback:
```coffeescript
exports.myFunction = (user) ->
  validateUser user, (err) ->
    notifyErrors err if err

    registerUser user, (err) ->
      notifyErrors err if err

      sendEmailToUser user, (err) ->
        notifyErrors err if err
```

if possible, we can chain our promises avoiding having multiple levels of indentation.
