const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);
describe('App',function()
{
  describe('sayHello()',function()
{
  it('app should return hello',function()
{
  //let result = app.sayHello();
assert.equal(sayHelloResult,'hello');
});
it('sayHello should return type string',function()
{
  //let result = app.sayHello();
  assert.typeof(sayHelloResult,'string');
});
});
describe('addNumbers()',function()
{
  it('AddNumbers shoud be above 5',function()
  {
    //let result = app.addNumbers(6,6);
    assert.isAbove(addNumbersResult,5);
  });
  it('addNumbers should return type number',function()
  {
    //let result = app.addNumbers(5,5);
    assert.typeof(addNumbersResult,'number');
  });
});

});
