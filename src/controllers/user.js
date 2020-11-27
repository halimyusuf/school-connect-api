import wrapper from '../utils/wrapper';

export const login = wrapper((req, res) => {
    res.json({ data: `Email: ${req.body.email},  password: ${req.body.password}` });
});
