import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	html {
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	font-family: Helvetica, Arial, sans-serif;
	box-sizing: border-box;
	font-size: 16px;
	}

	body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	-moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
	-ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
	-webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
	font-feature-settings: 'kern', 'liga', 'clig', 'calt';
	font-weight: normal;
	font-kerning: normal;
	word-wrap: break-word;
	}

	*, *:before, *:after {
	box-sizing: inherit;
	}

	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
	margin: 0;
	padding: 0;
	}

	h1, h2, h3, h4, h5, h6 {
	color: inherit;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	text-rendering: optimizeLegibility;
	}

`
