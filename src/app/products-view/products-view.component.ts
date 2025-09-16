import {Component, inject, Input} from '@angular/core';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {PieService} from "../services/pie.service";

@Component({
  standalone: true,
  imports: [
    DetailViewComponent,
    SideMenuComponent,
  ],
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  //create a variable categoryId same as the path segment, call pieService to set the category
  @Input() set categoryId(val: string) {
    this.pieService.setSelectedCategory(val);
  }

  private readonly pieService = inject(PieService);

}
