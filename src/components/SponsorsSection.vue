<template lang="pug">
SectionWrapper#sponsors
	.flex-1.flex.flex-col.items-center(data-aos='fade-up')
		.text-6xl.font-bold.text-center.mb-8 Sponsors
		.flex.flex-row.items-center.flex-wrap.justify-center
			SponsorLogo(
				v-for='sponsor in sponsors',
				:name='sponsor.name',
				:logoPath='sponsor.logoPath',
				:websiteUrl='sponsor.websiteUrl'
			)
</template>

<script lang="ts">
import SectionWrapper from '~/components/SectionWrapper.vue';
import SponsorLogo from '~/components/SponsorLogo.vue';

const sponsors = [
	{
		name: 'echoAR',
		logoPath: '/images/sponsors/echo_ar.png',
		websiteUrl: 'https://echoar.xyz',
	},
	{
		name: 'AoPS',
		logoPath: '/images/sponsors/aops.png',
		websiteUrl: 'https://artofproblemsolving.com/',
	},
	{
		name: 'Wolfram|Alpha',
		logoPath: '/images/sponsors/wolfram-alpha.png',
		websiteUrl: 'https://www.wolfram.com/language/',
	},
];

export default {
	components: {
		SectionWrapper,
		SponsorLogo,
	},
	name: 'SponsorsSection',
	setup() {
		return {
			sponsors,
		};
	},
};
</script>
