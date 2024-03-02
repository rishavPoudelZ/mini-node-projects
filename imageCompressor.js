// A cli tool that compresses all the images provided in a directory
// run it like this ->  node imageCompressor.js D:\folder\images
//  **** make sure to have only images in the given directory any other type of files will cause error
//  the output will be produced inside the given directory in a folder named dist

import sharp from "sharp";
import fs from 'fs'

const args = process.argv.slice(2)
const dir = args[0]

fs.readdir(`${dir}`, (err,files) => {
    if (err) throw err;
    fs.mkdir(`${dir}/dist`, { recursive: true }, (err)  =>{
        if (err) throw err
    })
    try{
         files.forEach( (file) => {

            sharp(`${dir}/${file}`)
                .toBuffer((err, data, info) =>{
                    console.log(`${file} Before:${info.size}`)
                })
                .png({
                    quality: 80
                })
                .toFile(`${dir}/dist/${file}`, (err, info) =>{
                    if (err) throw err
                })
                .toBuffer((err, data, info) =>{
                    console.log(`${file} After:${info.size}`)
                })
        });
    }
    catch{ err => {
        throw err
    }}
})




