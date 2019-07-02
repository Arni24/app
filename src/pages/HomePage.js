import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "11111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat facilis expedita illo sint provident eaque quisquam vero accusamus amet, soluta nam qui blanditiis modi, odit commodi est, molestiae reiciendis."
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Ania Kwiatkowska",
        text: "22222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat facilis expedita illo sint provident eaque quisquam vero accusamus amet, soluta nam qui blanditiis modi, odit commodi est, molestiae reiciendis."
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Jan Kowalski",
        text: "333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat facilis expedita illo sint provident eaque quisquam vero accusamus amet, soluta nam qui blanditiis modi, odit commodi est, molestiae reiciendis."
    }
]
const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;