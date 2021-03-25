import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TiermakerComponent } from './tiermaker/tiermaker.component';
import { TierSelectorComponent } from './tiermaker/tier-selector/tier-selector.component';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { PoolComponent } from './tiermaker/pool/pool.component';

@NgModule({
  declarations: [AppComponent, TiermakerComponent, TierSelectorComponent, PoolComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 8080] : undefined,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
