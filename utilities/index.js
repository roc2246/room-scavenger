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

