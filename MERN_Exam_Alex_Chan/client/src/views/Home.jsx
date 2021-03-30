// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import '../App.css';
// import MessageBox from './MessageBox'
// import MessageThread from './MessageThread'
import { Link, navigate } from '@reach/router';
import PageHeader from '../components/PageHeader';
import ResultsTable from '../components/ResultsTable'

const Home = () => {

    // const newPetsLink = () => {
    //     return (
    //         <Link to="/pets/new">Add A New Pet</Link>
    //     )
    // }

    return (
        <div>
            <PageHeader main="Pet Shelter" sub="These pets are looking for a good home" link="/pets/new" linkTitle="Add a new pet"></PageHeader>
            <ResultsTable></ResultsTable>
        </div>
        
    )
}

export default Home