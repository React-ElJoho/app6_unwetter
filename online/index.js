const values =[
	{
		name : 'der Sturm',
		img : 'imgs/derSturm.jpg',
		merkmal : ['imgs/Wind.png','imgs/Regnen.png'],
		biom : ['das Strand','der Ozean'],
		jahreszeit : ['der Winter']
	},
	{
		name : 'das Hochwasser',
		img : 'imgs/dasHochwasser.jpg',
		merkmal : ['imgs/Hochwasser.png','imgs/Regnen.png'],
		biom : ['die Mangrove','das Moor'],
		jahreszeit : ['der Winter']
	},
	{
		name : 'das Gewitter',
		img : 'imgs/dasGewitter.jpg',
		merkmal : ['imgs/Blitz.png','imgs/Wolke.png'],
		biom : ['Maracaibo, Venezuela','Kahuzi-Biega,Congo'],
		jahreszeit : ['Ich wisse nicht']
	},
	{
		name : 'der Schnee',
		img : 'imgs/derSchnee.jpg',
		merkmal : ['imgs/Schnee.png','imgs/kalte.png','imgs/kalte.png'],
		biom : ['das Hochgebirge'],
		jahreszeit : ['das Hochgebirge']
	},
	{
		name : 'der Nebel',
		img : 'imgs/derNebel.jpg',
		merkmal : ['imgs/Wolke.png','imgs/kalte.png'],
		biom : ['die Tundra'],
		jahreszeit : ['die Tundra']
	},
	{
		name : 'der Hagel',
		img : 'imgs/derHagel.jpg',
		merkmal : ['imgs/Eis.png','imgs/Regnen.png','imgs/kalte.png'],
		biom : ['Ich wisse nicht'],
		jahreszeit : ['der Winter']
	},
	{
		name : 'die Dürre',
		img : 'imgs/dieDurre.jpg',
		merkmal : ['imgs/Sonne.png','imgs/Sonne.png','imgs/Warm.png'],
		biom : ['die Wüsste'],
		jahreszeit : ['der Sommer']
	},
	{
		name : 'der Orkan',
		img : 'imgs/derOrkan.jpg',
		merkmal : ['imgs/Regnen.png','imgs/Regnen.png','imgs/Wind.png','imgs/Wind.png'],
		biom : ['das Strand','der Ozean'],
		jahreszeit : ['Ich wisse nicht']
	}
]

/*
	Este pequeño proyecto puede hacer muchas fichas para mostrar informacion de los temporales.
	Dieses kleine Proyekt können vielen Karteikarten um Information des Unwetters zu zeigen machen .
*/

function UNWETTERE(props){
	/*
		Die	 Funktion, die UNWETTERE nennt, baut eine List in HTML mit alle Karteikarten des Unwetters.
		Zuerst  bekommt die Funktion Beschaffenheit, die props 
		(beim das Wort "properties" auf Englisch) nennt und die Variable nennt UNWETTERE hat.

		Die Variable UNWETTERE ist ein "Array" oder eine List mit alle Informationen des verscheidenen
		Unwettere. 
	*/

	let UNWETTERE = new Array();
	/*
		Hier die List des Unwettere wird gebaut
	*/
	

	for(let i=0;i < props.UNWETTERE.length;i++){
		UNWETTERE.push( <UNWETTER UNWETTER={props.UNWETTERE[i]} key={i}/>)
	}
	/*
		der Zyklus "for" überliest die Variable "props.UNWETTERE" und macht eine Karteikarte des Unwetter.
		Dann trägt der Zyklus jede UNWETTER des List des props.UNWETTERE ein an der List (Array) UNWETTERE.
	*/


	return(
		<div id="root">
			<h1>UNWETTERE</h1>
			{UNWETTERE}
		</div>	
	);
	/*
		Die Funktion endlich gibt ein HTML mit einem Titel <h1> und die List des Unwettere
	*/
}

class UNWETTER extends React.Component{
	/*

	*/
	constructor(props){
		super(props);
		this.props = props;
		this.name = props.UNWETTER.name;
		this.state = {	
			onToggable : true	
		};
		this.container = React.createRef();
	}
	onToggable(){
		this.setState({		onToggable:!this.state.onToggable});
		if(this.state.onToggable == true){
			this.container.current.style.maxHeight = '1000px';
		}else{
			this.container.current.style.maxHeight = '34px';
		}
	}
	render(){
		return(
			<section  ref={this.container}  className="UNWETTER">
				<button onClick={this.onToggable.bind(this)}>
					<h2>{this.name}</h2>
				</button>
				<UNWETTER_container UNWETTER={this.props.UNWETTER}/>
			</section>
		);
	}
}

function UNWETTER_container(props){

	return(
		<div className="UNWETTER_container">
			<img src={props.UNWETTER.img} />
			<hr />
			<UNWETTER_merkmal UNWETTER={props.UNWETTER} />
			<hr />
			<BiomOrJahreszeit UNWETTER={props.UNWETTER} BorJ={true} />
			<hr />
			<BiomOrJahreszeit UNWETTER={props.UNWETTER} BorJ={false} />
		</div>
	);
}

function UNWETTER_merkmal(props){
	const Merkmal = new Array();
	for (let i = 0; i < props.UNWETTER.merkmal.length ; i++) {
		Merkmal.push(<img src={props.UNWETTER.merkmal[i]} key={i}/>)	
	}
	return(
		<div className="UNWETTER_MERKMAL">
			<h2>das Merkmal(e)</h2>
			<div className="UNWETTER_img">
				{Merkmal}
			</div>
		</div>
	);
}

function BiomOrJahreszeit(props){
	let biomOrJahreszeit = new Array();
	let nameBox="";
	let nClass = "";
	if(props.BorJ){
		biomOrJahreszeit = props.UNWETTER.biom.map( (title,i) => <a key={i} ><h3>{title}</h3></a> );
		nameBox = "das Biom(e)";
		nClass = "BIOM";
	}else{
		biomOrJahreszeit = props.UNWETTER.jahreszeit.map( (title,i) => <a key={i}><h3>{title}</h3></a> );;
		nameBox = "die Jahreszeit"
		nClass = "JAHRESZEIT";
	}
	
	
	return(
		<div className={"UNWETTER_"+nClass}>
			<h2>{nameBox}</h2>
			<div className="UNWETTER_item">
				{biomOrJahreszeit}
			</div>
		</div>
	);
}


ReactDOM.render(
	<UNWETTERE UNWETTERE={values} />,
	document.getElementById('root')
);
