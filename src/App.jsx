import Counter from './components/counter/Counter';

const App = () => {
	return (
		<>
			<Counter>
				<p>Soy un contador</p>
			</Counter>
		</>
		// Repaso de Children: Children es una prop automática, y se utiliza cuando pasas contenido entre la etiqueta de apertura y de cierre de un componente. En este caso, Counter tiene entre medias un <p> en este caso, por lo tanto en Counter hay que usar children.
	);
};

export default App;
