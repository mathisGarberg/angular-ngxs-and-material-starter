import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangeThemeAction } from '../actions/settings.action';
import { OverlayContainer } from '@angular/cdk/overlay';

export interface SettingsStateModel {
    selectedTheme: string;
}

@State<SettingsStateModel>({
    name: 'settings',
    defaults: {
      selectedTheme: 'hello world'
    }
})
export class SettingsState {
    constructor(private overlayContainer: OverlayContainer) {}

    @Selector()
    public static getState(state: SettingsStateModel) {
        return state;
    }

    // @Selector
    // public state getEffectiveTheme

    // @Action()

    @Action(ChangeThemeAction)
    public changeTheme({ patchState }: StateContext<SettingsStateModel>, action: ChangeThemeAction) {
        const classList = this.overlayContainer.getContainerElement()
            .classList;

        const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));

        if (toRemove.length) {
            classList.remove(...toRemove);
        }
        classList.add(action.changeTheme);

        console.log(classList);

        patchState({
            selectedTheme: action.changeTheme
        });
    }
}
