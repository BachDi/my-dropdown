import { useState } from 'react'
import Picture from '../Picture'

const Dropdown = () => {
  const [meat, setMeat] = useState('')

  function changeOption(event: React.ChangeEvent<HTMLSelectElement>): void {
    setMeat(event.target.value)
  }

  const Meat = () => {
    if (meat === 'heo') {
      return (
        <Picture
          link="https://photo-cms-baonghean.zadn.vn/w1000/Uploaded/2021/xqymkxrlxk/2018_04_15/41622041_1542018.jpg"
          title="Thịt heo"
        />
      )
    }
    if (meat === 'bo') {
      return <Picture link="https://cdn.tgdd.vn/2021/01/content/bo%CC%80vai-800x500.jpg" title="Thịt bò" />
    }
    if (meat === 'ga') {
      return <Picture link="https://www.vissan.com.vn/images/2014/dui_ga_goc_tu_1_s_1.jpg" title="Thịt gà" />
    }
    if (meat ==='chay'){
    return (
      <Picture
        link="https://congthuong.vn/stores/news_dataimages/mn_thao/052021/11/08/4336_Rau_xanh.jpg?rt=20210511084337"
        title="Ăn chay"
      />
    )
  }
  return null
}

  const ListOption = () => {
    return (
      <div>
        <form>
          <label className="lable-content">Loại thịt bạn muốn ăn: </label>
          <select id="meats" name="meat" onChange={changeOption} value={meat}>
            <option value="">--Chọn loại thịt--</option>
            <option value="heo">Thịt heo</option>
            <option value="bo">Thịt bò</option>
            <option value="ga">Thịt gà</option>
            <option value="chay">Ăn chay</option>
          </select>
        </form>
      </div>
    )
  }

  return (
    <div>
      <ListOption />
      <Meat />
    </div>
  )
}

export default Dropdown
