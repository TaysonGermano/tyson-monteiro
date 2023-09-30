import { DarkMode } from "../action/type";

const initialstate = {
  darkMode: false,
};

export default function reducer(
  state = initialstate,
  action: {
    type: string;
  }
) {
  switch (action.type) {
    case DarkMode.IS_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
