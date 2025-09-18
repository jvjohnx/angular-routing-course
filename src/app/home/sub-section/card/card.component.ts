import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTER_TOKENS } from 'src/app/app.routes';
import { Pie } from 'src/app/models/pie';
import { CartService } from 'src/app/services/cart.service';
import { PieService } from 'src/app/services/pie.service';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pie!: Pie;
  readonly cartService = inject(CartService);
  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly pieService = inject(PieService);

  selectPie(pie: Pie) {
    // removed setting pieCategory directly into the pieService from here and use 2nd arg to the routerLink
    // activatedComponent of ship/categoryId is ProductsViewComponent, which handles setting categoryId in pieService
    this.router.navigate([`../${ROUTER_TOKENS.SHOP}`, pie.category], {
      relativeTo: this.activatedRoute,
      queryParams: {productId: pie.id},
      queryParamsHandling: 'merge'
    });
  }
}
