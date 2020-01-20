import { State } from '@ngxs/store';

export interface AboutStateModel {
  newAboutForm: any;
}

@State<AboutStateModel>({
  name: 'about',
  defaults: {
    newAboutForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class AboutState {

  constructor() {}



}
