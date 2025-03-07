import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import customPreset from './theme';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withHashLocation()),
		provideHttpClient(),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: customPreset,
				options: {
					prefix: 'p',
					darkModeSelector: '',
				}
			}
    }),

	]
};
