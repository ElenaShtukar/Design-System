import styled from "styled-components";
import { FC, ButtonHTMLAttributes } from "react";
import { TSize, TAppearance } from "./example-button";
import { Icon } from "../icon";

export interface IExampleButtonIconProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Icon | Иконка
	 */
	iconName: string;

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
	 * Shows that current operation is in progress | Указывает что текущая оберация в процессе
	 */
	loading?: boolean;

	/**
	 * Allow apply custom classes to component
	 */
	className?: string;
}

export const StyledExampleButtonIcon = styled.button<IExampleButtonIconProps>`
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
	font-weight: normal;

	&:focus {
		box-shadow: ${(props) => props.theme.shadows?.focus};
	}

	${(props) =>
		props.size === "base" &&
		`
        border-radius: ${props.theme.cornerRadius.micro};
        height: ${props.theme.spacing.height.base};
        width: ${props.theme.spacing.height.base};
    `}

	${(props) =>
		props.size === "large" &&
		`
        border-radius: ${props.theme.cornerRadius.micro};
        height: ${props.theme.spacing.height.large};
        width: ${props.theme.spacing.height.large};
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
        width: 24px;

        &:enabled {
            background-color: ${props.theme.colors.bg.calm.section};
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
            background-color: ${props.theme.colors.bg.calm.section};
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

export const ExampleButtonIcon: FC<IExampleButtonIconProps> = ({
	appearance,
	disabled,
	size = "base",
	className,
	iconName = "user",
	onClick,
	type = "button",
	...props
}) => {
	return (
		<StyledExampleButtonIcon
			appearance={appearance}
			disabled={disabled}
			size={size}
			className={className}
			onClick={onClick}
			type={type}
			iconName={iconName}
			{...props}
		>
			{size === "base" ? (
				<Icon iconName={iconName} size={24} />
			) : (
				<Icon iconName={iconName} size={32} />
			)}
		</StyledExampleButtonIcon>
	);
};
