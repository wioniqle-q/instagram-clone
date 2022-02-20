import User from "../Modal/userModal.js";


export const registerUser = (req, res) => {
    const { name, password, email, image } = req.body;
    User.create({
        name,
        password,
        email,
        image,
    }).then(res.send("User Created")).catch(err => res.send(err));
}