import Message from "../Modal/messageModal.js";

export const sendMessage = (req, res) => {
    const { message } = req.body;

    Message.create({
        message,
    }).then(res.send("Message Created")).catch(err => res.send(err));
}