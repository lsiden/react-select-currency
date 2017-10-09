import React from 'react';
import ReactDOM from 'react-dom';
import SelectCurrency from './src'

const debug = require('debug')('select-currency:demo')

const onSelectedCurrency = currencyAbbrev => {
    debug(`Selected ${currencyAbbrev}`)
}

class SelectCurrencyDemo extends React.Component {
    render() {
        return (
            <div>
                <SelectCurrency value={'USD'} onCurrencySelected={onSelectedCurrency} />
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
