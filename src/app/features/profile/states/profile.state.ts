import { State, Action, Selector, StateContext, Store } from '@ngxs/store';

export interface ProfileStateModel {
  details: any;
}

@State<ProfileStateModel>({
  name: 'form',
  defaults: {
    details: {
      model: [],
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class ProfileState {
  constructor(private store: Store) {}

  @Selector()
  static details(state: any) {
    return state.details;
  }
  @Selector()
  static text(state: any) {
    return state.details.model.text;
  }
}
