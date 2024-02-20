const Button = ({ children, action }) => {
	// Se podría enviar como prop el contenido del botón desde Counter.jsx, pero normalmente se hace así, con children, que es el contenido de la etiqueta:
	return (
		<>
			<button onClick={action}>{children}</button>
			{/* El onClick lo ponemos aquí, ya que es una etiqueta html. No podríamos ponerle el onclick al componente <Button /> */}
		</>
	);
};
export default Button;
