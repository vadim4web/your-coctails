// services.js
import cocktailService from '~/services/cocktailService';

export default ({ app }, inject) => {
  Object.entries(cocktailService).forEach(([name, func]) => {
    inject(`${name}`, async (query) => await func(query));
  });
};
