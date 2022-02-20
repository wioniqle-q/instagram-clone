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
export const loginUser = (req, res) => {
    const { name, password } = req.body;
    User.findOne({
        name,
        password,
    }).then(user => {
        if (user) {
            res.send(user);
        } else {
            res.send("User Not Found");
        }
    }).catch(err => res.send(err));
}

export const editUser = (req, res) => {
    const { _id } = req.params;
    const { name, password, email, image } = req.body;
    User.findByIdAndUpdate(_id, {
        name,
        password,
        email,
        image,
    }).then(user => {
        if (user) {
            res.send(user);
        } else {
            res.send("User Not Found");
        }
    }).catch(err => res.send(err));
}
export const deleteUser = (req, res) => {
    const { _id } = req.params;
    User.findByIdAndDelete(_id).then(user => {
        if (user) {
            res.send(user);
        } else {
            res.send("User Not Found");
        }
    }).catch(err => res.send(err));
}
export const getUser = (req, res) => {
    const { _id } = req.params;
    User.findById(_id).then(user => {
        if (user) {
            res.send(user);
        } else {
            res.send("User Not Found");
        }
    }).catch(err => res.send(err));
}