import { types } from 'mobx-state-tree';
import { resetAxiosAuth, resetAxiosOpen } from '../../utils/axios';

export const Language = types
  .model('Language', {
    locale: types.optional(types.string, '')
  })
  .actions(self => ({
    setLocale(code) {
      self.locale = code;

      resetAxiosOpen();
      resetAxiosAuth();
    }
  }));
