import React, { useState, useEffect } from 'react';

function PresentationForm () {
    const [data, setData] = useState({
        presenter_name: '',
        presenter_email:'',
        company_name:'',
        title: '',
        synopsis:'',
        conference:''
    });

    const [conferences, setConferences] = useState([]);

    const fetchData = async() => {
        const url = 'http://localhost:8000/api/conferences/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setConferences(data.conferences);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({...prevData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const conferenceId = data.conference;
        const conferenceUrl = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            const newConference = await response.json();
            setData({
                presenter_name: '',
                presenter_email: '',
                company_name: '',
                title: '',
                synopsis: '',
                conference: ''
            });
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new presentation</h1>
                    <form onSubmit={handleSubmit} id="create-presentation-form">
                        <div className="form-floating mb-3">
                            <input
                                value={data.presenter_name}
                                onChange={handleChange}
                                placeholder="Presenter name"
                                required
                                type="text"
                                name="presenter_name"
                                id="presenter_name"
                                className="form-control" />
                            <label htmlFor="presenter_name">Presenter name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={data.presenter_email}
                                onChange={handleChange}
                                placeholder="Presenter email"
                                required
                                type="email"
                                name="presenter_email"
                                id="presenter_email"
                                className="form-control" />
                            <label htmlFor="presenter_email">Presenter email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={data.company_name}
                                onChange={handleChange}
                                placeholder="Company name"
                                type="text"
                                name="company_name"
                                id="company_name"
                                className="form-control" />
                            <label htmlFor="company_name">Company name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={data.title}
                                onChange={handleChange}
                                placeholder="Title"
                                required
                                type="text"
                                name="title"
                                id="title"
                                className="form-control" />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="synopsis">Synopsis</label>
                            <textarea
                                value={data.synopsis}
                                onChange={handleChange}
                                className="form-control"
                                id="synopsis"
                                rows="3"
                                name="synopsis" />
                        </div>
                        <div className="mb-3">
                            <select
                                value={data.conference}
                                onChange={handleChange}
                                required
                                name="conference"
                                id="conference"
                                className="form-select">
                                <option value="">Choose a conference</option>
                                {conferences.map(conference => {
                                    return (
                                        <option key={conference.id} value={conference.id}>
                                            {conference.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default PresentationForm
