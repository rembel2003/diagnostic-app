import React, { useState } from 'react';

const ModalPacient = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        age: '',
        gender: 'male',
        anamnesis: '',
        diseases: [{ name: '', date: '', symptoms: '' }],
    });
    const submitPatientData = async () => {
        try {
            const response = await fetch('http://localhost:5000/patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const result = await response.json();
            console.log(result.message);
            // Обработка успешного добавления пациента
            // Например, можно закрыть модальное окно или очистить форму
            onClose(); // Если предположить, что у вас есть такая функция
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            // Обработка ошибки отправки данных
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submitPatientData();
    };

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleDiseaseChange = (e, index, field) => {
        const updatedDiseases = [...formData.diseases];
        updatedDiseases[index][field] = e.target.value;
        setFormData({
            ...formData,
            diseases: updatedDiseases,
        });
    };

    const handleAddDisease = () => {
        setFormData({
            ...formData,
            diseases: [...formData.diseases, { name: '', date: '', symptoms: '' }],
        });
    };

    const handleRemoveDisease = (index) => {
        const updatedDiseases = [...formData.diseases];
        updatedDiseases.splice(index, 1);
        setFormData({
            ...formData,
            diseases: updatedDiseases,
        });
    };


    return (
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-8 mx-auto max-w-2xl rounded shadow-lg">
                <span className="close cursor-pointer absolute top-0 right-0 mt-4 mr-4 text-gray-600" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    {/* Поля для ввода данных о пациенте */}
                    <div className="col-span-1">
                        <label htmlFor="first_name">Имя:</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            onChange={(e) => handleChange(e, 'first_name')}
                            value={formData.first_name}
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="last_name">Фамилия:</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            onChange={(e) => handleChange(e, 'last_name')}
                            value={formData.last_name}
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="age">Возраст:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            onChange={(e) => handleChange(e, 'age')}
                            value={formData.age}
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="gender">Пол:</label>
                        <select
                            id="gender"
                            name="gender"
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            onChange={(e) => handleChange(e, 'gender')}
                            value={formData.gender}
                            required
                        >
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="anamnesis">Анамнез:</label>
                        <textarea
                            id="anamnesis"
                            name="anamnesis"
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            rows="4"
                            onChange={(e) => handleChange(e, 'anamnesis')}
                            value={formData.anamnesis}
                        ></textarea>
                    </div>

                    {/* Поля для ввода данных о заболеваниях */}
                    {formData.diseases.map((disease, index) => (
                        <React.Fragment key={index}>
                            <div className="col-span-2">
                                <label htmlFor={`diseaseName${index}`}>Болезнь:</label>
                                <input
                                    type="text"
                                    id={`diseaseName${index}`}
                                    name={`diseaseName${index}`}
                                    className="block w-full mt-2 p-2 border border-gray-300 rounded"
                                    onChange={(e) => handleDiseaseChange(e, index, 'name')}
                                    value={disease.name}
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor={`symptoms${index}`}>Симптомы:</label>
                                <textarea
                                    id={`symptoms${index}`}
                                    name={`symptoms${index}`}
                                    className="block w-full mt-2 p-2 border border-gray-300 rounded"
                                    rows="2"
                                    onChange={(e) => handleDiseaseChange(e, index, 'symptoms')}
                                    value={disease.symptoms}
                                    required
                                ></textarea>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor={`date${index}`}>Дата:</label>
                                <input
                                    type="date"
                                    id={`date${index}`}
                                    name={`date${index}`}
                                    className="block w-full mt-2 p-2 border border-gray-300 rounded"
                                    onChange={(e) => handleDiseaseChange(e, index, 'date')}
                                    value={disease.date}
                                    required
                                />
                            </div>
                            {formData.diseases.length > 1 && (
                                <div className="col-span-2">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white p-2 rounded"
                                        onClick={() => handleRemoveDisease(index)}
                                    >
                                        Удалить болезнь
                                    </button>
                                </div>
                            )}
                        </React.Fragment>
                    ))}

                    <div className="col-span-2">
                        <button
                            type="button"
                            className="bg-green-500 text-white p-2 rounded"
                            onClick={handleAddDisease}
                        >
                            Добавить болезнь
                        </button>
                    </div>

                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            Добавить пациента
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalPacient;
