import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'ULHacks',
		component: () => import('~/pages/LandingPage.vue'),
	},
	{
		path: '/discord',
		component: () => import('~/pages/DiscordRedirect.vue'),
		beforeEnter() {
			window.location.href = 'https://discord.gg/An26dB3WBP';
		},
	},
	{
		path: '/devpost',
		component: () => import('~/pages/DevpostRedirect.vue'),
		beforeEnter() {
			window.location.href = 'https://ulhacks.devpost.com';
		},
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/',
	},
];
