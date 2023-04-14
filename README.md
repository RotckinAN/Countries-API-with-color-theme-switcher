# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Приложение выполнено в рамках челенджа проекта [Frontend Mentor](https://www.frontendmentor.io/?ref=challenge) ***"REST Countries API with color theme switcher"***. <br/>
Готовый вариант приложения расположен [здесь](https://rotckinan.github.io/Countries-API-with-color-theme-switcher/).


### Функциональность.
Представляет собой одностраничное приложение (single page application) с возможностью смены темы (предлагается светлая и темная темы). На главной странице представлен список стран с возможностью поиска по названию, региону, столице, континенту. Также имеется возможность фильтрации по континентам.

При выборе конкретной страны открывается страница с подробностями, в которой представлена информация в более развернутом виде, в т.ч. граничащие страны, с возможностью перехода на страницу подробностей каждой страны (при нажатии на конкретную страну).

### Техническая часть.
Список стран и вся сопутствующая информация берется с [REST Countries API](https://restcountries.com/). 

Приложение выполнено с использование библиотеки React и адаптировано под 2 разрешения (десктопное и мобильное):
- ***Desktop: 1440px***;
- ***Mobile: 375px***.

Управления состоянием приложения осуществляется с помощью `Redux Toolkit`. <br/>
Взаимодействие с API выполнено с помощью HTTP-клиента `Axios`. <br/>
Все требуемые иконки взяты из библиотеки `React Icons`. <br/>
Каскадные таблицы стилей написаны с использованием расширения (препроцессора) `SASS`, что позволило использовать переменные, миксины, наследования.