import React from 'react';
import ReactDOM from 'react-dom';
import SelectCurrency from './src'

const debug = require('debug')('select-currency:demo')

// TODO put this inside class
const onSelectedCurrency = currencyAbbrev => {
    debug(`Selected ${currencyAbbrev}`)
    window.localStorage.setItem('initValue', currencyAbbrev)
}

const initValue = window.localStorage.getItem('initValue') || ''

class SelectCurrencyDemo extends React.Component {
    render() {
        return (
            <div>
                <SelectCurrency value={initValue} onCurrencySelected={onSelectedCurrency} />

                {/* TODO - Selected currency: ___
                  */}
            </div>
        )
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }
}

(function mountDemo() {
    const el = document.getElementById('demo-mountpoint')

    if (el) {
        ReactDOM.render(<SelectCurrencyDemo />, el)
    }
})()
