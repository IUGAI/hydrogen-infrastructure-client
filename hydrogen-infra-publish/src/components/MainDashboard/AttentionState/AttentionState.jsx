import './AttentionState.scss'
import GraphAttention from './GraphAttention/GraphAttention'

function AttentionState() {
    return (
        <div className='state-content'>
                  <img src="./img/marker.png" className="" />
                  <div className="top">
                    <span className="title-text">주요 상태</span>
                  </div>
                  <div className="bottom">
                    <GraphAttention/>
                    <GraphAttention/>
                    <GraphAttention/>
                    <GraphAttention/>
                  </div>
        </div>
    )
}

export default AttentionState
