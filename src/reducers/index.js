import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'Somewhere over the rainbow', duration: '3:15'},
        {title: 'Eye of the tiger', duration: '3:45'},
        {title: 'No easy way out', duration: '4:15'},
        {title: 'Shallow - Lady Gaga & Bradly Cooper', duration: '4:20'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
