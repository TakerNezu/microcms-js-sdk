import { MicroCMSClient, GetRequest, GetListRequest, GetListDetailRequest, GetObjectRequest, MicroCMSListResponse, MicroCMSListContent, MicroCMSObjectContent } from './types';
/**
 * Initialize SDK Client
 */
export declare const createClient: ({ serviceDomain, apiKey }: MicroCMSClient) => {
    get: <T = any>({ endpoint, contentId, queries, }: GetRequest) => Promise<T>;
    getList: <T_1 = any>({ endpoint, queries, }: GetListRequest) => Promise<MicroCMSListResponse<T_1>>;
    getListDetail: <T_2 = any>({ endpoint, contentId, queries, }: GetListDetailRequest) => Promise<T_2 & import("./types").MicroCMSContentId & import("./types").MicroCMSDate>;
    getObject: <T_3 = any>({ endpoint, queries, }: GetObjectRequest) => Promise<T_3 & import("./types").MicroCMSDate>;
    post: <T_4 = any>(endpoint: string, body: T_4) => Promise<any>;
};
