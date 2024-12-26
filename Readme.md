# Dashboard Utilities

A simple and responsive dashboard showcasing a collection of utilities with search functionality, built with HTML, Tailwind CSS, and JavaScript.

## Features

- **Dynamic Tools**: The tools and their descriptions are fetched dynamically from a JSON file.
- **Search Functionality**: Quickly search tools by name or description.
- **Keyboard Shortcut**: Use `Cmd + K` (Mac) or `Ctrl + K` (Windows/Linux) to focus the search bar.
- **Dark Mode**: Automatically supports light and dark themes based on user preference.
- **Responsive Design**: Fully responsive layout suitable for desktop, tablet, and mobile devices.
- **External Links**: All tools open in new tabs for a seamless user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd dashboard-utilities
   ```

3. Serve the project locally:
   - You can use any HTTP server to serve the files locally, such as:
     ```bash
     npx serve
     ```
   - Alternatively, use a lightweight server like Python:
     ```bash
     python3 -m http.server
     ```

4. Open the project in your browser:
   ```
   http://localhost:8000
   ```

## Project Structure

```
├── index.html         # Main HTML file
├── style.css          # TailwindCSS-based custom styles
├── app.js             # JavaScript for dynamic rendering and functionality
├── tools.json         # JSON file containing tools data
└── README.md          # Project documentation
```

## Tools JSON Format

The `tools.json` file contains a list of tools with the following structure:

```json
[
  {
    "name": "JSON Formatter",
    "description": "Format and beautify your JSON data for better readability and debugging.",
    "link": "https://jsonformatter.com"
  },
  {
    "name": "Regex Tester",
    "description": "Test and validate your regular expressions instantly.",
    "link": "https://regextester.com"
  }
]
```

## Customization

- **Add New Tools**: Update the `tools.json` file with new tool entries.
- **Styling**: Modify `style.css` or use Tailwind classes directly in the `index.html` file.
- **Search Behavior**: Enhance or customize the search logic in `app.js`.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) for rapid styling.
- [Serve](https://www.npmjs.com/package/serve) for serving static files locally.

---

Enjoy building with **Dashboard Utilities**!
