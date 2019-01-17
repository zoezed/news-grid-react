import React from 'react';

export function NewsItem(props) {
    const dItem = props.item.title;
    const image = props.item.urlToImage;
    const url = props.item.url;
    console.log(props);

    return (
        <div className='column'>
            <a href={url} target='blank' title={dItem}><img src={image} /></a>
            <div className='text-over'>
                <a href={url} target='blank'>{dItem}</a> 
            </div>                          
        </div>
    )
}