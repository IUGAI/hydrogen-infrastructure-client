import DatePicker from "react-datepicker";
import { useState } from "react";
import {format} from 'date-fns'
import ko from "date-fns/locale/ko";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import '../../components/UserDetail/EditUser.scss'
import { useForm, Controller } from 'react-hook-form';
import { addStation } from "../../services/apiStations";
import ModalDefault from "../Modal/ModalDefault";
function StationRegister({ show, setshow }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm();

  const queryClient = useQueryClient();


  const mutation = useMutation({
    mutationFn: addStation,
    onSuccess: () => {
      console.log("station added successfuly")
      queryClient.invalidateQueries({
        queryKey: ['stations'],
      });
    },
    onError: (err) => console.log(err.message),
  })

  const onSubmit = (data) => {
    // console.log(data);
    const formateDate = {
      ...data,
    address_lat: parseFloat(data.address_lat),
    district: "서울",
    address_lng: parseFloat(data.address_lng),
    autharization_date: format(new Date(data.autharization_date), "yyyy-MM-dd"),
    start_date: format(new Date(data.start_date), "yyyy-MM-dd")
    }
    console.log(formateDate);
    mutation.mutate(formateDate)
  }




  

  function onError(errors) {
    console.log(errors);
  }

  const handleclick = () => {
    setshow(!show);
  };



  return (
    <div className={`station-regist-station-add ${show ? "" : "full-width"}`}>

      <img src="/img/marker.png" className="img-marker" />
      <div className="station-regist-station-add-header">
        <div className="station-regist-header-add-left">
          <span className="station-title-kor">사업소</span>
          <span className="station-tile-eng">REGISTER</span>
        </div>
        <span className="station-title-notice">
          <span className="essential-mark">*</span> 표시는 필수항목입니다
        </span>
      </div>
      <div >
        <form onSubmit={handleSubmit(onSubmit,onError)} className="station-regist-station-add-input">
          <div className="input-item-station-add">
            <label>
              사업소명 <span className="essential-mark"> *</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
              className={`custom-input-default  ${errors.name && 'reqired'} `}
            />
          </div>
          <div className="input-item-station-add">
            <label>
              사업자
              <span className="essential-mark"> *</span>
            </label>
            <select className="custom-select"{...register("bussiness_id")}>
              <option selected disabled>
                선택
              </option>
              <option value={"서울"}>서울</option>
            </select>
            <button
              onClick={handleclick}
              className="button-search"
              style={{ marginLeft: "10px" }}
            >
              사업자 추가
            </button>
          </div>
          <div className="input-item-station-add">
            <label>
              주소 <span className="essential-mark"> *</span>
            </label>
            <input
              type="text"
              placeholder="찾기를 클릭해주세요"
              className="custom-input-default-search border-left"
              {...register("address", { required: true })}
            ></input>
            <button className="button-search-address">찾기</button>
          </div>
          <div className="input-item-station-add">
            <label>상세주소</label>
            <input
              type="text"
              placeholder="정확히 가입해주세요"
              className="custom-input-default"
              {...register("detail-address", { required: true })}
            ></input>
          </div>
          <div className="input-item-station-add">
            <label>
              좌표 <span className="essential-mark"> *</span>
            </label>
            <div className="input_item_lat_lng">
              <input
                type="text"
                value="위도"
                disabled
                className="custom-input-default-start-title start"

              />
              <input
                type="text"
                placeholder=""
                className="custom-input-default-start"
                {...register("address_lat", { required: true })}
              />

              <input
                type="text"
                disabled
                value="경도"
                className="custom-input-default-start-title"
              />
              <input
                type="text"
                placeholder=""
                className="custom-input-default-start end"
                {...register("address_lng", { required: true })}
              />
            </div>
          </div>
          <div className="input-item-station-add">
            <label>
              전화번호 <span className="essential-mark"> *</span>
            </label>
            <input
              type="text"
              placeholder="번호만 입력해주세요"
              className="custom-input-default"
              {...register("phoneNumber", { required: true })}
            ></input>
          </div>
          <div className="input-item-station-add">
            <label>
              관리자(정)
              <span className="essential-mark"> *</span>
            </label>
            <select className="custom-select-default">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
            </select>
          </div>
          <div className="input-item-station-add">
            <label>
              관리자(부)
              <span className="essential-mark"> *</span>
            </label>
            <select className="custom-select-default">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
            </select>
          </div>
          <div className="input-item-station-add">
            <label>
              사업소 종류
              <span className="essential-mark"> *</span>
            </label>
            <select className="custom-select-default"
              {...register("group", { required: true })}
            >
              <option selected disabled>
                선택
              </option>
              <option value={3}>충전</option>
              <option value={2}>저장</option>
              <option value={1}>생산</option>
            </select>
          </div>
          <div className="input-item-station-add">
            <label>인가일</label>
            <div className="input_item_lat_lng">
              <Controller
                name="autharization_date"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    locale={ko}
                    className="custom-datepicker"
                    dateFormat="yyyy-MM-dd"
                    selected={field.value}
                    placeholderText="선택"
                    onChange={(date) => field.onChange(date)}

                  />
                )}
              />
            </div>
          </div>
          <div className="input-item-station-add">
            <label>개시일</label>
            <div className="input_item_lat_lng">
              <Controller
                name="start_date"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    locale={ko}
                    className="custom-datepicker"
                    dateFormat="yyyy-MM-dd"
                    selected={field.value}
                    placeholderText="선택"
                    onChange={(date) => field.onChange(date)}

                  />
                )}
              />

            </div>
          </div>
          <button className="button-submit-form" type="submit">등록하기</button>
        </form>
      </div>
    </div>
  );
}

export default StationRegister;
