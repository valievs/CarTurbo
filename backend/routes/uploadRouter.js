const express = require("express")
const Product = require("../models/Product")
const upload = require('../helper.js')


const router = express.Router();


//post multiple files
router.post('/products', upload.array('files'), async (req, res) => {
    try {

        let filesArray = [];
        req.files.forEach(element => {
            const filesMultiple = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                //you may or may not add this
                fileSize: sizeFormater(element.size, 2) // 2.667 = 2.67
            }
            filesArray.push(filesMultiple);
        });
        const multipleFiles = new Product({
            files: filesArray
        });

        await multipleFiles.save();
        console.log("Multiple Files Uploaded Successfully!");
        res.status(201).send("Multiple Files Uploaded Successfully!");

    } catch(error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}
);


//get multiple files
router.get('/getMultipleFiles', async (req, res) => {
    try {

        const files = await MultipleFiles.find();
        res.status(200).send(files);

    } catch(error) {
        console.log(error);
        res.status(400).send(error.message);
    }
});

const sizeFormater = (bytes, decimal) => {
    if(bytes === 0) {
        return '0 bytes';
    }

    const dm = decimal || 2; //2.667 = 2.67
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm) + ' ' + sizes[index]);
}

module.exports = router;