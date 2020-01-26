'use strict';

import getServerData from './modules/getServerData';
import renderCards from './modules/renderCards';
import toggleCheckbox from './modules/toggleCheckbox';
import openCloseBasket from './modules/openCloseBasket';
import addDeleteGoods from './modules/addDeleteGoods';
import filterCards from './modules/filterCards';
import renderCatalog from './modules/renderCatalog';
 
getServerData().then((data) => {
    renderCards(data);
    toggleCheckbox();
    openCloseBasket();
    addDeleteGoods();
    filterCards();
    renderCatalog();
});
