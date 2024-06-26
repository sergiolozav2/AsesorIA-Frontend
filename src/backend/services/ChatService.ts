/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatService {
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getChatAll(): CancelablePromise<{
        list: Array<{
            chatID: number;
            jid: string;
            client: {
                clientID: number;
                firstName: string;
                phone: string;
                profilePicture: string;
            };
            messages: Array<{
                fromMe: boolean;
                content: any;
                createdAt: string;
            }>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/all',
        });
    }
}
