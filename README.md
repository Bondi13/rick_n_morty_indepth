Tasks:

1. Add tests for the number of characters, locations, and episodes.
2. Replace character, location, and episode values with data from fixtures.
3. Move the above selectors to pageObjects.
4. Write a test:
    Go to Docs, navigate to the "Get all characters" section, and check if the method is GET and the URL is https://rickandmortyapi.com/api/character.
5. Write a function that goes to Docs and returns the URL value from the "Get all characters" section with "/ " added at the end.
6. Write a test:
    Send a request to retrieve all characters that are aliens, alive, and genderless. Check if the count matches the data in fixtures.
7. Transform the above test into a function that accepts arguments: species, status, gender, and expected count.
8. Add datasets to fixtures. Add a test that executes the function for each added dataset.