<template lang="pug">
SectionWrapper#introduction
	.flex.flex-col(class='md:flex-row')
		img.mb-12.w-60.max-w-sm.self-center.flex-1(
			data-aos='fade-right',
			src='@/assets/logo.png',
			class='md:mb-0 md:mr-16'
		)
		.flex-1(data-aos='fade-left')
			.px-12.pb-3.text-3xl.font-bold.text-center Introducing ULHacks
			.description.text-lg.whitespace-pre-wrap(v-html='ulHacksDescription')
</template>

<script>
import outdent from 'outdent';

import SectionWrapper from './SectionWrapper.vue';

const ulHacksDescription = outdent`
	Are you ready to shape the future of education?

	All middle school, high school and university students are invited to attend ULHacks, a virtual hackathon from August 13th to 15th with the theme of empowering learning! Over the course of 36 hours, you (and optionally on a team with 3 other friends) will have the opportunity to create a project that helps make learning easier, quicker, and more accessible to everybody. We'll be providing mentors, workshops, and activities that will help turn your weekend into an unforgettable experience.

	More information about ULHacks can be found at our <a href='https://ulhacks.devpost.com'>Devpost page</a>. If you know anybody who you think would be interested in attending, please don't hesitate to spread the word with them! We can't wait to see all your amazing ideas and projects that you will build at ULHacks!
`;

export default {
	name: 'IntroductionSection',
	components: { SectionWrapper },
	setup() {
		return {
			ulHacksDescription,
		};
	},
};
</script>

<style scoped lang='postcss'>
.description > :deep(a) {
	@apply text-ul-blue
}
</style>
