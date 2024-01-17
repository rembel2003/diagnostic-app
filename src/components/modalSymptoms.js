import React, { useState } from 'react';

function SymptomsModal({ isOpen, onClose, onSave }) {
    const [symptoms, setSymptoms] = useState('');

    const handleSave = () => {
        onSave(symptoms);
        setSymptoms('');
        onClose();
    };
    console.log(symptoms)

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center ${
                isOpen ? 'visible' : 'invisible'
            }`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="z-10 bg-white p-4 rounded shadow-md">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Введите симптомы</h2>
                    <button onClick={onClose}>&times;</button>
                </div>
                <input
                    type="text"
                    className="w-full border p-2 mt-2"
                    placeholder="Введите симптомы"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                />
                <button
                    className="bg-regal-red text-white rounded mt-2 px-4 py-2"
                    onClick={handleSave}
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
}

export default SymptomsModal;