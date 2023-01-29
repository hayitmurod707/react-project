import { Bounce, ToastContainer } from "react-toastify";
import styled, { createGlobalStyle } from "styled-components";
import Sound from "./notification.mp3";
// danger color #ff0000
// info color #0000ff
// light color #ffffff
// secondary color #808080
// success color #008000
// text color #000000
// warning color #ffff00
const defaultOptions = {
	// autoClose: false, // false or number millisecond
	// bodyClassName: '', // string
	// className: '', // string
	// closeButton: <CloseButton />, // false or ReactNode
	// closeOnClick: true, // boolean
	// containerId: '', // string
	// draggable: true, // boolean
	// draggableDirection: 'x', // x or y
	// draggablePercent: 80, // number from 0 to 100
	// enableMultiContainer: '', // boolean
	// hideProgressBar: false, // boolean
	// limit: '', // Integer number
	// newestOnTop: false, // boolean
	// pauseOnFocusLoss: true, // boolean
	// pauseOnHover: true, // boolean
	// position: 'top-right', // string
	// progressClassName: '', // string
	// progressStyle: {}, // object
	// role: 'alert', // string
	// rtl: false, // boolean
	// style: {}, // object
	// theme: 'light', // string oneOf ['light', 'dark']
	// toastClassName: '', // string
	// transition: Slide, // oneOf [Slide, Bounce, Zoom, Flip]
	newestOnTop: true, // boolean
	transition: Bounce, // oneOf [Slide, Bounce, Zoom, Flip]
};
const Styles = createGlobalStyle`
	:root {
		--toastify-icon-color-error: #ff0000;
		--toastify-icon-color-info: #0000ff;
		--toastify-icon-color-success: #008000;
		--toastify-icon-color-warning: #ffff00;
	}
`;
const StyledElement = styled.div`
	& audio {
		display: none;
	}
	& .Toastify__toast-container {
		padding: 0;
		right: 18px;
		top: 20px;
		& .Toastify__toast {
			border-radius: 14px;
			box-shadow: 0 1px 10px 0 rgba(13, 46, 105, 0.1),
				0 1px 10px 0 rgba(13, 46, 105, 0.1);
			color: #000000;
			font-family: "Gilroy", sans-serif !important;
			font-size: 15px;
			font-weight: 600;
			padding: 14px;
			&:last-child {
				margin: 0;
			}
			& .Toastify__toast-body {
				margin: 0;
				padding: 0 !important;
				width: 100%;
			}
			& .Toastify__toast-close {
				align-items: center;
				border-radius: 50%;
				border: none;
				cursor: pointer;
				display: flex;
				height: 21px;
				justify-content: center;
				outline: none;
				padding: 0;
				position: absolute;
				right: -10px;
				top: -10px;
				width: 21px;
				&[data-type="success"] {
					background-color: #008000;
				}
				&[data-type="info"] {
					background-color: #0000ff;
				}
				&[data-type="error"] {
					background-color: #ff0000;
				}
				&[data-type="warning"] {
					background-color: #ffff00;
				}
				&[data-type="default"] {
					background-color: #808080;
				}
			}
			& .Toastify__progress-bar--warning {
				background-color: #ffff00;
			}
			& .Toastify__progress-bar--success {
				background-color: #008000;
			}
			& .Toastify__progress-bar--error {
				background-color: #ff0000;
			}
			& .Toastify__progress-bar--info {
				background-color: #0000ff;
			}
			& .Toastify__progress-bar--default {
				background-color: #808080;
				background-image: none;
			}
		}
	}
`;
const Notifications = () => (
	<StyledElement>
		<ToastContainer {...defaultOptions} />
		<Styles />
		<audio src={Sound} id="react-toastify-sound" />
	</StyledElement>
);
export default Notifications;
