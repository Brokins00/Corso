import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { UsersComponent } from './users/users.component';
import { AdminGuard } from 'src/app/guard/admin.guard';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'account', component:AccountComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
