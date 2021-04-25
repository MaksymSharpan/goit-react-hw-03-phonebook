import React, { Component } from "react"
// import PropTypes from 'prop-types';
import { initialState } from "./initialState"

const fields = {
	name: {
		type: "text",
		pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
		title:
			"Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
	},
	number: {
		type: "tel",
		// pattern: '/^(+)?((d{2,3}) ?d|d)(([ -]?d)|( ?(d{2,3}) ?)){5,12}d$/',
		pattern: "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
		title: "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
	},
}

class ContactForm extends Component {
	state = { ...initialState }

	//Отвечает за обновление состояния
	handleChange = (event) => {
		const { name, value } = event.currentTarget
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
		this.resetForm()
	}

	resetForm() {
		this.setState({
			name: "",
			number: "",
		})
	}

	render() {
		const { name, number } = this.state
		const { handleSubmit, handleChange } = this
		// console.log({ ...initialState });
		// const form = document.querySelector('form');
		// console.log(form);
		return (
			<>
				<form onSubmit={handleSubmit}>
					<label>
						<p>Name</p>
						<input value={name} onChange={handleChange} name="name" {...fields.name} required />
					</label>
					<label>
						<p>Number</p>
						<input value={number} onChange={handleChange} name="number" {...fields.number} required />
					</label>
					<br />
					<button type="submit">Add contact</button>
				</form>
			</>
		)
	}
}

export default ContactForm
