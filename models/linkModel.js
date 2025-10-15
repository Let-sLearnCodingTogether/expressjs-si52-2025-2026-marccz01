import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {
        title  : {
            type : String,
            required : [true, "Title wajib di isi"]
        },
        icon : {
            type : String,
            required : [true, "Icon wajib di isi"]
        },
        url : {
            type : String,
            required : [true, "Tempelkan Link Url Anda"]
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
})

const LinkModel = mongoose.Model("Link", LinkSchema)

export default LinkModel