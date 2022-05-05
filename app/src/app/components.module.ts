import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [IonicModule, CommonModule],
    exports: [
        HeaderComponent
    ]
  })
  export class ComponentsModule { }
  