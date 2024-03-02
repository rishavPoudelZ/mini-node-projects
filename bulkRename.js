// A simple CLI application to block rename files in the a given directory
// The files are renamed according to a base name
// ** Run it like this -> node bulkRename.js directory_path baseName
// Example node bulkRename.js D:\my\folder file
// Output will look something like
// file(1).pdf, file(2).png, file(3).jpg and so on

import path from 'path'
import fs from 'fs'

//Parsing CLI arguments
const args = process.argv.slice(2)
const dir = args[0]
const base = args[1]
let i = 0;

fs.readdir(`${dir}`,(err,files) => {
    if (err) throw err; 

    files.forEach(file => {
        let ext =  path.extname(file)
        let baseName = path.basename(file,ext)
        let oldFileName = baseName + ext
        fs.rename(`${dir}/${oldFileName}`, `${dir}/${base}(${i})${ext}`, async (err) =>{
            if (err) throw err
        })
        console.log(`${oldFileName} renamed to ${base}(${i})${ext}`)
        i +=1
    });
})