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
			.whitespace-pre-wrap(v-text='ulHacksDescription')
</template>

<script>
import outdent from 'outdent';

import SectionWrapper from './SectionWrapper.vue';

const ulHacksDescription = outdent`
	At ULHacks, you have 36 hours to create a project which empowers learning.

	We believe that learning is an invaluable skill. No matter your career or your field, the rapid innovation over the past few decades have demonstrated the need to adapt your skills to ever-changing technology—or they risk falling obsolete.

	The secret to evolving your skills for the modern age lies in perfecting the foundational skill of learning, which has never been more crucial to a successful future. 

	Luckily, technology has made learning more accessible than ever. It has empowered people to create and share tools and projects that empower others to learn a subject more quickly and effectively. At ULHacks, we want you to leverage today’s technologies to create these projects: projects that empower learning.
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

<style scoped></style>
