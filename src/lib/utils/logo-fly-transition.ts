import { cubicOut } from 'svelte/easing';

export const logoFly = (
	node: HTMLElement,
	{ delay = 0, duration = 400, easing = cubicOut, x = 0, opacity = 0, noMargin = false } = {}
) => {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const od = target_opacity * (1 - opacity);
	console.log({ od });
	if (noMargin) node.classList.add('no-margin');
	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
			margin-left: ${(1 - t) * x}px;
			opacity: ${target_opacity - od * u}`
	};
};
