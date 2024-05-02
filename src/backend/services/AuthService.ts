/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthRegister(
        body?: {
            user: {
                fullName: string;
                password: string;
                email: string;
                verified: boolean;
            };
            company: {
                name: string;
                ownerID: number;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthLogin(
        body?: {
            password: string;
            email: string;
        },
    ): CancelablePromise<{
        user: {
            userID: number;
            fullName: string;
            password: string;
            email: string;
            verified: boolean;
        };
        company: {
            companyID: number;
            name: string;
            ownerID: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: body,
        });
    }
    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
        });
    }
}
