import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faPlay, faPause,  faForward, faBackward } from '@fortawesome/free-solid-svg-icons'


const PlayerControl = (props) => {
    return ( 
        <div>
        <div className="c-player-controls">
            
            <button className="skip-btn"  onClick= {() => props.SkipSong(false)}>
          <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
            </button>

             <button className="play-btn" onClick={()=> props.setIsPlaying(!props.isPlaying)}>
          <FontAwesomeIcon icon={props.isPlaying?faPause : faPlay}></FontAwesomeIcon>
             </button>
            
             <button className="skip-btn" onClick= {() => props.SkipSong()}>
           <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
             </button>
        </div>

        </div>
     );
}
 
export default PlayerControl;

