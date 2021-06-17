<template lang="pug">
SectionWrapper#contact
	.flex-1.flex.flex-col.items-center.w-full
		.text-6xl.font-bold.text-center.mb-5 Contact Us
	.flex.flex-row.justify-evenly.p-16.flex-wrap
		form.contact__form.flex.flex-col(
			action='mailto:contact@ulhacks.com',
			method='get'
		)
			.text-2xl.font-bold.p-2 Questions?
			input.border.rounded.p-2.m-2(
				type='text',
				name='subject',
				placeholder='Subject'
			)
			textarea.border.rounded.p-2.m-2.h-64.resize-none(
				name='body',
				placeholder='Message'
			)
			button.border.rounded.p-4.m-2(type='submit', name='submit') Send
		.contact__contact-details
			.text-2xl.font-bold.p-2.px-4 Keep In Touch
			.flex.flex-row.items-center.p-4
				font-awesome-icon(:icon='["fas", "envelope"]', size='lg')
				.w-4
				.flex.flex-col
					a.font-bold(href='mailto:contact@ulhacks.com') contact@ulhacks.com
					p Questions are always welcome!
			.flex.flex-row.items-center.p-4
				font-awesome-icon(:icon='["fab", "instagram"]', size='lg')
				.w-4
				.flex.flex-col
					a.font-bold(href='https://www.instagram.com/ULHacks') @ULHacks
					p Follow us to stay up-to-date!
</template>

<script>
import SectionWrapper from './SectionWrapper.vue';

export default {
	components: { SectionWrapper },
	name: 'ContactSection',
};
</script>

<style scoped>
a:hover {
	color: #4ea7dd;
}
.contact__form {
	flex: 2;
}
.contact__contact-details {
	flex: 1;
}
</style>
