module.exports.postaddblog = async (req, res) => {
    let { title, body, userid } = req.body;
    // console.log(title, body);
    // res.send("got it ")
    let userexist = await User.findById(userid);
    if (userexist) {
        let newblog = new blogs({
            title: title,
            body: body,
            date: Date.now(),
            userid: userid
        })
        await newblog.save()
        userexist.blogs.push(newblog._id)
        await userexist.save();
        res.json({
            sucess: true,
            data: newblog,
            message: "blog added sucessfully "
        })
    }
}
module.exports = getreadblog = async (req, res) => {
    let allblog = await blogs.find();
    res.json({
        sucess: true,
        data: allblog
    })

}
module.exports.getoneblog = async (req, res) => {
    let { id } = req.params
    let blog = await blogs.findOne({ _id: id });
    res.json({
        sucess: true,
        data: blog
    })

}
module.exports.deleteblog = async (req, res) => {
    let { blogid } = req.params;
    let { userid } = req.body;
    let blogexists = await blogs.findById(blogid);
    if (!blogexists) return res.json({
        sucess: false,
        message: "blog does not exist"
    })

    console.log(blogexists.userid);
    console.log(userid);
    if (blogexists.userid != userid) return res.json({
        sucess: false,
        message: "you are not allowd to delete this blog "
    })
    console.log()
    await blogs.findByIdAndDelete(blogid);
    let userexist = await User.findByIdAndDelete(userid);
    let blog = userexist.blogs.filter((id) => id != blogid)
    userexist.blogs = blog
    await userexist.save();
    res.json({
        sucess: true,
        Message: "blog deleted sucessfully ",

        data: userexist
    })


}
