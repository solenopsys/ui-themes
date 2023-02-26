import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeclaredService} from "@solenopsys/ui-utils";

@NgModule({
  imports: [CommonModule],
})
export class UIColorsModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/ui-themes", [])
  }
}
