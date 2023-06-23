import { Provider } from "react-redux";
import { store } from "app/store";
import { WithChildren } from "types/common";

export default function StoreProvider({ children }: WithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
