import tippy from 'tippy.js';
import type { Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export const tippyAction = (node: HTMLElement, options?: Partial<Props>) => {
	const instance = tippy(node, options);

	return {
		update(options: Props) {
			instance.setProps(options);
		},
		destroy() {
			instance.destroy()
		}
	};
};
