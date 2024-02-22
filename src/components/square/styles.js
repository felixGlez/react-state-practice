import styled from 'styled-components';

const StyledSquare = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${({ $color }) => $color};

	//Estableciendo la lógica directamente en el Styled Component (forma correcta)
	// background-color: ${props => (props.$color ? 'green' : 'red')};

	//De forma directamente destructurada: (forma correcta mejorada)
	// background-color: ${({ $color }) => ($color ? 'green' : 'red')};

	display: flex;
	justify-content: center;
	align-items: center;
`;
export { StyledSquare };
