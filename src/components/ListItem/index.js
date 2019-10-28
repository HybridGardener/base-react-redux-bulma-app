import React from 'react'

const ListItem = ({ avatar }) => {
    return (
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img alt="avatar" src={avatar} />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>Hey</h1>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                        <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                        </a>
                        <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                        </a>
                        <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                        </a>
                    </div>
                </nav>
            </div>
            <div class="media-right">
                <button class="delete"></button>
            </div>
        </article>
    )
}
export default ListItem; 