import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
	Placeholder,
	ExampleButton,
	GlobalStyle,
	darkTheme,
	lightTheme,
	ExampleButtonLink,
	Icon,
} from "./lib";

const StyledContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding-top: 16px;
	display: flex;
	flex-direction: row;
	gap: 16px;
	justify-content: stretch;
`;

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<StyledContainer>
					<Placeholder text="Привет мир!" />
					<ExampleButton
						text="Example"
						appearance="primary"
						size="large"
					/>
					<ExampleButton
						text="Example"
						appearance="secondary"
						size="large"
					/>
					<ExampleButtonLink
						appearance="primary"
						text="Button link"
						iconAfter={<Icon iconName="chevronRight" />}
					/>
				</StyledContainer>
			</main>
		</ThemeProvider>
	);
}

export default App;
