import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatchType, AppStateType } from "../redux/store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;