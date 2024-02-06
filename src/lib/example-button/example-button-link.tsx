import styled from "styled-components";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

/**
 * Pick meaning for Button, primary, inverted
 */
type TAppearance = "primary" | "inverted";

export interface IExampleButtonLinkProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Icon before | Иконка до текста
	 */
	iconBefore?: ReactNode;

	/**
	 * Icon after | Иконка после текста
	 */
	iconAfter?: ReactNode;

	/**
	 * Which appearance Button should have | Как должна выглядить кнопка
	 */
	appearance?: TAppearance;

	/**
	 * Make button disabled | Делает кнопку неактивной
	 *
	 */
	disabled?: boolean;

	/**
	 * Button text | Текст кнопки
	 */
	text?: string;

	/**
	 * Shows that current operation is in progress | Указывает что текущая оберация в процессе
	 */
	loading?: boolean;

	/**
	 * Allow apply custom classes to component
	 */
	className?: string;
}

export const StyledExampleButtonLink = styled.button<IExampleButtonLinkProps>`
	border: none;
	font-size: ${(props) => props.theme.typography.fontSize.base};
	line-height: ${(props) => props.theme.typography.lineHeight.base};
	gap: ${(props) => props.theme.spacing.inner.close};
	background: unset;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	box-shadow: none;
	cursor: pointer;
	transition: 0.2s ease;

	// тут по  хорошему надо вынести в токены и прописывать каждому компоненту
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;

	&:focus {
		box-shadow: ${(props) => props.theme.shadows?.focus};
	}

	${(props) =>
		props.appearance === "primary" &&
		`  
        &:enabled {
            color: ${props.theme.colors.lead.loud.enabled};
        }
        
        &:hover {   
            color: ${props.theme.colors.lead.loud.hover};  
        }
        
        &:focus {
            color: ${props.theme.colors.lead.loud.enabled};  
        }

        &:active {
            color: ${props.theme.colors.lead.loud.active};    
        }
    `}

	${(props) =>
		props.appearance === "inverted" &&
		`  
        &:enabled {
            background-color: unset;
            color: ${props.theme.colors.lead.calm.enabled};
        }
        
        &:hover {               
            color: ${props.theme.colors.lead.calm.hover}; 
        }
        
        &:focus {              
            color: ${props.theme.colors.lead.calm.enabled};  
        }

        &:active {  
            color: ${props.theme.colors.lead.calm.active};
        }
    `}


    ${(props) =>
		props.disabled &&
		`  
        &:disabled {
            color: ${props.theme.colors.text.loud.disabled}; 
            background-color: ${props.theme.colors.bg.calm.disabled};  
            border-color: ${props.theme.colors.bg.calm.disabled}; 
            cursor: not-allowed;    
        }
    `}
`;

/**
 *
 *Компактный вид кнопки, имеет только два вида "primary" и "inverted"
 * @returns
 */

export const ExampleButtonLink: FC<IExampleButtonLinkProps> = ({
	appearance,
	disabled,
	text,
	iconBefore,
	iconAfter,
	type = "button",
	...props
}) => {
	return (
		<StyledExampleButtonLink
			appearance={appearance}
			disabled={disabled}
			type={type}
			{...props}
		>
			{iconBefore}
			{text}
			{iconAfter}
		</StyledExampleButtonLink>
	);
};
