import React, { useState } from 'react';

const Problem1 = () => {
    const [FilteredPersons, setFilteredPersons] = useState([])
    const [show, setShow] = useState('all');
    const [Name, setName] = useState("")
    const [Status, setStatus] = useState("")
    const [Persons, setPersons] = useState([])

    const FormSubmitHandler = async (e) => {
        event.preventDefault();
        const NewPerson = {
            Name,
            Status
        }
        if (Name && Status) {
            if (Persons.length === 0) {
                setPersons([{
                    Name,
                    Status
                }])
                setStatus('')
                setName("")
            }
            else {
                setPersons([...Persons, NewPerson])
                setStatus('')
                setName("")
            }


        }

    }
    localStorage.setItem('persons', JSON.stringify(Persons))
    const handleClick = (val) => {
        setShow(val);
        const persons = (JSON.parse(localStorage.getItem('persons')));
        if (show) {
            const NewPersons = persons.filter(person => person.Status == val);
            console.log(NewPersons)
            setFilteredPersons(NewPersons)
        }
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={FormSubmitHandler} id="AddPersonsForm" className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input value={Name}
                                name="name" onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input
                                value={Status}
                                name="status" onChange={(e) => setStatus(e.target.value)} type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button onClick={FormSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                FilteredPersons.length > 0 ? FilteredPersons.map((person, key) => {
                                    return <tr key={key}>
                                        <th>{person.Name}</th>
                                        <th>{person.Status}</th>
                                    </tr>

                                }) : Persons.map((person) => {
                                    return <tr key={person.Name}>
                                        <th>{person.Name}</th>
                                        <th>{person.Status}</th>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;