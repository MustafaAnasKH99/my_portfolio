import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Flickity from 'react-flickity-component'
import './flickity.css'

const flickityOptions = {
    initialIndex: 0
}

const compare = (a, b) => {
    const bandA = a.positive_reactions_count;
    const bandB = b.positive_reactions_count;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison*-1;
}

const Articles = () => {
    const [articles, setArticles] = useState()

    useEffect((articles) =>{
        axios.get('https://dev.to/api/articles?username=mustafaanaskh99')
        .then(e =>{
            setArticles(e.data)
        } )     
    }, [])
    if(articles){
        let sortedArticles = [];
        sortedArticles = articles.sort(compare)
        return ( 
            <section>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                >           
                    {
                        
                        sortedArticles.map((article, index) => {
                            return(
                                <div className="tile is-parent drop column is-one-third" key={index}>
                                    <article className="tile is-child blue post">
                                        <h2 className="is-primary"><strong> {article.title} </strong></h2>
                                        
                                        {
                                            article.cover_image ? (
                                                <figure className="image article-image-wrapper">
                                                    <img src={article.cover_image} alt="article-cover" />
                                                </figure>
                                            ) : (
                                                <figure></figure>
                                            )
                                        }
                                        <p className="is-secondary">
                                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                                {article.description}
                                            </a>
                                        </p>
                                        <p>
                                            <span className="tag is-primary">
                                            {article.tags.toString()}
                                            </span>
                                            <br />
                                            <code>interactions: {article.positive_reactions_count}</code>
                                        </p>
                                    </article>
                                </div>
                            )
                        })
                    }
                </Flickity>
            </section>
         );
    } else {
        return(
            <div>
            {console.log('LOADING')}
                <div className="loader is-loading"></div>
            </div>
        )
    }
}
 
export default Articles;