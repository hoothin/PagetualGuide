import { defineClientConfig } from '@vuepress/client';
import mediumZoom from 'medium-zoom';
import { nextTick, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const zoomSelector = '.theme-default-content > img, .theme-default-content :not(a) > img';
const refreshDelays = [0, 80, 220, 500, 900];

/**
 * Logs medium-zoom errors without interrupting page navigation.
 *
 * @param {unknown} error The error thrown by medium-zoom.
 * @returns {void}
 */
const warnZoomError = (error) => {
	console.warn('[pagetual] image preview refresh failed', error);
};

/**
 * Refreshes medium-zoom bindings for markdown content images.
 *
 * @param {import('medium-zoom').Zoom & { refresh?: (selector?: string) => void }} zoom The medium-zoom instance.
 * @returns {void}
 */
const refreshImagePreview = (zoom) => {
	try {
		if (typeof zoom.refresh === 'function') {
			zoom.refresh(zoomSelector);
			return;
		}
		zoom.detach();
		zoom.attach(zoomSelector);
	} catch (error) {
		warnZoomError(error);
	}
};

/**
 * Schedules repeated refreshes because VuePress route transitions update content asynchronously.
 *
 * @param {import('medium-zoom').Zoom & { refresh?: (selector?: string) => void }} zoom The medium-zoom instance.
 * @param {number[]} timerIds Active timer ids to cancel on unmount.
 * @returns {void}
 */
const scheduleImagePreviewRefresh = (zoom, timerIds) => {
	nextTick(() => {
		for (const delay of refreshDelays) {
			const timerId = window.setTimeout(() => refreshImagePreview(zoom), delay);
			timerIds.push(timerId);
		}
	});
};

/**
 * Checks whether an image should use the markdown image preview.
 *
 * @param {EventTarget | null} target The clicked event target.
 * @returns {target is HTMLImageElement} Whether the target is a previewable image.
 */
const isPreviewableImage = (target) => {
	if (!(target instanceof HTMLImageElement)) {
		return false;
	}
	if (!target.closest('.theme-default-content')) {
		return false;
	}
	if (target.closest('a')) {
		return false;
	}
	return !target.classList.contains('medium-zoom-image--opened');
};

/**
 * Finds a reward button from a click target.
 *
 * @param {EventTarget | null} target The clicked event target.
 * @returns {HTMLButtonElement | null} The reward button, if present.
 */
const findRewardButton = (target) => {
	if (!(target instanceof Element)) {
		return null;
	}
	const button = target.closest('.fr-reward__btn');
	if (!(button instanceof HTMLButtonElement)) {
		return null;
	}
	return button;
};

export default defineClientConfig({
	setup() {
		if (typeof window === 'undefined') {
			return;
		}

		const route = useRoute();
		const zoom = mediumZoom();
		const timerIds = [];

		/**
		 * Opens a reward image through medium-zoom after refreshing current bindings.
		 *
		 * @param {HTMLElement} trigger The button placed before the hidden reward image.
		 * @returns {void}
		 */
		window.pagetualOpenRewardImage = (trigger) => {
			const image = trigger.nextElementSibling;
			if (!(image instanceof HTMLImageElement)) {
				return;
			}
			refreshImagePreview(zoom);
			zoom.open({ target: image }).catch(warnZoomError);
		};

		/**
		 * Opens reward images from delegated button clicks.
		 *
		 * @param {MouseEvent} event The captured click event.
		 * @returns {void}
		 */
		const handleRewardButtonClick = (event) => {
			const button = findRewardButton(event.target);
			if (!button) {
				return;
			}
			event.preventDefault();
			event.stopPropagation();
			window.pagetualOpenRewardImage(button);
		};

		/**
		 * Opens markdown images even when the plugin listener was lost after route changes.
		 *
		 * @param {MouseEvent} event The captured click event.
		 * @returns {void}
		 */
		const handleImageClick = (event) => {
			if (document.body.classList.contains('medium-zoom--opened')) {
				return;
			}
			if (!isPreviewableImage(event.target)) {
				return;
			}
			event.preventDefault();
			event.stopPropagation();
			refreshImagePreview(zoom);
			zoom.open({ target: event.target }).catch(warnZoomError);
		};

		onMounted(() => {
			document.addEventListener('click', handleRewardButtonClick, true);
			document.addEventListener('click', handleImageClick, true);
			scheduleImagePreviewRefresh(zoom, timerIds);
		});

		watch(
			() => route.fullPath,
			() => scheduleImagePreviewRefresh(zoom, timerIds),
		);

		onUnmounted(() => {
			document.removeEventListener('click', handleRewardButtonClick, true);
			document.removeEventListener('click', handleImageClick, true);
			for (const timerId of timerIds) {
				window.clearTimeout(timerId);
			}
			zoom.detach();
			delete window.pagetualOpenRewardImage;
		});
	},
});
