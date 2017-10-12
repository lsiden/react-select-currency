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
    }
    render() {
        const {currencyAbbrev} = this.state
        return (
            <div>
                <SelectCurrency value={currencyAbbrev} onCurrencySelected={this.onSelectedCurrency} />

                {/* TODO - Selected currency: ___
                  */}
            </div>
        )
    }

    onSelectedCurrency(currencyAbbrev) {
        debug(`Selected ${currencyAbbrev}`)
        window.localStorage.setItem('initValue', currencyAbbrev)
    }

    componentWillMount() {
        const initValue = window.localStorage.getItem('initValue') || ''
        debug(`componentDidMount(), initValue=${initValue}`)
        this.setState({ currencyAbbrev: initValue })
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
