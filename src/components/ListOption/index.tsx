import Option from "../Option";
import Data from "constants/database/meat.json";
import { useStores } from "stores";
import { observer } from "mobx-react";
const ListOption = () => {
  const { meatStore } = useStores();
  const { meat } = meatStore;

  function changeOption(event: React.ChangeEvent<HTMLSelectElement>): void {
    meatStore.setMeat(event.target.value);
  }
  return (
    <div>
      <form>
        <label className="lable-content">Loại thịt bạn muốn ăn: </label>
        <select id="meats" name="meat" onChange={changeOption} value={meat}>
          {Data.map((item) => (
            <Option value={item.value} name={item.title} />
          ))}
        </select>
      </form>
    </div>
  );
};

export default observer(ListOption);

