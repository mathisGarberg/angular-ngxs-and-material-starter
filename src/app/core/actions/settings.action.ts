export class ChangeThemeAction {
    public static readonly type = '[Settings] Change theme';
    constructor(public changeTheme: string) { }
}

export class ChangeAutoNightMode {
  public static readonly type = '[Settings] Change Auto Night Mode';
  constructor(public changeTheme: string) {}
}
