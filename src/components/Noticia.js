import React from 'react'

export const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia;

    return (
        <div className="col s12 m6 14">
            <div className="card">
                <div className="card-image">
                    {
                        ( urlToImage ) && <img src={ urlToImage } alt={ title }/>
                    }
                    <span className="card-title">{ source.name}</span>
                </div>

                <div className="card-content">
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                </div>

                <div className="card-action">
                    <a href={ url }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    )
}
