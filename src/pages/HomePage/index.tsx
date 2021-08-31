import dayjs from "dayjs";
import { observer } from "mobx-react";
import { useStores } from "stores";
import Dropdown from "components/Dropdown";

const HomePage = () => {
  const { spinnerStore } = useStores();

  console.log(
    dayjs().toDate(),
    dayjs().add(1, "day").format("MM/DD/YYY"),
    dayjs().subtract(1, "day").toDate()
  );
  console.log(spinnerStore.isLoading);
  function toggleLoading() {
    spinnerStore.toggleLoading();
  }

  return (
    <div>
      <span onClick={toggleLoading}>CHỌN THỊT</span>
      <Dropdown />
    </div>
  );
};

export default observer(HomePage);
