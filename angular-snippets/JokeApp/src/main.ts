import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * We use the 'platform-browser-dynamic' module to can run the application Angular in the browser.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
  .finally(() => console.log('JokeApp works successfully!'));
