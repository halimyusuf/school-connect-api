import wrapper from '../utils/wrapper';

export const login = wrapper((req, res) => {
    res.send('Login page');
});
