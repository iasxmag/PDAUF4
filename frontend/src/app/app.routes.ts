import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { ArbitrosPageComponent } from './features/arbitros/arbitros-page/arbitros-page.component';
import { ClasificacionesPageComponent } from './features/clasificaciones/clasificaciones-page/clasificaciones-page.component';
import { ContactoPageComponent } from './features/contacto/contacto-page/contacto-page.component';
import { EquiposPageComponent } from './features/equipos/equipos-page/equipos-page.component';
import { JugadoresPageComponent } from './features/jugadores/jugadores-page/jugadores-page.component';
import { ResultadosPageComponent } from './features/resultados/resultados-page/resultados-page.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegistroComponent } from './features/auth/registro/registro.component';
import { AdminPageComponent } from './features/admin/admin-page/admin-page.component';
import { ArbitroPageComponent } from './features/arbitro/arbitro-page/arbitro-page.component';
import { UsuarioPageComponent } from './features/usuario/usuario-page/usuario-page.component';
import { CapitanPageComponent } from './features/capitan/capitan-page/capitan-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },          
  { path: 'arbitros', component: ArbitrosPageComponent },
  { path: 'clasificaciones', component: ClasificacionesPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: 'equipos', component: EquiposPageComponent },
  { path: 'jugadores', component: JugadoresPageComponent },
  { path: 'resultados', component: ResultadosPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistroComponent},
  { path: 'admin-page', component: AdminPageComponent},
  { path: 'arbitro-page', component: ArbitroPageComponent},
  { path: 'usuario-page', component: UsuarioPageComponent},
  { path: 'capitan-page', component: CapitanPageComponent}

];