<template lang="pug">
SectionWrapper#sponsors
	.flex-1.flex.flex-col.items-center
		.text-6xl.font-bold.text-center Sponsors
		SponsorLogo(v-for='sponsor in sponsors')
</template>

<script lang='ts'>
import SectionWrapper from '~/components/SectionWrapper.vue';

const sponsors = [
	{
		name: 'echoAR',

	}
]

export default {
	components: { SectionWrapper },
	name: 'SponsorsSection',
};
</script>