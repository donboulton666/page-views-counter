# Page Views Counter

Welcome to the Page Views Counter project! This project aims to track the number of views each page receives.

I've implemented a page view counter using Netlify Blobs and Netlify Functions, allowing us to monitor page view efficiently.

## Implementation and Usage Details

- **Objective:** Track page views.
- **Implementation:** Implemented an API with **Netlify Functions** and store view counts using **Netlify Blobs** Service.
- **Usage Instructions:**
    1. **Send a GET Request:** Send a GET request to the API endpoint with the URL of the page to track.
    2. **Receive Response:** Receive the response containing the page URL and its view count.
    3. **Display View Count:** Display the view count on your page as needed.

## API Endpoint

- **Endpoint:** `https://page-views-counter.netlify.app/page_view?page=https://example.com/index.html/`
- **Method:** GET
- **Request Parameters:** `page` (URL of the page to track)
- **Sample Request:**

    ```bash
    curl https://page-views-counter.netlify.app/page_view?page=https://example.com/index.html/
    ```

- **Sample Response:**

    ```json
    {
      "data": {
        "page_url": "https://example.com/index.html/",
        "view_count": 8,
        "last_modified": "2024-05-11T06:41:00.557Z"
      }
    }
    ```

The API response includes the page URL and its corresponding view count in JSON format.

## Demo Image

![Home](/images/home.png)

![Page 1](/images/page-1.png)

## How to setup locally

1. **Clone Repository**:
    Clone this repository to your local machine:

    ```bash
    git clone https://github.com/kananinirav/page-views-counter.git
    ```

2. **Install Netlify CLI**:
    Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) if you haven't already. This CLI tool allows you to interact with Netlify services from your command line.

3. **Install Dependencies**:
    Navigate to the project directory and install the dependencies:

    ```bash
    cd <project_directory>
    npm install
    ```

4. **Start Server**: Start the server locally using the Netlify CLI:

     ```bash
     netlify dev
     ```
