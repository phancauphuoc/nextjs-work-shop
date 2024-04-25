import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export function getAllState() {
    return useSelector(state => state);
}

export function getSatate(key) {
    return useSelector(state => state[key]);
}