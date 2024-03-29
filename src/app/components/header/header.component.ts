import { Component } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // constructor(private _StaticProductsServices: StaticProductsService){}

}
