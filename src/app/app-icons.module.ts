import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class AppIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
}
