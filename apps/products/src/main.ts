import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {products} from "@nx-example/shared/product/data";

if (environment.production) {
  /**
   * FIXME: explicitly added a dependency to shared/product/data
   *        so that the nx lint check should report a violation
   *
   * ERROR: D:/dev_no_backup/nx-examples/apps/products/src/main.ts:6:1 - A project tagged with "type:app" can only
   *        depend on libs tagged with "type:feature", "type:ui"
   */
  if (products) enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
