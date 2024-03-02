// A CLI application to take in a url and a css selector and print the text inside the selected element
// Run it like this -> node htmlSelector url selector
// Example node htmlSelector https://poudelrishav.com.np .site-branding-text

import cheerio from 'cheerio'
import axios from 'axios'

const args = process.argv.slice(2)


const url = args[0]
const selector = args[1]

async function getText(url,selector){
    try{
        const html = await axios.get(url)
        const $ = cheerio.load(html.data)
        let text = $(selector).prop('innerText')
        // let text = $(selector).html()
        console.log(text)
    }
    catch(error){
        console.error('Error:', error.message)
    }
}

getText(url,selector);