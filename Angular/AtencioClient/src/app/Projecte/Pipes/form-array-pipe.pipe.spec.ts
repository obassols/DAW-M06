import { AsFormArrayPipe } from './form-array-pipe.pipe';

describe('FormArrayPipePipe', () => {
  it('create an instance', () => {
    const pipe = new AsFormArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
