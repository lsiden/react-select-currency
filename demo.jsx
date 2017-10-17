import React from 'react';
import ReactDOM from 'react-dom';
import SelectCurrency from './src'

const debug = require('debug')('select-currency:demo')


class SelectCurrencyDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currencyAbbrev: undefined,
        }
        this.onCurrencySelected = this.onCurrencySelected.bind(this)
        this.componentDidCatch = this.componentDidCatch.bind(this)
    }

    render() {
        const {currencyAbbrev} = this.state
        return (
            <div>
                <SelectCurrency value={currencyAbbrev} onCurrencySelected={this.onCurrencySelected} />
                <br/>
                <div>Selected {currencyAbbrev}</div>
            </div>
        )
    }

    onCurrencySelected(currencyAbbrev) {
        debug(`Selected ${currencyAbbrev}`)
        this.setState({ currencyAbbrev })
        window.localStorage.setItem('initValue', currencyAbbrev)
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
