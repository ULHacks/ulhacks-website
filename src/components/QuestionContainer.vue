<template lang="pug">
.border-2.rounded-md.flex.flex-col.mx-16.my-2
	.p-6.flex-1.cursor-pointer(@click='toggleAnswer') {{ question }}
	.transition-height.ease-in-out.duration-500.overflow-y-hidden(
		ref='answerEl',
		:style='answerStyle'
	)
		.question-container__answer.p-6 {{ answer }}
</template>

<script lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

export default {
	props: {
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: String,
			required: true,
		},
	},
	setup() {
		const answerEl = ref<HTMLDivElement>();
		const answerHeight = ref(0);

		function resizeAnswerHeight() {
			answerHeight.value = answerEl.value!.scrollHeight;
		}

		onMounted(() => {
			window.addEventListener('resize', () => {
				resizeAnswerHeight();
			});

			resizeAnswerHeight();
		});

		onUnmounted(() => {
			window.removeEventListener('resize', resizeAnswerHeight);
		});

		const isAnswerVisible = ref(false);

		const answerStyle = computed(() => ({
			height: isAnswerVisible.value ? `${answerHeight.value}px` : '0',
		}));

		function toggleAnswer() {
			isAnswerVisible.value = !isAnswerVisible.value;
		}

		return {
			answerEl,
			toggleAnswer,
			isAnswerVisible,
			answerStyle,
		};
	},
};
</script>

<style scoped>
.question-container__answer {
	white-space: break-spaces;
}
</style>
