<template lang="pug">
SectionWrapper#prizes
	div(data-aos='fade-up')
		.flex-1.flex.flex-col.items-center.w-full
			.text-6xl.font-bold.text-center.mb-5 Prizes
</template>

<script lang="ts">
import SectionWrapper from '~/components/SectionWrapper.vue';
import TeamMember from '~/components/TeamMember.vue';
import outdent from 'outdent';

const prizes = [
	{
		name: '1st Place Prize',
		decsription: outdent`
			- $250 DigitalOcean credits for each member of the winning team
			- 1 Huawei Watch Fit for each member of the winning team
		`,
	},
];

export default {
	name: 'OurTeamSection',
	components: { TeamMember, SectionWrapper },
	setup() {
		return { teamMembers };
	},
};
</script>

<style scoped></style>
