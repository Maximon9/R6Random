export type Request<Data = any> = {
    data: Data;
    started: boolean;
    finished: boolean;
};
