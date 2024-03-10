Project Description This project implements a web application for a company
providing car rental services in Ukraine. The application consists of three main
pages:

Home Page: Contains an overview of the company's services. Styling and design
are left to the developer's discretion.

Car Catalog: Displays a catalog of cars of different specifications that can be
filtered by brand, hourly rental price, and mileage.

Favorite Cars: A page where users can view advertisements they have marked as
favorites.

Implementation of Advertisement Card Features:

Heart button on the advertisement card allows users to add/remove advertisements
to/from their favorites list, changing the button color accordingly. Upon page
refresh, the final user actions are preserved. Clicking the "Learn more" button
opens a modal window with detailed information about the car and its rental
conditions. The modal window can be closed by clicking the close button,
clicking on the backdrop, or pressing the Esc key. The car's mileage is
displayed with commas in the UI (e.g., 4,500). The "Rental car" button is
implemented as a link allowing users to contact the company via phone number
+380730000000. Routing:

React Router is used with the following routes: /: Home page with a general
description of the company's services. /catalog: Page with a catalog of cars.
/favorites: Page with favorite advertisements. If a user accesses a non-existent
route, they are redirected to the home page. Backend:

Filtering by car brand using a dropdown. Dropdown for filtering advertisements
by hourly rental prices (increments of $10). Input group to specify the mileage
range of the car.
