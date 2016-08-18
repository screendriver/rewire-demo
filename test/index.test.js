import chai, { expect } from 'chai';
import { generateText, __RewireAPI__ as Rewire } from '../src/mockme';
import { doIt } from '../src/index.js';

describe('index', () => {
  it('should do anything', () => {
    expect(Rewire).not.to.be.undefined;
  });
});
