import { render } from '@stencil/core/testing';
import { AMRating } from './am-rating';

describe('am-rating', () => {
  it('should build', () => {
    expect(new AMRating()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;

    beforeEach(async () => {
      element = await render({
        components: [AMRating],
        html: '<am-rating></am-rating>'
      });
    });
  });
});