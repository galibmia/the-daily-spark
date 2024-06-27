import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Daily Spark`;
    }, [title])
};

export default useTitle;