// A simple CLI application to search for most starred github projects between two given dates
// Run it like this -> node githubSearch date1 date2

// Parsing cli arguments
const args = process.argv.slice(2)
const date1 = args[0]
const date2 = args[1]

async function getRepo(date1,date2){
    // EncodingURI component to add in in url as a query string
    const queryString = 'q=' + encodeURIComponent(`pushed:${date1}..${date2}`)
    // Using github search API
    const url = `https://api.github.com/search/repositories?${queryString}&sort=stars&order=desc&per_page=10`
    const response = await fetch(url)
    const repoJSON = await response.json()
    repoJSON.items.forEach(item => {
        console.log(`Github url: ${item.html_url} Stars:${item.watchers}`)
    });
}

getRepo(date1,date2)
