import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Pie } from 'src/app/models/pie';
import { CartService } from 'src/app/services/cart.service';
import {ActivatedRoute, Router} from "@angular/router";
import {PieService} from "../../../services/pie.service";
import {ROUTER_TOKENS} from "../../../app.routes";

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
  readonly pieService: PieService = inject(PieService);

  selectPie(pie: Pie) {
    this.pieService.setSelectedPie(pie.id);
    this.router.navigate([`../${ROUTER_TOKENS.SHOP}`], {relativeTo: this.activatedRoute});
  }
}
