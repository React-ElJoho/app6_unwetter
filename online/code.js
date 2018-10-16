const code = {
	UNWETTERE :
	`	class UNWETTER extends React.Component{
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
	}`
	,
	UNWETTER : 
	`	function UNWETTER_container(props){

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
	}`
	,
	UNWETTER_container :
	`	function UNWETTER_merkmal(props){
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
	}`
	,
	UNWETTER_merkmal :
	`	function BiomOrJahreszeit(props){
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
	}`
	,
	BiomOrJahreszeit :
	`	function UNWETTERE(props){

		let UNWETTERE = new Array();
		for(let i=0;i < props.UNWETTERE.length;i++){
			UNWETTERE.push( <UNWETTER UNWETTER={props.UNWETTERE[i]} key={i}/>)
		}
		return(
			<div id="root">
				<h1>UNWETTERE</h1>
				{UNWETTERE}
			</div>	
		);
	}`
}

export default code;

function Code(props){
	const codes = props.Code.split('\n');
	const txtCode = new Array();
	for(let i=0;i < codes.length ;i++){
		txtCode.push(	<p className="lineCode" key={i}>{i.toString()+'.    '+codes[i]}</p>	);
	}
	return(
		<div>{txtCode}</div>);
}
