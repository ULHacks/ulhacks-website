<template lang="pug">
mixin link(href, name)
	a.mx-8.my-2.transition-colors.font-bold(
		class='md:my-0 md:mx-4',
		:class='[isPinned ? "hover:text-ul-blue" : "hover:text-ul-blue-dark"]',
		href=href,
		@click='scrollToId'
	)= name

.fixed.z-50.w-full.flex.flex-row.justify-between.items-center.py-4.px-8.transition-all(
	:class='[isPinned ? "bg-gray-800" : "bg-transparent"]'
)
	a.transform.transition-transform(href='#', class='hover:scale-105')
		img.h-20.w-20(src='@/assets/logo.png', class='min-w-[5rem]')
	.navigation-bar__tabs-container.flex.flex-col.items-end
		.relative
			MenuIcon.text-white.h-14.w-14.cursor-pointer.transform.transition-transform(
				class='hover:scale-105 md:hidden',
				@click='onMenuToggle'
			)
			.flex.bg-white.rounded-md.text-ul-blue.absolute.top-full.right-0.py-2.border.flex-col(
				class='md:flex-row md:block md:bg-transparent md:border-none md:text-white md:static',
				:class='{ hidden: !menuExpanded }'
			)
				+link('#introduction', 'About')
				+link('#questions', 'FAQ')
				+link('#sponsors', 'Sponsor')
				+link('#team', 'Our Team')
				+link('#contact', 'Contact')
</template>

<script>
import { MenuIcon } from '@heroicons/vue/solid';
import { onMounted, ref } from 'vue';

export default {
	name: 'NavigationBar',
	components: { MenuIcon },
	props: {
		scrollBreakpoint: {
			type: Number,
			required: true,
		},
	},
	setup(props) {
		const isPinned = ref(false);
		const menuExpanded = ref(false);

		function checkScroll() {
			isPinned.value =
				window.document.querySelector('html').scrollTop >
				props.scrollBreakpoint;
		}

		function checkResize() {
			// Close menu when the screen size is large enough
			if (window.innerWidth > 768) {
				menuExpanded.value = false;
			}
		}

		onMounted(() => {
			checkScroll();
			checkResize();
			window.addEventListener('scroll', checkScroll);
			window.addEventListener('resize', checkResize);
		});

		const scrollToId = (e) => {
			const elementId = e.target.href.split('#', 2)[1];
			e.preventDefault();
			window.location.hash = `#${elementId}`;
			document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
		};

		const onMenuToggle = () => {
			menuExpanded.value = !menuExpanded.value;
		};

		return {
			isPinned,
			menuExpanded,
			scrollToId,
			onMenuToggle,
		};
	},
};
</script>
