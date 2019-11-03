import { AppOrder } from './app-order';

describe('app-order', () => {
  it('builds', () => {
    expect(new AppOrder()).toBeTruthy();
  });

  describe('normalization', () => {
    it('returns a blank string if the name is undefined', () => {
      const component = new AppOrder();
      expect(component.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', () => {
      const component = new AppOrder();
      expect(component.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', () => {
      const component = new AppOrder();
      expect(component.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', () => {
      const component = new AppOrder();
      expect(component.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', () => {
      const component = new AppOrder();
      expect(component.normalize('q')).toEqual('Q');
    });
  });
});
