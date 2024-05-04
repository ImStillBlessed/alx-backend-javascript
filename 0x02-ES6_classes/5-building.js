export default class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get() {
    return this._sqft;
  }
}
