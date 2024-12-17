const NavigationInitiator = {
  init({ button, navigation }) {
    button.addEventListener('click', (event) => {
      this._toggleNavigation(event, navigation);
    });

    document.addEventListener('click', (event) => {
      this._closeNavigation(event, { button, navigation });
    });
  },

  _toggleNavigation(event, navigation) {
    event.stopPropagation();
    navigation.classList.toggle('navigation--active');
  },

  _closeNavigation(event, { button, navigation }) {
    event.stopPropagation();
    const isNavigationActive = navigation.classList.contains('navigation--active');
    const isNavigationClicked = event.target === navigation;
    const isMenuClicked = event.target === button;

    if (isNavigationActive && (!isNavigationClicked || isMenuClicked)) {
      navigation.classList.remove('navigation--active');
    }
  },
};

export default NavigationInitiator;
