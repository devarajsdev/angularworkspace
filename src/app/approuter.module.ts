import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InteractionComponent } from './interaction/interaction.component';
import { TwowayComponent } from './twoway/twoway.component';
import { StatueComponent } from './statue/statue.component';
import { PersonComponent } from './person/person.component';
import { RowdyComponent } from './rowdy/rowdy.component';
import { FrozenComponent } from './frozen/frozen.component';
import { DivorceComponent } from './divorce/divorce.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { NominationComponent } from './nomination/nomination.component';
const route=[
    { path:'interaction',component:InteractionComponent},
    { path:'twoway',component:TwowayComponent},
    { path:'statue',component:StatueComponent},
    { path:'person',component:PersonComponent},
    { path:'rowdy',component:RowdyComponent},
    { path:'frozen',component:FrozenComponent},
    { path:'divorce',component:DivorceComponent},
    { path:'reactiveforms',component:ReactiveformsComponent},
    { path:'nomination',component:NominationComponent},
  ]
  
@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports:[RouterModule]

})
export class AppRouterModule{
    constructor(){
        console.log('cretaed approutermodule')
    }
} 