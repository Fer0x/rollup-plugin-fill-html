import getBaseDir from '../src/getBaseDir';

describe('getBaseDir', () => {
  it('should use first dir when there are no subdirectories', () => {
    expect(getBaseDir('./dist/bundle.js')).toBe('./dist');
  });

  it('should find correct base dir for subdirectories', () => {
    expect(getBaseDir('./dist/some/path/bundle.js')).toBe('./dist/some/path');
  });
});
