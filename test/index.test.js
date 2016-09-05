import chai, { expect } from 'chai';
import { generateText, __RewireAPI__ as Rewire } from '../src/mockme';
import { doIt } from '../src/index.js';

describe('index', () => {
  it('should do anything', () => {
    expect(generateText()).to.equal('random');
    Rewire.__set__('variable', 42);
    expect(Rewire).not.to.be.undefined;
    expect(generateText()).to.equal(42);
    Rewire.__reset__('variable');
    expect(generateText()).to.equal('random');
  });
});

