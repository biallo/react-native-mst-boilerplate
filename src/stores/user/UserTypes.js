 import { types } from 'mobx-state-tree';

export const ActivitiesType = types
  .model('ActivitiesType', {
    id: types.maybeNull(types.integer),
    actionType: types.maybeNull(types.integer),
    location: types.maybeNull(types.string),
    ip: types.maybeNull(types.string),
    createdTime: types.maybeNull(types.string)
  });
