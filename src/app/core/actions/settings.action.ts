export class ChangeThemeAction {
    public static readonly type = '[Settings] Change theme';
    constructor(public changeTheme: string) { }
}
