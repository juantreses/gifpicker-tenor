import React from 'react'

export default function Result({gifs}) {
    
    return (
        <div className="resultGrid">
            {gifs.map(gif => {
                console.log(gif.media[0])
                return (
                    <div className="gifs">
                        <img src={gif.media[0].tinygif.url}></img>
                        
                    </div>
                    )
                })}
        </div>
    )
}
