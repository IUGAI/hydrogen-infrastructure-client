import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";


function SearchButtons() {
    return (
        <>
          <div className="search-input-item">
            <button className="button-search">
              <CiSearch size={24} />
              검색
            </button>
          </div>
          <div className="search-input-item">
            <button className="button-search">
              <GrPowerReset size={24} />
              초기화
            </button>
          </div>
        </>
    )
}

export default SearchButtons
