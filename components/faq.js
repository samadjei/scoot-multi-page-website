import React from 'react';

const Faq = ({ faq, index, toggleFAQ }) => {
	return (
		<div className={'faq ' + (faq.open ? 'open' : '')} key={index} onClick={() => toggleFAQ(index)}>
			<div className="faq__question">
				<h4 className="faq__question-text">{faq.question}</h4>
			</div>
			<p className="faq--answer">{faq.answer}</p>
		</div>
	);
};

export default Faq;
