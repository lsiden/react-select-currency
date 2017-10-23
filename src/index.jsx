import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AutoSuggest from 'react-autosuggest'
import LocaleCurrency from 'locale-currency'
import cc from 'country-code'
import _ from 'lodash'

import 'flag-icon-css/css/flag-icon.css'
import './style.css'

const debug = require('debug')('select-currency:info')
const countries = associateCurrencies(countriesWithCurrency(cc.countries))

function associateCurrencies(countries) {
	return _.map(countries, country => ({
		...country,
		currencyCode: LocaleCurrency.getCurrency(country.alpha2),
	}))
}

function countriesWithCurrency(countries) {
	return _.filter(countries, country => !!LocaleCurrency.getCurrency(country.alpha2))
}

function stringStartsWith(s, fragment) {
	return s.indexOf(fragment) === 0
}

function stringContains(s, fragment) {
	return s.indexOf(fragment) !== -1
}

function getSuggestions(arg='') {
	const value = arg.trim().toUpperCase()
	return value === '' ? countries
		: _.filter(countries, country => {
			return stringStartsWith(country.currencyCode, value)
			|| stringContains(country.name.toUpperCase(), value)
		})
}

function getSuggestionValue(country) {
	return country.currencyCode
}

function renderSuggestion({name, alpha2: countryCode, currencyCode}) {
	const iconClasses = classNames('flag-icon', `flag-icon-${countryCode.toLowerCase()}`)
	return(
		<div className="inputContainer">
			<span className={iconClasses} />
			&nbsp;<span className="country-name">{name} ({currencyCode})</span>
		</div>
	)
}

export default class extends React.Component {

	static propTypes = {
		onChange: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		value: PropTypes.string,
	};
	static defaultProps = {
		value: '',
	}

	constructor(props) {
		super(props)
		this.state = {
			value: props.value,
			suggestions: getSuggestions(props.value),
		}
	}

	onChange = (ev, { newValue }) => {
		this.setState({ value: newValue })
	}

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({ suggestions: getSuggestions(value) })
	}

	onSuggestionsClearRequested = () => {
		this.setState({ suggestions: [] });
	}

	// https://github.com/moroshko/react-autosuggest#onsuggestionselected-optional
	onSuggestionSelected = (ev, { suggestionValue }) => {
		const { name } = this.props
		this.props.onChange({target: {
			name,
			value: suggestionValue,
		}})
	}

	componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
	}

	render() {
	    const { value, suggestions } = this.state
	    const { onChange, name, ...passProps } = this.props
	    const inputProps = {
			...passProps,
			value,
			placeholder: "USD or United...",
			onChange: this.onChange,
	    }
		return (
			<div className="select-currency">
				<AutoSuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					getSuggestionSelected={getSuggestionValue}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
					shouldRenderSuggestions={ () => true }
					onSuggestionSelected={this.onSuggestionSelected}
				/>
			</div>
		)
	}
}
