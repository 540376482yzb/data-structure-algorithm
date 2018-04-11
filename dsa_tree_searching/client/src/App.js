import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			trials: null
		}
		this.searchKey = ''
		const databaseStr =
			'89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
		this.database = databaseStr.split(' ').sort((a, b) => {
			return Number(a) - Number(b)
		})

		this.handleChange = this.handleChange.bind(this)
		this.handleLinearSearch = this.handleLinearSearch.bind(this)
		this.handleBinarySearch = this.handleBinarySearch.bind(this)
	}
	handleChange(e) {
		const searchKey = e.target.value
		this.searchKey = searchKey
	}
	handleLinearSearch() {
		for (let i = 0; i < this.database.length; i++) {
			const item = this.database[i]
			if (item === this.searchKey) {
				this.setState({
					trials: i + 1
				})
				return
			}
		}
		return null
	}
	handleBinarySearch() {
		//find medium number
		let end = this.database.length - 1
		let start = 0
		const count = search(this.database, this.searchKey, start, end, 0)
		console.log(count)
		this.setState({
			trials: count
		})
	}
	render() {
		console.log(this.database)
		const { trials } = this.state
		const renderDisplay = (
			<p>
				Found number {this.searchKey} in {this.state.trials} trials
			</p>
		)
		return (
			<div className="App">
				<input id="input" name="input" onChange={this.handleChange} />
				<button aira-controls="search" onClick={this.handleLinearSearch}>
					Linear Search
				</button>
				<button aira-controls="search" onClick={this.handleBinarySearch}>
					Binary Search
				</button>
				<div role="region" id="search" aria-live="polite">
					{trials ? renderDisplay : 'no result'}
				</div>
			</div>
		)
	}
}

//helper functions
function search(database, key, start, end, count) {
	const index = Math.floor((start + end) / 2)
	const medValue = database[index]
	console.log(medValue)
	if (Number(key) === Number(medValue)) {
		return count
	}
	if (start > end) {
		return null
	}
	count += 1
	if (Number(key) < Number(medValue)) {
		return search(database, key, start, index - 1, count)
	}
	if (Number(key) > Number(medValue)) {
		return search(database, key, index + 1, end, count)
	}
}

export default App
