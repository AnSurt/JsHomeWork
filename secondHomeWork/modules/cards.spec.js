// import { drawCard } from './cards';

import * as cardModule from './cards';

describe('DOM', () => {
  describe('drawCard(): ', () => {
    let card;
    let wrapper;

    beforeEach(() => {
      card = {
        title: "разобраться с изменением карточек",
        columnId: "8",
        id: 22
      };

      wrapper = document.createElement('div');
      document.body.append(wrapper);
    });

    afterEach(() => {
      wrapper.remove();
      wrapper = null;
    });

    it('should build correct DOM', () => {
      cardModule.drawCard(card, wrapper);

      const cardContainer = wrapper.querySelector('.card');
      expect(cardContainer).not.toBeNull();
      expect(cardContainer.getAttribute('data-block-id')).toEqual(card.id);
      expect(cardContainer.querySelector('div').textContent).toEqual(card.title);

      expect(cardContainer.querySelector('div')).not.toBeNull();
    });

   
  });
});