class SampleChanges {
  public previousChanges: string;
  public nextChanges: string;
  public isChanged: boolean = false;

  constructor(
    previousChanges: string,
    nextChanges: string,
    ischanged: boolean
  ) {
    this.previousChanges = previousChanges;
    this.nextChanges = nextChanges;
    this.isChanged = ischanged;
  }

  changes(): void {
    this.isChanged = !this.isChanged;
  }
}
