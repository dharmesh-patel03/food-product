1. **Homepage**
   - Displays a list of food products fetched from the OpenFoodFacts API.
   - Includes a **search bar** for filtering products by name.
   - Includes a **category filter** dropdown for filtering products by category.
   - Implements pagination or infinite scroll to load more products.

2. **Search and Filter**
   - Users can search for products by name using a debounced search input.
   - Products are filtered by category through an API-driven dropdown.

3. **Product Detail Page**
   - Displays detailed product information, including the product image, ingredients, and nutritional information, when a product is clicked.

4. **Sorting**
   - Users can sort products alphabetically by name or by nutrition grade (ascending or descending).

### Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the OpenFoodFacts API.
- **TailwindCSS**: A utility-first CSS framework for building responsive UI components.
- **React Router**: For handling client-side routing.
- **OpenFoodFacts API**: For fetching real-time data about food products.