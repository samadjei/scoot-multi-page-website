import React from 'react';

const drivingFaq = ({ faq, index, switchFaq }) => {
	return (
		<div className={'faq ' + (faq.open ? 'open' : '')} key={index} onClick={() => switchFaq(index)}>
			<div className="faq__question">
				<h4 className="faq--question-text">{faq.question}</h4>
			</div>
			<p className="faq--answer">{faq.answer}</p>
		</div>
	);
};

export default drivingFaq;
