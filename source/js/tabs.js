const tabs = document.querySelector(".info__tabs-list");
const tabContent = document.querySelectorAll(".info__country-item");
const tabLinks = document.querySelectorAll(".info__tab-link");

tabs.addEventListener("click", (evt)=> {
  evt.preventDefault();

  const id = evt.target.dataset.id;
  if(id) {
    tabLinks.forEach(tabLink => {
      tabLink.classList.remove("info__tab-link--current");
    });
    evt.target.classList.add("info__tab-link--current");

    tabContent.forEach(content => {
      content.classList.remove("info__country-item--current");
    });
    const element = document.getElementById(id);
    element.classList.add("info__country-item--current");
  }
});

const cardsList = document.querySelector(".places__list");
const countryCards = document.querySelectorAll(".places__ancor");

countryCards.forEach(card => {
  card.addEventListener("click", ()=> {
    const id = card.dataset.id;

    tabLinks.forEach(tabLink => {
      tabLink.classList.remove("info__tab-link--current");

      if(tabLink.dataset.id === id) {
        tabLink.classList.add("info__tab-link--current");
      }
    });

    tabContent.forEach(content => {
      content.classList.remove("info__country-item--current");
    });

    const element = document.getElementById(id);
    element.classList.add("info__country-item--current");
  });
});
