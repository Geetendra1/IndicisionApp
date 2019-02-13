console.log('app.js is running');

const app = {
    title: 'some title',
    subtitle: 'this my subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
};


const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your ootions' : 'no optons'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do</button>
            <button onClick={onRemoveAll}>remove all</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)

};
render();
