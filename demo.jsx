import React from 'react';
import ReactDOM from 'react-dom';
import SelectCurrency from './src'

const debug = require('debug')('select-currency:demo')

const style = {
    fontWeight: 'bold',
}

class SelectCurrencyDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyAbbrev: '',
        }
        this.onChange = this.onChange.bind(this)
        this.componentDidCatch = this.componentDidCatch.bind(this)
    }

    render() {
        const {currencyAbbrev} = this.state
        return (
            <div>
                <form onSubmit={ev => ev.preventDefault()} >
                    <label style={style} htmlFor="select-currency">Currency</label>
                    <SelectCurrency id={'select-currency'} name={'currency'} value={currencyAbbrev} onChange={this.onChange} />
                </form>
                { !!currencyAbbrev && <div>Selected {currencyAbbrev}</div> }
            </div>
        )
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    onChange(ev) {
        const { name, value } = ev.target
        this.setState({ currencyAbbrev: value })
        window.localStorage.setItem('initValue', value)
    }

    // Error fence
    componentDidCatch(error, info) {}
}

(function mountDemo() {
    const el = document.getElementById('demo-mountpoint')

    if (el) {
        ReactDOM.render(<SelectCurrencyDemo />, el)
    }
})()
