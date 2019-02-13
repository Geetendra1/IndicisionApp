import React from 'react';
import AddOptions from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndicisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handlleDeleteOtions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleClearSelectedModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };


    handlleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () =>  {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) >-1) {
            return 'This option alreday exist'
        } 

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
        }));
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
    
   
    render() {
        const title = "indisicion";
        const subtitle = "Put your life in the hands of computer ";
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                    <Options
                        options={this.state.options}
                        handlleDeleteOtions={this.handlleDeleteOtions} 
                        handlleDeleteOption={this.handlleDeleteOption}                />
                    <AddOptions 
                        handleAddOption={this.handleAddOption}
                    />
                    
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedModal={this.handleClearSelectedModal}
                    />
            </div>
        );
    }
}

IndicisionApp.defaultProps ={
    options: []
};
