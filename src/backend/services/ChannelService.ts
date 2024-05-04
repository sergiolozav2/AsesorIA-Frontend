/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChannelService {
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getChannelSessions(): CancelablePromise<{
        list: Array<{
            waSessionID: string;
            name: string;
            createdAt: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/channel/sessions',
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static deleteChannelSession(
        body?: {
            waSessionID: string;
        },
    ): CancelablePromise<{
        waSessionID: string;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/channel/session',
            body: body,
        });
    }
}
