/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WhatsappService {
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getWhatsappTest(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/whatsapp/test',
        });
    }
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getWhatsappCreateSession(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/whatsapp/create-session',
        });
    }
}
