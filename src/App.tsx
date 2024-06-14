import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar.tsx';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [alerts, setAlerts] = useState<{ type: 'primary' | 'success' | 'danger' | 'warning'; id: number }[]>([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const showAlert = (type: 'primary' | 'success' | 'danger' | 'warning') => {
    const newAlert = { type, id: Date.now() };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };

  const closeAlert = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== id));
  };





  return (
    <div className="container mt-5">
      <Navbar/>

      <button className="btn btn-primary" onClick={openModal}>Open Modal</button>

      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={() => showAlert('primary')}>
          Show Primary Alert
        </button>
        <button className="btn btn-success me-2" onClick={() => showAlert('success')}>
          Show Success Alert
        </button>
        <button className="btn btn-danger me-2" onClick={() => showAlert('danger')}>
          Show Danger Alert
        </button>
        <button className="btn btn-warning" onClick={() => showAlert('warning')}>
          Show Warning Alert
        </button>
      </div>

      {alerts.map((alert) => (
        <Alert key={alert.id} type={alert.type} onDismiss={() => closeAlert(alert.id)}>
          This is a {alert.type} type alert
        </Alert>
      ))}

      <Modal
        show={showModal}
        title="Some kinda modal title"
        onClose={closeModal}
      >
        <p>This is modal content</p>
      </Modal>
    </div>
  );
};

export default App;
