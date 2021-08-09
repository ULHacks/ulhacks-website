<template lang="pug">
.flex.flex-col
	NavigationBar(:scrollBreakpoint='0')
	HeroBanner
	IntroductionSection
	SectionSeparator
	QuestionsSection
	SectionSeparator
	SponsorsSection
	SectionSeparator
	OurTeamSection
	SectionSeparator
	ContactSection
</template>

<script lang="ts">
import ContactSection from '~/components/ContactSection.vue';
import HeroBanner from '~/components/HeroBanner.vue';
import IntroductionSection from '~/components/IntroductionSection.vue';
import NavigationBar from '~/components/NavigationBar.vue';
import OurTeamSection from '~/components/OurTeamSection.vue';
import QuestionsSection from '~/components/QuestionsSection.vue';
import SectionSeparator from '~/components/SectionSeparator.vue';
import SponsorsSection from '~/components/SponsorsSection.vue';

export default {
	name: 'App',
	components: {
		NavigationBar,
		HeroBanner,
		IntroductionSection,
		QuestionsSection,
		SponsorsSection,
		OurTeamSection,
		ContactSection,
		SectionSeparator,
	},
};
</script>
