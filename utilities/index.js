import fetch from "node-fetch";
const {Readable} = require('stream')

async function scrape(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Connection': 'keep-alive'
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const html = await response.text();  // Get the HTML content as a string
          // Extract the text between <body> tags using a DOMParser
          const bodyContent = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i); // Regex to capture body content

          if (bodyContent && bodyContent[1]) {
              const textContent = bodyContent[1]
                  .replace(/<[^>]*>/g, '') // Remove all HTML tags
                  .trim(); // Trim whitespace
              return Readable.from(textContent);
          }
  
          return Readable.from('No <body> content found.');
    } catch (error) {
        throw error
    }
     
}

async function stream(input){
    return await new Promise((resolve, reject) => {
        let data = "";
        input.on("data", (chunk) => data += chunk.toString());
        input.on("end", () => resolve(data));
        input.on("error", (err) => reject(err));
    });
}

/*
FUNCTION ScrapeApartmentRentals
TRY
    // Step 1: FETCH HTML DOCUMENT
    SEND GET request to the apartment listings page URL
    RECEIVE HTML response

    // Step 2: SET TAGS/CLASS/ID TO LOOK FOR
    IDENTIFY relevant HTML elements (tags, classes, IDs) that contain the data you need
        Example: 
            - Titles (e.g., <h2 class="listing-title">)
            - Prices (e.g., <span class="price">)
            - Links to individual listings (e.g., <a href="listing-url">)
            - Locations (e.g., <div class="location">)
            - Descriptions (e.g., <p class="description">)

    // Step 3: EXTRACT CONTENT
    FOR each identified element in the page:
        EXTRACT the desired data (text, URL, etc.)
        CLEAN and format the data (strip extra spaces, format numbers, etc.)

    // Step 4: OUTPUT TO OBJ
    STORE the extracted data in an object or array
        Example: 
            listings = [
                {
                    title: "2-Bedroom Apartment",
                    price: "$1200/month",
                    location: "Downtown",
                    link: "https://example.com/listing/123",
                    description: "Spacious 2-bedroom apartment with a view."
                },
                ...
            ]

    // Step 5: RETURN OBJ
    RETURN the object/array containing all extracted listings
END FUNCTION
CATCH
    THROW ERROR
*/

module.exports = {
scrape,
stream
}