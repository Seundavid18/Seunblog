const express = require('express')
const app = express()
const connectDB = require('./config/Config')
const dotenv = require('dotenv')
dotenv.config()
const multer = require('multer')
const path = require("path")
const cors = require('cors')


connectDB();
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

const PORT = process.env.PORT || 8000


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, 
    filename:(req, file, cb) => {
        cb(null, req.body.name)
    },
})

const upload = multer({storage: storage})
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(200).json('File has been uploaded')
})

const authRouter = require("./src/routes/auth");
const userRouter = require("./src/routes/user")
const postRouter = require("./src/routes/post")
const catRouter = require("./src/routes/category")

app.use(cors())
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/categories', catRouter)

// app.use(express.static(path.join(__dirname, "/client/build")))

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/client/build", "index.html"))
// })

app.use(express.static("./client/build"))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})