import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EliquidcalcLiquidModule } from './liquid/liquid.module';
import { EliquidcalcBrandModule } from './brand/brand.module';
import { EliquidcalcDosageModule } from './dosage/dosage.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EliquidcalcLiquidModule,
        EliquidcalcBrandModule,
        EliquidcalcDosageModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EliquidcalcEntityModule {}
