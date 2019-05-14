import React from 'react'
import {connect} from 'react-redux'

const SongDetails = ({song}) => {
    if(!song){
        return(
            <div>Please select a song</div>
        )
    }
    return(
        <div>
            <h1>Details of:</h1>
            <h3>{song.title}</h3>
            <p>{song.duration}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps) (SongDetails)

