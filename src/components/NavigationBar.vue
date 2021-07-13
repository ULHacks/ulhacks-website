<template lang="pug">
.navigation-bar__container.w-full.flex.flex-row.justify-between.items-center.py-4.px-8(
	:class='{ "navigation-bar__container--opaque": isPinned }'
)
	img.h-20(src='@/assets/logo.png')
	.navigation-bar__tabs-container.flex.flex-col.items-end
		MenuIcon.navigation-bar__menu-button.h-16.w-16(
			@click='onMenuToggle',
			v-show='tabsCollapsedIntoMenu'
		)
		.navigation-bar__tabs(
			:class='{ "navigation-bar__tabs--desktop": !tabsCollapsedIntoMenu, "navigation-bar__tabs--mobile": tabsCollapsedIntoMenu }',
			v-show='menuExpanded || !tabsCollapsedIntoMenu'
		)
			a(href='#introduction', @click='scrollToId') About
			a(href='#questions', @click='scrollToId') FAQ
			a(href='#sponsors', @click='scrollToId') Sponsors
			a(href='#team', @click='scrollToId') Our Team
			a(href='#contact', @click='scrollToId') Contact
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
		const tabsCollapsedIntoMenu = ref(false);
		const menuExpanded = ref(false);

		const checkScroll = () => {
			isPinned.value =
				window.document.querySelector('html').scrollTop >
				props.scrollBreakpoint;
		};

		const checkWindowSize = () => {
			tabsCollapsedIntoMenu.value = document.body.clientWidth < 700;
		};

		onMounted(() => {
			checkScroll();
			checkWindowSize();
			document.addEventListener('scroll', checkScroll);
			document.defaultView.addEventListener('resize', checkWindowSize);
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
			tabsCollapsedIntoMenu,
			menuExpanded,
			scrollToId,
			onMenuToggle,
		};
	},
};
</script>

<style scoped>
a {
	color: #ffffff;
	padding-left: 35px;
}
a:hover {
	color: #666666;
}

.navigation-bar__container {
	position: fixed;
	z-index: 9999;
	background-color: #00000000;
	transition: background-color 0.2s;
}

.navigation-bar__container--opaque {
	background-color: #222222;
}

.navigation-bar__menu-button {
	color: #ffffff;
}

.navigation-bar__tabs {
	display: flex;
}

.navigation-bar__tabs--desktop {
	flex-direction: row;
}

.navigation-bar__tabs--mobile {
	flex-direction: column;
}
</style>
