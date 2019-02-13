class IndicisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlleDeleteOtions = this.handlleDeleteOtions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlleDeleteOption = this.handlleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try { 
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options){
                this.setState(() => ({ options: options}));
            }

        } catch (e) {
            //do nothing
        }
       
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            
        }
    }
    componentWillUnMount(){
        console.log('componentwillunmount');
    }
    
    handlleDeleteOtions() {
        this.setState(() => ({ options: [] }));
    }
    handlleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick()  {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleAddOption(option){
        if (!option) {
            return 'enter valid value';
        } else if (this.state.options.indexOf(option) >-1) {
            return 'this option alreday exist'
        } 

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
        }));
    }
    render() {
        const title = "indisicion";
        const subtitle = "put for life in yoyr hand";
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options
                 options={this.state.options}
                 handlleDeleteOtions={this.handlleDeleteOtions} 
                 handlleDeleteOption={this.handlleDeleteOption}                />
                <AddOptions 
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndicisionApp.defaultProps ={
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indicision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
            what should i do
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handlleDeleteOtions}>remove all</button>
            {props.options.length === 0 && <p>please add options</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option}
                    optionText={option}
                    handlleDeleteOption={props.handlleDeleteOption}
                    />
                ))
            }
        </div>
    );

};

const Option = (props) => {
        return(
            <div>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handlleDeleteOption(props.optionText);
                    }}
                >
                    remove
                </button>
            </div>
        );
};

class AddOptions extends React.Component {
    constructor(props) {
        super(props); 
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }));
    

    }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>add options</button>
                </form>
            </div>

        );
    }
}

ReactDOM.render(<IndicisionApp />, document.getElementById('app'));