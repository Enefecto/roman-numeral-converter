import React, { useState } from 'react'
import './Converter.css'

const Converter = () => {
  
	const [titles, settitles] = useState(false);
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState('');


	const turnTitles = () => {
		titles ? settitles(false) : settitles(true);
	}
  
	const updateStateFirst = (e) => {

	}

	const updateStateSecond = (e) => {

	}

	const convert = () => {

		const romans = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
		const arabic = [1,4,5,9,10,40,50,90,100,400,500,900,100];
		
		if (!titles){
			for (let i = 0; i < 13; i++) {

				
			}
		} else {

		}
	}

	return (
		<div className="img">
			<div className='conteiner'>
				<h1>Enter The Roman Numeral</h1>
				<div className='inputs'>
					<h2>{titles ? 'Arabic' : 'Roman'} Numerals</h2>
					<input type='text' onChange={ e => updateStateFirst(e)} />
				</div>
				<div className='switch-conteiner'>
					<svg onClick={turnTitles} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-sort" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="#56d364" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M3 9l4 -4l4 4m-4 -4v14" />
						<path d="M21 15l-4 4l-4 -4m4 4v-14" />
					</svg>
				</div>
				<div className="inputs">
					<h2>{titles ? 'Roman' : 'Arabic'} Numerals</h2>
					<input type='text' onChange={ e => updateStateSecond(e)} />
				</div>
				<div className='down-conteiner'>
					<button onClick={convert}>Convert</button>
				</div>
			</div>
		</div>
  )
}

export default Converter;