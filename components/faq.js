import React from 'react';

const Faq = ({ faq, index, toggleFAQ }) => {
	return (
		<div className={'faq ' + (faq.open ? 'open' : '')} key={index} onClick={() => toggleFAQ(index)}>
			<h4 className="faq--question">{faq.question}</h4>
			<p className="faq--answer">{faq.answer}</p>
		</div>
	);
};

export default Faq;
