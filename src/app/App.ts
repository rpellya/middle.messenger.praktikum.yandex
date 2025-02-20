import { ChatPage } from 'pages/Chat';
import { Router } from './lib/Router';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/NotFound';
import { RegisterPage } from 'pages/Register';
import { ProfilePage } from 'pages/Profile';
import { ServerErrorPage } from 'pages/ServerError';

export class App {
    private router: Router;

    constructor() {
        this.router = Router.getInstance();
        this.registerRoutes();
    }

    private registerRoutes(): void {
        this.router.registerRoute('/', LoginPage);
        this.router.registerRoute('/sign-in', LoginPage);
        this.router.registerRoute('/sign-up', RegisterPage);
        this.router.registerRoute('/chat', ChatPage);
        this.router.registerRoute('/profile', ProfilePage);
        this.router.registerRoute('/error-500', ServerErrorPage);
        this.router.registerRoute('*', NotFoundPage);
    }

    public render(): void {
        this.router.navigate(window.location.pathname);
    }
}
