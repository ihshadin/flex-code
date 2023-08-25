import { useEffect } from "react";

const useScrollTop = (currentPage) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[currentPage])
}
export default useScrollTop;