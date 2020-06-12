import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { NewItemComponent } from "./new-item/new-item.component";
import { EditItemComponent } from "./edit-item/edit-item.component";
import { DeleteItemComponent } from "./delete-item/delete-item.component";
import { ItemsComponent } from "./items/items.component";
import { ItemsDetailsComponent } from "./items-details/items-details.component";



const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "new-item",
    component: NewItemComponent,
    data: { title: 'Add new computer part' }
  },
  {
    path: "edit-item",
    component: EditItemComponent,
    data: { title: 'Edit computer part' }
  },
  {
    path: "delete-item",
    component: DeleteItemComponent,
    data: { title: 'Delete computer part' }
  },
  {
    path: "items",
    component: ItemsComponent,
    data: { title: 'List of all computer parts' }
  },
  {
    path: "items-details/:id",
    component: ItemsDetailsComponent,
    data: { title: 'Detailed view of computer part' }
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
