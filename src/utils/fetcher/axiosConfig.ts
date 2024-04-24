import axios from "axios";

class CustomError extends Error {
    constructor(message: any, customValue: any) {
        super(message);
        this.error = customValue;
    }

    get error(): any {
        return this.error;
    }

    set error(obj) {
        this.error = obj;
    }
}

const ApiClient = () => {
    const defaultOptions = {
        baseURL: process.env.FAKE_API,
    };
    const instance = axios.create(defaultOptions);
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            throw error
        },
    )
    return instance
}

export default ApiClient();