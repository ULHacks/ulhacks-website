<template lang="pug">
SectionWrapper#prizes
	div(data-aos='fade-up')
		.flex-1.flex.flex-col.items-center.w-full
			.text-6xl.font-bold.text-center.mb-5 Prizes
			.grid.grid-cols-2
				.max-w-4xl.m-4(v-for='prize in prizes')
					PrizeDisplay(:name='prize.name', :description='prize.description')
</template>

<script lang="ts">
import outdent from 'outdent';

import PrizeDisplay from '~/components/PrizeDisplay.vue';
import SectionWrapper from '~/components/SectionWrapper.vue';

type Prize = {
	name: string;
	description: string;
};

const prizes: Prize[] = [
	{
		name: '1st Place Prize',
		description: outdent`
			- $250 DigitalOcean credits for each member of the winning team
			- 1 Huawei Watch Fit for each member of the winning team
		`,
	},
	{
		name: '2nd Place Prize',
		description: outdent`
			- $125 DigitalOcean credits for each member of the winning team
			- 3 pieces of ELEGOO Owl Smart Robotic Car Kit & 2 Pieces of ELEGOO Arduino UNO basic Starter Kit
		`,
	},
	{
		name: '3rd Place Prize',
		description: outdent`
			- $100 DigitalOcean credits for each member of the winning team
			- EdTech Bundles for each member of the winning team
		`,
	},
	{
		name: 'Top 6',
		description: outdent`
			- The top 6 projects will each receive a Wolfram Award—a year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro
		`,
	},
	{
		name: 'Best High School Hack',
		description: outdent`
			- A guaranteed spot at Hack the North 2021 for each member of the winning team
			- $25 AoPS coupon for each member of the winning team
			- A year of Wolfram|One Personal Edition + a one-year subscription to Wolfram|Alpha Pro for each member of the winning team
			<strong>Note:</strong> To qualify for the Best High School Hack, your team must consist of only high school hackers (including Class of 2021 graduates)
		`,
	},
	{
		name: 'Digital Swag (for all participants!)',
		description: outdent`
			By participating in ULHacks, you are eligible for:
			- 1-month access to echoAR Business Plan
			- 1-month access to Repl.it Hacker Plan
			- Access to Wolfram|One for 30 days
			- Access to Voiceflow PRO for 6 months
			- $100, 60-day free trial to DigitalOcean for new users
		`,
	},
];

export default {
	name: 'OurTeamSection',
	components: { SectionWrapper, PrizeDisplay },
	setup() {
		return { prizes };
	},
};
</script>
