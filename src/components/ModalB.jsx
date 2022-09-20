import React, { useEffect, useState } from 'react';

const ModalB = () => {
    const [UsCountriesContact, setUsCountriesContact] = useState([])
    useEffect(() => {
        fetch("https://contact.mediusware.com/api/country-contacts/bangladesh/?page=1&page_size=5")
            .then(response => response.json())
            .then(data => setUsCountriesContact(data.results))

    }, [])
    const SearchHandler = (e) => {
        fetch(`https://contact.mediusware.com/api/country-contacts/${e.target.value}/?page=1&page_size=5`)
            .then(response => response.json())
            .then(data => setUsCountriesContact(data.results))

    }
    return (
        <div>
            <div class="modal fade" id="UsContactModal"   >
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body">
                        <div>
                                <label>All Contacts</label> <br />
                                <button style={{ color: "#46139f" }}>Modal Button A</button>
                            </div>
                            <div>
                                <label>Us Contacts</label> <br />
                                <button style={{ color: "#ff7f50" }}>Modal Button B</button>
                            </div>
                            <div>
                                <label>Close</label> <br />
                                <button style={{ border: "#461395 2px solid", backgroundColor: "white" }} data-bs-dismiss="modal">Modal Button C</button>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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