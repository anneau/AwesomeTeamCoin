import assertRevert from './helpers/assertRevert';
const AwesomeCoin = artifacts.require('AwesomeCoin');

contract('AwesomeCoin', accounts => {
  let instance;

  beforeEach(async function () {
    instance = await AwesomeCoin.new(100, { from: accounts[0] });
  });

  it('should return the correct totalSupply after construction', async function () {
    let totalSupply = await instance.totalSupply();
    assert.equal(totalSupply, 100);
  });

  it('should return correct balances after transfer', async function () {
    await instance.transfer(accounts[1], 100);

    let firstAccountBalance = await instance.balanceOf(accounts[0]);
    assert.equal(firstAccountBalance, 0);

    let secondAccountBalance = await instance.balanceOf(accounts[1]);
    assert.equal(secondAccountBalance, 100);
  });

  it('should throw an error when trying to transfer more than balance', async function () {
    await assertRevert(instance.transfer(accounts[1], 101));
  });

  it('should throw an error when trying to transfer to 0x0', async function () {
    await assertRevert(instance.transfer(0x0, 100));
  });
});
