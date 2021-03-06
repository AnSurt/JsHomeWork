

import * as cardModule from './cards';

describe('card', () => {
  describe('drawCard(): ', () => {
    let card;
    let wrapper;

    beforeEach(() => {
      card = {
        title: "разобраться с изменением карточек",
        columnId: "8",
        id: "22"
      };

      wrapper = document.createElement('div');
      document.body.append(wrapper);
    });

    afterEach(() => {
      wrapper.remove();
      wrapper = null;
    });

    it('should build card', () => {
      cardModule.drawCard(card, wrapper);

      const cardContainer = wrapper.querySelector('.card');
      expect(cardContainer).not.toBeNull();
      expect(cardContainer.getAttribute('data-block-id')).toEqual(String(card.id));
      expect(cardContainer.querySelector('div')).not.toBeNull();
    });


  });
});