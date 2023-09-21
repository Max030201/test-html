window.addEventListener('DOMContentLoaded', function() {
  const target_date = new Date().getTime() + (1000 * 3600 * 5);
  let hours, minutes, seconds;
  let countdown = document.getElementById("timer-tiles");
  let numberOld = 10;
  const number = document.getElementById("order-description-rating-number");
  const ratingItemsList = document.querySelectorAll('.rating-area__stars');
  const ratingItemsArray = Array.prototype.slice.call(ratingItemsList)

  number.textContent = `(${numberOld})`;

  getCountdown();

  setInterval(function () {
    getCountdown();
  }, 1000);

  function getCountdown() {
    let current_date = new Date().getTime();
    let seconds_left = (target_date - current_date) / 1000;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    countdown.innerHTML = `${hours}:${minutes}:${seconds}`;
  };

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  };

  $('.order-center-bottom__item-button').click(function() {
    $('.order-center-bottom__item-button').removeClass('img-active');
    $(this).addClass('img-active');
  });

  document.querySelectorAll('.order-center-bottom__item-button').forEach(function(orderCenterBottomItemImg) {
    orderCenterBottomItemImg.addEventListener('click', function(event, el) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.order-center-top__img').forEach(function(orderCenterTopImg) {
        orderCenterTopImg.classList.remove('order-center-top__img-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('order-center-top__img-active')
    });
  });

  ratingItemsArray.forEach(item => {
    item.addEventListener('click', () => {
      numberOld++;
      number.textContent = `(${numberOld})`;
      const {itemValue} = item.dataset;// почва для бека
      item.parentNode.dataset.totalValue = item.dataset.itemValue;
    });
  });

  const leftSelectSelect = document.querySelector('.left-select');
  const leftSelectChoices = new Choices(leftSelectSelect, {
    shouldSort: false,
    searchEnabled: false,
    resetScrollPosition: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'left-select-choices',
      containerInner: 'left-select-choices__inner',
      input: 'left-select-choices__input',
      inputCloned: 'left-select-choices__input--cloned',
      list: 'left-select-choices__list',
      listItems: 'left-select-choices__list--multiple',
      listSingle: 'left-select-choices__list--single',
      listDropdown: 'left-select-choices__list--dropdown',
      item: 'left-select-choices__item',
      itemSelectable: 'left-select-choices__item--selectable',
      itemDisabled: 'left-select-choices__item--disabled',
      itemChoice: 'left-select-choices__item--choice',
      placeholder: 'left-select-choices__placeholder',
      group: 'left-select-choices__group',
      groupHeading: 'left-select-choices__heading',
      button: 'left-select-choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
  });

  const rightSelectSelect = document.querySelector('.right-select');
  const rightSelectChoices = new Choices(rightSelectSelect, {
    shouldSort: false,
    searchEnabled: false,
    resetScrollPosition: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'right-select-choices',
      containerInner: 'right-select-choices__inner',
      input: 'right-select-choices__input',
      inputCloned: 'right-select-choices__input--cloned',
      list: 'right-select-choices__list',
      listItems: 'right-select-choices__list--multiple',
      listSingle: 'right-select-choices__list--single',
      listDropdown: 'right-select-choices__list--dropdown',
      item: 'right-select-choices__item',
      itemSelectable: 'right-select-choices__item--selectable',
      itemDisabled: 'right-select-choices__item--disabled',
      itemChoice: 'right-select-choices__item--choice',
      placeholder: 'right-select-choices__placeholder',
      group: 'right-select-choices__group',
      groupHeading: 'right-select-choices__heading',
      button: 'right-select-choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
  });
});
