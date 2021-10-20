import { TrendingDetailsComponent } from './trending-details/trending-details.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGaurdService]},
  {path: 'details/:type/:id', component: TrendingDetailsComponent, canActivate: [AuthGaurdService]},
  {path: 'about', component: AboutComponent},
  {path: 'movies', component: MoviesComponent, canActivate: [AuthGaurdService]},
  {path: 'tvshows', component: TvshowsComponent, canActivate: [AuthGaurdService]},
  {path: 'people', component: PeopleComponent},
  {path: 'networks', component: NetworkComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
