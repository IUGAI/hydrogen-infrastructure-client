import './CurentSituationValue.scss'

function CurentSitutationValue({item}) {

     const {id, name, quantity} = item;
    return (
        <div className='curent-situation-value'>
          <div className="top-value">
            <span className='curent-text-name'>
            {name}
            </span>
          </div>
          <div className="bottom-value">
            <span className={id === 4 ? 'curent-text-quantity active' : 'curent-text-quantity'}>
            {quantity}
            </span>
          </div>
        </div>
    )
}

export default CurentSitutationValue
