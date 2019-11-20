import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
// import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
    {
        path: '',
        component: MainContentComponent
    },
    {
        path: 'main-content',
        component: MainContentComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'help',
        component: HelpComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);

//HERE IS THE ROUTING PAGE TO FIX