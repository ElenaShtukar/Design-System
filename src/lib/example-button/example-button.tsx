import styled from "styled-components";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

/**
 * Pick size for Button, primary, secondary, tertiary
 */
export type TSize = "base" | "large";

/**
 * Pick meaning for Button, primary, secondary, tertiary
 */
export type TAppearance = "primary" | "secondary" | "tertiary" | "inverted";

export interface IExampleButtonProps
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
	 * Which size Button should have | Какого размера должна быть кнопка
	 */
	size?: TSize;

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

export const StyledExampleButton = styled.button<IExampleButtonProps>`
	border: 1px solid;
	border-radius: ${(props) => props.theme.cornerRadius.componentBase};
	font-size: ${(props) => props.theme.typography.fontSize.base};
	line-height: ${(props) => props.theme.typography.lineHeight.base};
	gap: ${(props) => props.theme.spacing.inner.close};
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

	&:focus {
		box-shadow: ${(props) => props.theme.shadows?.focus};
	}

	${(props) =>
		props.size === "base" &&
		`
        padding: 0 16px;
        border-radius: ${props.theme.cornerRadius.micro};
        line-height: 30px;
        height: ${props.theme.spacing.height.base};
    `}

	${(props) =>
		props.size === "large" &&
		`
        padding: 0 24px;
        border-radius: ${props.theme.cornerRadius.micro};
        line-height: 38px;
        height: ${props.theme.spacing.height.large};
    `}

    ${(props) =>
		props.appearance === "primary" &&
		`  
        &:enabled {
            background-color: ${props.theme.colors.lead.loud.enabled};
            border-color: ${props.theme.colors.lead.loud.enabled};
            color: ${props.theme.colors.text.calm.main};
        }
        
        &:hover {   
            background-color: ${props.theme.colors.lead.loud.hover};  
            border-color: ${props.theme.colors.lead.loud.hover};  
            color: ${props.theme.colors.text.calm.main}; 
        }
        
        &:focus {
            background-color: ${props.theme.colors.lead.loud.enabled};  
            border-color: ${props.theme.colors.lead.loud.enabled};  
            color: ${props.theme.colors.text.calm.main}; 
        }

        &:active {
            background-color: ${props.theme.colors.lead.loud.active};  
            border-color: ${props.theme.colors.lead.loud.active};  
            color: ${props.theme.colors.text.calm.main}; 
        }
    `}

    ${(props) =>
		props.appearance === "secondary" &&
		`  
        &:enabled {
            background-color: ${props.theme.colors.bg.calm.section};
            border-color: ${props.theme.colors.lead.loud.enabled};
            color: ${props.theme.colors.lead.loud.enabled};
        }
        
        &:hover {              
            border-color: ${props.theme.colors.lead.loud.hover};  
            color: ${props.theme.colors.lead.loud.hover}; 
        }
        
        &:focus {             
            border-color: ${props.theme.colors.lead.loud.enabled};  
            color: ${props.theme.colors.lead.loud.enabled};  
        }

        &:active { 
            border-color: ${props.theme.colors.lead.loud.active};  
            color: ${props.theme.colors.lead.loud.active};
        }
    `}

    ${(props) =>
		props.appearance === "tertiary" &&
		`  
        padding: 0;
        border: none;
        height: 24px;

        &:enabled {
            background-color: unset;
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
            border-color: ${props.theme.colors.lead.calm.enabled};
            color: ${props.theme.colors.lead.calm.enabled};
        }
        
        &:hover {              
            border-color: ${props.theme.colors.lead.calm.hover};  
            color: ${props.theme.colors.lead.calm.hover}; 
        }
        
        &:focus {             
            border-color: ${props.theme.colors.lead.calm.enabled};  
            color: ${props.theme.colors.lead.calm.enabled};  
        }

        &:active { 
            border-color: ${props.theme.colors.lead.calm.active};  
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

export const ExampleButton: FC<IExampleButtonProps> = ({
	appearance,
	disabled,
	text,
	size = "base",
	className,
	onClick,
	iconBefore,
	iconAfter,
	type = "button",
	...props
}) => {
	return (
		<StyledExampleButton
			appearance={appearance}
			disabled={disabled}
			size={size}
			className={className}
			onClick={onClick}
			type={type}
			{...props}
		>
			{iconBefore}
			{text}
			{iconAfter}
		</StyledExampleButton>
	);
};
