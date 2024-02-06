import { ITheme } from "./customTheme";
import { colors, spacing, typography, shadows, zIndices } from "./tokens";

export const lightTheme: ITheme = {
	colors: {
		bg: {
			calm: {
				section: colors.white,
				global: colors.grey[50],
				disabled: colors.grey[100],
			},
		},

		text: {
			calm: {
				main: colors.grey[50],
			},
			loud: {
				main: colors.grey[800],
				secondary: colors.grey[500],
				disabled: colors.grey[300],
			},
		},

		lead: {
			calm: {
				enabled: colors.blue[50],
				hover: colors.blue[100],
				active: colors.blue[200],
			},
			loud: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[700],
			},

			border: {
				enabled: colors.blue[100],
			},
		},

		accent: {
			green: {
				calm: {
					enabled: colors.green[50],
					hover: colors.green[100],
					active: colors.green[200],
				},
				loud: {
					enabled: colors.green[400],
					hover: colors.green[500],
					active: colors.green[600],
				},
				border: {
					enabled: colors.green[100],
				},
			},

			cyan: {
				calm: {
					enabled: colors.cyan[50],
					hover: colors.cyan[100],
					active: colors.cyan[200],
				},
				loud: {
					enabled: colors.cyan[400],
					hover: colors.cyan[500],
					active: colors.cyan[600],
				},
				border: {
					enabled: colors.cyan[100],
				},
			},

			blue: {
				calm: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				border: {
					enabled: colors.blue[100],
				},
			},

			pink: {
				calm: {
					enabled: colors.pink[50],
					hover: colors.pink[100],
					active: colors.pink[200],
				},
				loud: {
					enabled: colors.pink[400],
					hover: colors.pink[500],
					active: colors.pink[600],
				},
				border: {
					enabled: colors.pink[100],
				},
			},

			red: {
				calm: {
					enabled: colors.red[50],
					hover: colors.red[100],
					active: colors.red[200],
				},
				loud: {
					enabled: colors.red[400],
					hover: colors.red[500],
					active: colors.red[600],
				},
				border: {
					enabled: colors.red[100],
				},
			},

			neutral: {
				calm: {
					enabled: colors.grey[50],
					hover: colors.grey[100],
					active: colors.grey[200],
				},
				loud: {
					enabled: colors.grey[400],
					hover: colors.grey[500],
					active: colors.grey[600],
				},
				border: {
					enabled: colors.grey[100],
				},
			},
		},
	},

	spacing: {
		border: {
			base: spacing[1],
			large: spacing[2],
			xLarge: spacing[4],
		},
		inner: {
			noGap: 0,
			closest: spacing[2],
			close: spacing[4],
			related: spacing[8],
			grouped: spacing[16],
		},

		outer: {
			close: spacing[4],
			related: spacing[8],
			grouped: spacing[16],
			subSection: spacing[24],
			section: spacing[48],
		},

		paddings: {
			compact: spacing[8],
			default: spacing[16],
			relaxed: spacing[24],
			large: spacing[32],
		},

		height: {
			xxxSmall: spacing[4],
			xxSmall: spacing[8],
			xSmall: spacing[16],
			small: spacing[24],
			base: spacing[32],
			large: spacing[40],
			xLarge: spacing[48],
			xxLarge: spacing[56],
		},
	},

	shadows: {
		focus: shadows.focus,
	},

	typography: {
		family: {
			base: `"Fira Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`,
			heading: `"Fira Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';`,
			monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
		},
		fontSize: {
			h1: typography.size.h1,
			h2: typography.size.h2,
			h3: typography.size.h3,
			h4: typography.size.h4,
			h5: typography.size.h5,
			h6: typography.size.h6,
			base: typography.size.base,
			small: typography.size.small,
		},

		lineHeight: {
			h1: typography.lineHeight.h1,
			h2: typography.lineHeight.h2,
			h3: typography.lineHeight.h3,
			h4: typography.lineHeight.h4,
			h5: typography.lineHeight.h5,
			h6: typography.lineHeight.h6,
			base: typography.lineHeight.base,
			small: typography.lineHeight.small,
		},

		fontWeight: {
			regular: typography.fontWeight.regular,
			medium: typography.fontWeight.medium,
			semiBold: typography.fontWeight.semiBold,
		},
	},

	cornerRadius: {
		micro: spacing[2],
		small: spacing[4],
		componentBase: spacing[8],
		sectioInner: spacing[12],
		sectionBase: spacing[24],
	},

	zIndices: {
		hide: zIndices.hide,
		auto: zIndices.auto,
		base: zIndices.base,
		docked: zIndices.docked,
		dropdown: zIndices.dropdown,
		sticky: zIndices.sticky,
		banner: zIndices.banner,
		overlay: zIndices.overlay,
		modal: zIndices.modal,
		popover: zIndices.popover,
		skipLink: zIndices.skipLink,
		toast: zIndices.toast,
		tooltip: zIndices.tooltip,
	},

	animation: {
		base: `0.2s ease-in-out`,
	},
};

export const darkTheme: ITheme = {
	...lightTheme,
	colors: {
		bg: {
			calm: {
				section: colors.black,
				global: colors.grey[900],
				disabled: colors.grey[600],
			},
		},

		text: {
			calm: {
				main: colors.grey[700],
			},
			loud: {
				main: colors.grey[50],
				secondary: colors.grey[300],
				disabled: colors.grey[500],
			},
		},

		lead: {
			calm: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			loud: {
				enabled: colors.blue[100],
				hover: colors.blue[200],
				active: colors.blue[300],
			},

			border: {
				enabled: colors.blue[800],
			},
		},

		accent: {
			green: {
				calm: {
					enabled: colors.green[400],
					hover: colors.green[500],
					active: colors.green[600],
				},
				loud: {
					enabled: colors.green[50],
					hover: colors.green[100],
					active: colors.green[200],
				},
				border: {
					enabled: colors.green[800],
				},
			},

			cyan: {
				calm: {
					enabled: colors.cyan[400],
					hover: colors.cyan[500],
					active: colors.cyan[600],
				},
				loud: {
					enabled: colors.cyan[50],
					hover: colors.cyan[100],
					active: colors.cyan[200],
				},
				border: {
					enabled: colors.cyan[800],
				},
			},

			blue: {
				calm: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				loud: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				border: {
					enabled: colors.blue[800],
				},
			},

			pink: {
				calm: {
					enabled: colors.pink[400],
					hover: colors.pink[500],
					active: colors.pink[600],
				},
				loud: {
					hover: colors.pink[100],
					active: colors.pink[200],
				},
				border: {
					enabled: colors.pink[800],
				},
			},

			red: {
				calm: {
					enabled: colors.red[400],
					hover: colors.red[500],
					active: colors.red[600],
				},
				loud: {
					enabled: colors.red[50],
					hover: colors.red[100],
					active: colors.red[200],
				},
				border: {
					enabled: colors.red[800],
				},
			},

			neutral: {
				calm: {
					enabled: colors.grey[400],
					hover: colors.grey[500],
					active: colors.grey[600],
				},
				loud: {
					enabled: colors.grey[50],
					hover: colors.grey[100],
					active: colors.grey[200],
				},
				border: {
					enabled: colors.grey[800],
				},
			},
		},
	},
};
