import GraphAttentionStatistic from "../MainDashboard/AttentionState/GraphAttention/GraphAttentionStatistic"

function StationFailureBarStatistic({graphItems, graphItemsState}) {
    return (
        <div className="left">
        <div className="staion-failure-type">
          <div className="station-failrute-type-wrapper">
            <div className="station-failure-type-top">
              {graphItems.map((graphItem) => (
                <GraphAttentionStatistic
                  key={graphItem.id}
                  items={graphItem}
                />
              ))}
            </div>
            <div className="station-failure-type-top-right">
            <ul>
                <li><div className="item-category"></div> A type</li>
                <li><div className="item-category typeb"></div> B type</li>
                <li><div className="item-category typec"></div> C type</li>
                <li><div className="item-category typed"></div> D type</li>
              </ul>
            </div>
          </div>
          <div className="station-failure-type-inner">
            <span className="">고장 종류</span>
          </div>
        </div>
        <div className="staion-failure-type">
          <div className="station-failrute-type-wrapper">
            <div className="station-failure-type-top">
              {graphItemsState.map((graphItem) => (
                <GraphAttentionStatistic
                  key={graphItem.id}
                  items={graphItem}
                />
              ))}
            </div>
            <div className="station-failure-type-top-right">
              <ul>
                <li><div className="item-category"></div> 처리 완료</li>
                <li><div className="item-category typec"></div> 작업중</li>
                <li><div className="item-category typed"></div> 대기</li>
              </ul>
            </div>
          </div>
          <div className="station-failure-type-inner">
            <span className="">상태</span>
          </div>
        </div>
      </div>
    )
}

export default StationFailureBarStatistic
