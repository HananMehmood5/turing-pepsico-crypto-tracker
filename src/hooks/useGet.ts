import { useEffect, useMemo, useState } from "react";


type GetState<T> = {
    loading: boolean;
    data?: T;
    error?: string;
};

type ReturnProps<T> = GetState<T>

export const useGet = <T>(fetchFunction: () => Promise<T>): ReturnProps<T> => {
    const [state, setState] = useState<GetState<T>>({
        loading: true,
        data: undefined,
        error: undefined,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState(prev => ({ ...prev, loading: true }));
                const response = await fetchFunction();
                setState({ loading: false, error: undefined, data: response });
            } catch (error) {
                console.error('Error fetching crypto data:', error);
                setState(prev => ({ ...prev, error: "Something went wrong", loading: false }));
            }
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return useMemo(() => state, [state]);
}