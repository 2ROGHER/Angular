class Joke {
  public setup: string;
  public punchline: string;
  public hidden: boolean;

  constructor(setup: string, punchline: string, hidden: boolean) {
    this.setup = setup;
    this.punchline = punchline;
    this.hidden = hidden;
  }

  toggle(): void {
    this.hidden = !this.hidden;
  }

}

export default Joke;
