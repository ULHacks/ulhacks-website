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
		name: 'Linode',
		logoPath: '/images/sponsors/linode.png',
		websiteUrl: 'https://linode.com',
	},
	{
		name: 'DigitalOcean',
		logoPath: '/images/sponsors/digitalocean.png',
		websiteUrl: 'https://digitalocean.com',
	},
	{
		name: 'Wolfram|Alpha',
		logoPath: '/images/sponsors/wolfram-alpha.png',
		websiteUrl: 'https://www.wolfram.com/',
	},
	{
		name: 'Huawei',
		logoPath: '/images/sponsors/huawei.png',
		websiteUrl: 'https://www.huawei.com',
	},
	{
		name: 'Leading Learners',
		logoPath: '/images/sponsors/leading-learners.png',
		websiteUrl: 'https://linktr.ee/leadinglearners',
	},
	{
		name: 'Elegoo',
		logoPath: '/images/sponsors/elegoo.png',
		websiteUrl: 'https://elegoo.com',
	},
	{
		name: 'AoPS',
		logoPath: '/images/sponsors/aops.png',
		websiteUrl: 'https://artofproblemsolving.com/',
	},
	{
		name: 'Magoosh',
		logoPath: '/images/sponsors/magoosh.png',
		websiteUrl: 'https://magoosh.com',
	},
	{
		name: 'Hack the North',
		logoPath: '/images/sponsors/hackthenorth.png',
		websiteUrl: 'https://hackthenorth.com',
	},
	{
		name: 'Voiceflow',
		logoPath: '/images/sponsors/voiceflow.png',
		websiteUrl: 'https://voiceflow.com',
	},
	{
		name: 'echoAR',
		logoPath: '/images/sponsors/echo-ar.png',
		websiteUrl: 'https://echoar.xyz',
	},
	{
		name: 'Repl.it',
		logoPath: '/images/sponsors/replit.png',
		websiteUrl: 'https://replit.com',
	},
	{
		name: 'EconHacks',
		logoPath: '/images/sponsors/econhacks.png',
		websiteUrl: 'https://econhacks.org/',
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
