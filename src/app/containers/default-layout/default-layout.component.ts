import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(
    public auth: AuthService,
    public router: Router
  ) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
  });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  logout() {
    this.auth.logout();
  }
}
