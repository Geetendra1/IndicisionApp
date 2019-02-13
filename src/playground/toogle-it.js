class ToogleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToogleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            };
        });

    }
    render() {
        return (
            <div>
                <h1>visibilaty toogle</h1>
                <button onClick={this.handleToogleVisibility}>
                    {this.state.visibility ? 'hide details' : 'show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>these are some details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<ToogleVisibility/>, document.getElementById('app'));


































// let visibility = false;

// const toogleVisibility = () => {
//     visibility = !visibility;
//     render();
// };
// const render = () => {
    // const jsx = (
    //     <div>
    //         <h1>visibilaty toogle</h1>
    //         <button onClick={toogleVisibility}>
    //             {visibility ? 'hide details' : 'show details'}
    //         </button>
    //         {visibility && (
    //             <div>
    //                 <p>these are some details</p>
    //             </div>
    //         )}
    //     </div>
    // );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();