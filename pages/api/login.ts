// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import $api from '../../utils/axios';

type Data = {
    username: string;
    password: string;
}

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        $api.post("/users/auth/jwt/create/", req.body)
            .then(({ data, status }) => {
                res.status(status).json(data)
            })
    } catch (e) {
        res.status(400).json(e)
    }
}