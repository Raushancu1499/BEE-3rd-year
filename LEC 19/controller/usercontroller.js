module.exports.postuser = async (req, res) => {
    let { email, username, password } = req.body;

    let newUser = new User({
        email: email,
        username: username,
        password: password,
    });

    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully",
    });
}
module.exports.getreadalluser = async (req, res) => {
    let allUsers = await User.find().populate("blogs");
    res.json({
        success: true,
        data: allUsers,
    });
}
module.exports.getsingleuser = async (req, res) => {
    let { id } = req.params;
    let userexist = await User.findOne({ _id: id }).populate("blogs")
    if (userexist) {
        res.json({
            success: true,
            data: userexist,
        });
    }

}
