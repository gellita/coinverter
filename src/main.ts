import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/module/module.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
