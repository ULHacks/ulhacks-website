<template lang="pug">
.hero-banner__container.h-screen
	.hero-banner__content.flex.flex-col.absolute.h-screen.justify-center
		.mt-24(class='md:mt-none')
			.text-7xl.text-center.font-black ULHacks 2021
			.h-8
			.flex.flex-row.flex-wrap.justify-evenly
				.flex.flex-row.align-middle
					location-marker-icon.h-8.w-8
					.w-2
					.text-lg.font-bold.leading-loose Virtual
				.flex.flex-row.align-middle
					calendar-icon.h-8.w-8
					.w-2
					.text-lg.font-bold.leading-loose August 13th - 15th, 2021
			.flex.flex-row.justify-center.items-center.h-32.text-xl
				a.bg-white.text-ul-blue.py-4.px-8.rounded-lg.transform.transition-transform(
					href='https://ulhacks.devpost.com/',
					class='hover:scale-105'
				) Register for ULHacks on Devpost!
	#particles-js.hero-banner__particles.h-screen
</template>

<script>
import 'particles.js';

import { CalendarIcon, LocationMarkerIcon } from '@heroicons/vue/solid';
import { onMounted } from 'vue';

import particles from '../assets/particles.json';

export default {
	name: 'TheHeroBanner.vue',
	components: { LocationMarkerIcon, CalendarIcon },
	setup() {
		onMounted(() => {
			window.particlesJS('particles-js', particles);
		});
		return {};
	},
};
</script>

<style scoped>
.hero-banner__container {
	background-color: #3ea7dd;
}
.hero-banner__content {
	left: 50%;
	transform: translateX(-50%);
	color: #ffffff;
}
.hero-banner__container,
.hero-banner__content,
.hero-banner__particles {
	min-height: 500px;
}
</style>
