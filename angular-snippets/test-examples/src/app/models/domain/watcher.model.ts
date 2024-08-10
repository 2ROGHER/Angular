class Timer {
  public seconds: number;
  public minutes: number;
  public hours: number;
  public intervalId: any;

  constructor(seconds: number, minutes: number, hours: number) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }

  start(): any {
    this.intervalId = setInterval(() => {
      this.seconds++;
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes == 60) {
          this.minutes = 0;
          this.hours++;
        }
      }
    }, 1000);
  }

  reset(): void {
    // TODO: method to reset the timer
    clearInterval(this.intervalId);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

}

export default Timer;
