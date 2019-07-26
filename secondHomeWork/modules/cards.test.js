import { drawCard } from 'cards.js';
import * as cardModule from 'cards.js';

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
      drawCard(card, wrapper);

      const cardContainer = wrapper.querySelector('.card');
      expect(cardContainer).not.toBeNull();
      expect(cardContainer.getAttribute('data-card-id')).toEqual(String(card.id));
      expect(cardContainer.querySelector('p').textContent).toEqual(card.title);

      expect(cardContainer.querySelector('div')).not.toBeNull();
    });

    it('should call removeCard() function on remove button click', () => {
      drawCard(card, wrapper);

      const spy = jest.spyOn(cardModule, 'deleteCard');

      wrapper.querySelector('div').click();

      expect(spy).toHaveBeenCalledWith(card.id);
    });
  });
});