import '../styles/App.scss';
import { useState } from 'react';
import Preview from './Preview';
import Form from './Form';

const App = () => {
  /* Let's do magic! 🦄🦄🦄 */

  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular');
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // events

  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    setLegalTerms(checked);
  };

  const handleForm = () => {
    console.log('Enviando datos al servidor...');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  return (
    // HTML ✨

    <div>
      <Form
        name={name}
        email={email}
        region={region}
        paymentType={paymentType}
        legalTerms={legalTerms}
        handleName={handleName}
        handleEmail={handleEmail}
        handleRegion={handleRegion}
        handlePaymentType={handlePaymentType}
        handleLegalTerms={handleLegalTerms}
        handleForm={handleForm}
        handleReset={handleReset}
      />

      <Preview
        name={name}
        email={email}
        region={region}
        paymentType={paymentType}
        legalTerms={legalTerms}
      />
    </div>
  );
};

export default App;
