import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalB = () => {
    const navigate= useNavigate()

    const [UsCountriesContact, setUsCountriesContact] = useState([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        fetch(`https://contact.mediusware.com/api/country-contacts/bangladesh/?page=${pageNumber}`)
            .then(response => response.json())
            .then(data => setUsCountriesContact(data.results))

    }, [])
    const SearchHandler = (e) => {
        fetch(`https://contact.mediusware.com/api/country-contacts/${e.target.value}/?page=1`)
            .then(response => response.json())
            .then(data => setUsCountriesContact(data.results))

    }
    window.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPageNumber(pageNumber + 1)
        }
    }
    const CheckOnlyEven = (e) => {
        if (e.target.checked == false) {
            fetch(`https://contact.mediusware.com/api/contacts/?page=${pageNumber}`)
                .then(response => response.json())
                .then(data => setUsCountriesContact(data.results))

        }
        if (e.target.checked) {
            const EvenCountries = UsCountriesContact.filter((country) => Number(country.id) % 2 === 0)
            setUsCountriesContact(EvenCountries)
        }

    }
    return (
        <div>
            <div  >
                <div >
                    <div >

                        <div >
                        <div>
                                <label>All Contacts</label> <br />
                                <button style={{ color: "#46139f" }} onClick={()=>navigate('/ModalA')}>Modal Button A</button>
                            </div>
                            <div>
                                <label>Us Contacts</label> <br />
                                <button style={{ color: "#ff7f50" }} onClick={()=>navigate('/ModalB')}>Modal Button B</button>
                            </div>
                            <div>
                                <label>Close</label> <br />
                                <button style={{ border: "#461395 2px solid", backgroundColor: "white" }} data-bs-dismiss="modal">Modal Button C</button>
                            </div>
                            <div class="form-check">
                                <input onChange={CheckOnlyEven} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Only even
                                </label>
                            </div>
                            <input onChange={SearchHandler} class="form-control me-2" name='search' type="search" placeholder="Search" aria-label="Search" />

                            <div>
                                {
                                    UsCountriesContact.map((Uscontact) => {
                                        return <ul key={Uscontact.id}>
                                            <li>
                                                id: {Uscontact.id} ,
                                                phone: {Uscontact.phone} ,
                                                phone: {Uscontact.country.name}
                                            </li>
                                        </ul>


                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalB;