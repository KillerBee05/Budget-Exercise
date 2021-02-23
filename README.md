# Budget Calculator Exercise

As clients move through the yardzen onboarding process, issues commonly arise around setting realistic expectations for the cost of building their designs in the real world. To help clients better understand the cost of the individual elements they would like to see in their designs as well as the end build cost, we would like to build a budget calculator. This would essentially be a checklist of different elements that we might include in the designs, as well as a ballpark estimate based on which elements have been selected.

## Prompt

Create a simple Budget calculator/checklist using React and an API of your design. We're looking for a react app that first takes a numerical "budget" input, and then presents the user with a 'checklist' page. On said page, the client should be able to select any number of line items descibed in the `seeds.json` file. When selected, each item should add to a total estimated project cost, which should be visible to the client at all times. The estimate should be displayed as a range as opposed to a discrete value, the high and low end of which should be calculated from the `highPrice` and `lowPrice` present on each checklist item described in the seed file. The client application should provide feedback to the user based on a comparison between their target budget and the range provided by the low and high prices of their selected items (over budget, under budget, within range, etc.).

Items should be shown on the page in groups associated by their `type` property. After completion the user should be able to submit their selection, upon which they will be brought to a page that confirms that they have completed the process. This page should also show a summary of the options they chose and the related budgeting information.

Use the included `seeds.json` file to seed a database of your choice and design. Construct an API that serves the information stored in said database to your client application. This API should also be capable of recieving and storing the user's checklist selection on submission. Serving `seeds.json` to the client application directly is against the rules. We would prefer that you use one of the following programming languages for the API code: TypeScript, Golang, Python.

Please explain your architecture choices in a file exercise.md and commit with your code.

You will be judged based on the quality of your solution's user interface, backend architecture, code quality, and code modularity. This excersize is inherently full stack, so we expect to see prowess on the front and back end. We are not expecting to see things like a robust authentication system, strict security practices, or anything too complicated; however, we would like you to explain your thoughts on this topic relating to a real world deploy scenario of an application like that of this exercise in exercise.md as well. That being said, feel free to have fun and take this project in any direction you would like granted you meet the basic requirements listed above. Feel free to bootstrap the react application however you pleese.

Bonus points for using typecript to output any JavaScript code you produce.
Bonus points for tests.

The rest is up to you, but a good solution should not require the reviewer to perform time intensive setup tasks, like standing up a local sequel database. We recommend that you use tools like docker/docker-compose to make the process of running the app simple and predictable.

## Tips

- the _items_ look like this:

```typescript
interface Item {
  type: string;
  name: string;
  lowPrice: number;
  highPrice: number;
}
```

- The _lowPrice_ and _highPrice_ properties are integers representing United States Currency, the last two digits of each number are cents. This means that `60000` is equal to \$600.00. It is expected that you will display the currency on screen in a common human-readable format.

- Each _type_ string is an uppercase string separated by underscores. You should transform these properties to display category names with proper english grammer. ie WATER_FEATURES should become Water Features.

## What we would like to see

- Excellent UI design.
- An understanding of react in general.
- Use of modular components.
- Functional components that utilize hooks.
- Some sort of documentation
- state management with react built in functionality only (no redux).
